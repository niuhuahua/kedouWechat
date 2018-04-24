'use strict';

/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 *
 *
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

var __placeImgeUrlHttps = "https";
var __emojisReg = '';
var __emojisBaseSrc = '';
var __emojis = {};
var wxDiscode = require('./wxDiscode.js');
var HTMLParser = require('./htmlparser.js');
// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
// Block Elements - HTML 5
var block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
function makeMap(str) {
    var obj = {},
        items = str.split(",");
    for (var i = 0; i < items.length; i++) {
        obj[items[i]] = true;
    }return obj;
}

function q(v) {
    return '"' + v + '"';
}

function removeDOCTYPE(html) {
    return html.replace(/<\?xml.*\?>\n/, '').replace(/<.*!doctype.*\>\n/, '').replace(/<.*!DOCTYPE.*\>\n/, '');
}

function trimHtml(html) {
    return html.replace(/\r?\n+/g, '').replace(/<!--.*?-->/ig, '').replace(/\/\*.*?\*\//ig, '').replace(/[ ]+</ig, '<');
}

function html2json(html, bindName) {
    //处理字符串
    html = removeDOCTYPE(html);
    html = trimHtml(html);
    html = wxDiscode.strDiscode(html);
    //生成node节点
    var bufArray = [];
    var results = {
        node: bindName,
        nodes: [],
        images: [],
        imageUrls: []
    };
    var index = 0;
    HTMLParser(html, {
        start: function start(tag, attrs, unary) {
            //debug(tag, attrs, unary);
            // node for this element
            var node = {
                node: 'element',
                tag: tag
            };

            if (bufArray.length === 0) {
                node.index = index.toString();
                index += 1;
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length;
            }

            if (block[tag]) {
                node.tagType = "block";
            } else if (inline[tag]) {
                node.tagType = "inline";
            } else if (closeSelf[tag]) {
                node.tagType = "closeSelf";
            }

            if (attrs.length !== 0) {
                node.attr = attrs.reduce(function (pre, attr) {
                    var name = attr.name;
                    var value = attr.value;
                    if (name == 'class') {
                        // console.dir(value);
                        //  value = value.join("")
                        node.classStr = value;
                    }
                    // has multi attibutes
                    // make it array of attribute
                    if (name == 'style') {
                        // console.dir(value);
                        //  value = value.join("")
                        node.styleStr = value;
                    }
                    if (value.match(/ /)) {
                        value = value.split(' ');
                    }

                    // if attr already exists
                    // merge it
                    if (pre[name]) {
                        if (Array.isArray(pre[name])) {
                            // already array, push to last
                            pre[name].push(value);
                        } else {
                            // single value, make it array
                            pre[name] = [pre[name], value];
                        }
                    } else {
                        // not exist, put it
                        pre[name] = value;
                    }

                    return pre;
                }, {});
            }

            //对img添加额外数据
            if (node.tag === 'img') {
                node.imgIndex = results.images.length;
                var imgUrl = node.attr.src;
                if (imgUrl[0] == '') {
                    imgUrl.splice(0, 1);
                }
                imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
                node.attr.src = imgUrl;
                node.from = bindName;
                results.images.push(node);
                results.imageUrls.push(imgUrl);
            }

            // 处理font标签样式属性
            if (node.tag === 'font') {
                var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
                var styleAttrs = {
                    'color': 'color',
                    'face': 'font-family',
                    'size': 'font-size'
                };
                if (!node.attr.style) node.attr.style = [];
                if (!node.styleStr) node.styleStr = '';
                for (var key in styleAttrs) {
                    if (node.attr[key]) {
                        var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
                        node.attr.style.push(styleAttrs[key]);
                        node.attr.style.push(value);
                        node.styleStr += styleAttrs[key] + ': ' + value + ';';
                    }
                }
            }

            //临时记录source资源
            if (node.tag === 'source') {
                results.source = node.attr.src;
            }

            if (unary) {
                // if this tag dosen't have end tag
                // like <img src="hoge.png"/>
                // add to parents
                var parent = bufArray[0] || results;
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            } else {
                bufArray.unshift(node);
            }
        },
        end: function end(tag) {
            //debug(tag);
            // merge into parent tag
            var node = bufArray.shift();
            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

            //当有缓存source资源时于于video补上src资源
            if (node.tag === 'video' && results.source) {
                node.attr.src = results.source;
                delete results.source;
            }

            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            }
        },
        chars: function chars(text) {
            //debug(text);
            var node = {
                node: 'text',
                text: text,
                textArray: transEmojiStr(text)
            };

            if (bufArray.length === 0) {
                node.index = index.toString();
                index += 1;
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length;
                parent.nodes.push(node);
            }
        },
        comment: function comment(text) {
            //debug(text);
            // var node = {
            //     node: 'comment',
            //     text: text,
            // };
            // var parent = bufArray[0];
            // if (parent.nodes === undefined) {
            //     parent.nodes = [];
            // }
            // parent.nodes.push(node);
        }
    });
    return results;
};

function transEmojiStr(str) {
    // var eReg = new RegExp("["+__reg+' '+"]");
    //   str = str.replace(/\[([^\[\]]+)\]/g,':$1:')

    var emojiObjs = [];
    //如果正则表达式为空
    if (__emojisReg.length == 0 || !__emojis) {
        var emojiObj = {};
        emojiObj.node = "text";
        emojiObj.text = str;
        array = [emojiObj];
        return array;
    }
    //这个地方需要调整
    str = str.replace(/\[([^\[\]]+)\]/g, ':$1:');
    var eReg = new RegExp("[:]");
    var array = str.split(eReg);
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];
        var emojiObj = {};
        if (__emojis[ele]) {
            emojiObj.node = "element";
            emojiObj.tag = "emoji";
            emojiObj.text = __emojis[ele];
            emojiObj.baseSrc = __emojisBaseSrc;
        } else {
            emojiObj.node = "text";
            emojiObj.text = ele;
        }
        emojiObjs.push(emojiObj);
    }

    return emojiObjs;
}

function emojisInit() {
    var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/wxParse/emojis/";
    var emojis = arguments[2];

    __emojisReg = reg;
    __emojisBaseSrc = baseSrc;
    __emojis = emojis;
}

module.exports = {
    html2json: html2json,
    emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWwyanNvbi5qcyJdLCJuYW1lcyI6WyJfX3BsYWNlSW1nZVVybEh0dHBzIiwiX19lbW9qaXNSZWciLCJfX2Vtb2ppc0Jhc2VTcmMiLCJfX2Vtb2ppcyIsInd4RGlzY29kZSIsInJlcXVpcmUiLCJIVE1MUGFyc2VyIiwiZW1wdHkiLCJtYWtlTWFwIiwiYmxvY2siLCJpbmxpbmUiLCJjbG9zZVNlbGYiLCJmaWxsQXR0cnMiLCJzcGVjaWFsIiwic3RyIiwib2JqIiwiaXRlbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJxIiwidiIsInJlbW92ZURPQ1RZUEUiLCJodG1sIiwicmVwbGFjZSIsInRyaW1IdG1sIiwiaHRtbDJqc29uIiwiYmluZE5hbWUiLCJzdHJEaXNjb2RlIiwiYnVmQXJyYXkiLCJyZXN1bHRzIiwibm9kZSIsIm5vZGVzIiwiaW1hZ2VzIiwiaW1hZ2VVcmxzIiwiaW5kZXgiLCJzdGFydCIsInRhZyIsImF0dHJzIiwidW5hcnkiLCJ0b1N0cmluZyIsInBhcmVudCIsInVuZGVmaW5lZCIsInRhZ1R5cGUiLCJhdHRyIiwicmVkdWNlIiwicHJlIiwibmFtZSIsInZhbHVlIiwiY2xhc3NTdHIiLCJzdHlsZVN0ciIsIm1hdGNoIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsImltZ0luZGV4IiwiaW1nVXJsIiwic3JjIiwic3BsaWNlIiwidXJsVG9IdHRwVXJsIiwiZnJvbSIsImZvbnRTaXplIiwic3R5bGVBdHRycyIsInN0eWxlIiwia2V5Iiwic291cmNlIiwidW5zaGlmdCIsImVuZCIsInNoaWZ0IiwiY29uc29sZSIsImVycm9yIiwiY2hhcnMiLCJ0ZXh0IiwidGV4dEFycmF5IiwidHJhbnNFbW9qaVN0ciIsImNvbW1lbnQiLCJlbW9qaU9ianMiLCJlbW9qaU9iaiIsImFycmF5IiwiZVJlZyIsIlJlZ0V4cCIsImVsZSIsImJhc2VTcmMiLCJlbW9qaXNJbml0IiwicmVnIiwiZW1vamlzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFJQSxzQkFBc0IsT0FBMUI7QUFDQSxJQUFJQyxjQUFjLEVBQWxCO0FBQ0EsSUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsSUFBSUMsV0FBVyxFQUFmO0FBQ0EsSUFBSUMsWUFBWUMsUUFBUSxnQkFBUixDQUFoQjtBQUNBLElBQUlDLGFBQWFELFFBQVEsaUJBQVIsQ0FBakI7QUFDQTtBQUNBLElBQUlFLFFBQVFDLFFBQVEsb0dBQVIsQ0FBWjtBQUNBO0FBQ0EsSUFBSUMsUUFBUUQsUUFBUSx1VEFBUixDQUFaOztBQUVBO0FBQ0EsSUFBSUUsU0FBU0YsUUFBUSwwTEFBUixDQUFiOztBQUVBO0FBQ0E7QUFDQSxJQUFJRyxZQUFZSCxRQUFRLGtEQUFSLENBQWhCOztBQUVBO0FBQ0EsSUFBSUksWUFBWUosUUFBUSx3R0FBUixDQUFoQjs7QUFFQTtBQUNBLElBQUlLLFVBQVVMLFFBQVEsb0RBQVIsQ0FBZDtBQUNBLFNBQVNBLE9BQVQsQ0FBaUJNLEdBQWpCLEVBQXNCO0FBQ2xCLFFBQUlDLE1BQU0sRUFBVjtBQUFBLFFBQWNDLFFBQVFGLElBQUlHLEtBQUosQ0FBVSxHQUFWLENBQXRCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQU1HLE1BQTFCLEVBQWtDRCxHQUFsQztBQUNJSCxZQUFJQyxNQUFNRSxDQUFOLENBQUosSUFBZ0IsSUFBaEI7QUFESixLQUVBLE9BQU9ILEdBQVA7QUFDSDs7QUFFRCxTQUFTSyxDQUFULENBQVdDLENBQVgsRUFBYztBQUNWLFdBQU8sTUFBTUEsQ0FBTixHQUFVLEdBQWpCO0FBQ0g7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDekIsV0FBT0EsS0FDRkMsT0FERSxDQUNNLGVBRE4sRUFDdUIsRUFEdkIsRUFFRkEsT0FGRSxDQUVNLG1CQUZOLEVBRTJCLEVBRjNCLEVBR0ZBLE9BSEUsQ0FHTSxtQkFITixFQUcyQixFQUgzQixDQUFQO0FBSUg7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQkYsSUFBbEIsRUFBd0I7QUFDdEIsV0FBT0EsS0FDQUMsT0FEQSxDQUNRLFNBRFIsRUFDbUIsRUFEbkIsRUFFQUEsT0FGQSxDQUVRLGNBRlIsRUFFd0IsRUFGeEIsRUFHQUEsT0FIQSxDQUdRLGVBSFIsRUFHeUIsRUFIekIsRUFJQUEsT0FKQSxDQUlRLFNBSlIsRUFJbUIsR0FKbkIsQ0FBUDtBQUtEOztBQUdELFNBQVNFLFNBQVQsQ0FBbUJILElBQW5CLEVBQXlCSSxRQUF6QixFQUFtQztBQUMvQjtBQUNBSixXQUFPRCxjQUFjQyxJQUFkLENBQVA7QUFDQUEsV0FBT0UsU0FBU0YsSUFBVCxDQUFQO0FBQ0FBLFdBQU9uQixVQUFVd0IsVUFBVixDQUFxQkwsSUFBckIsQ0FBUDtBQUNBO0FBQ0EsUUFBSU0sV0FBVyxFQUFmO0FBQ0EsUUFBSUMsVUFBVTtBQUNWQyxjQUFNSixRQURJO0FBRVZLLGVBQU8sRUFGRztBQUdWQyxnQkFBTyxFQUhHO0FBSVZDLG1CQUFVO0FBSkEsS0FBZDtBQU1BLFFBQUlDLFFBQVEsQ0FBWjtBQUNBN0IsZUFBV2lCLElBQVgsRUFBaUI7QUFDYmEsZUFBTyxlQUFVQyxHQUFWLEVBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQ2hDO0FBQ0E7QUFDQSxnQkFBSVIsT0FBTztBQUNQQSxzQkFBTSxTQURDO0FBRVBNLHFCQUFLQTtBQUZFLGFBQVg7O0FBS0EsZ0JBQUlSLFNBQVNWLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJZLHFCQUFLSSxLQUFMLEdBQWFBLE1BQU1LLFFBQU4sRUFBYjtBQUNBTCx5QkFBUyxDQUFUO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsb0JBQUlNLFNBQVNaLFNBQVMsQ0FBVCxDQUFiO0FBQ0Esb0JBQUlZLE9BQU9ULEtBQVAsS0FBaUJVLFNBQXJCLEVBQWdDO0FBQzVCRCwyQkFBT1QsS0FBUCxHQUFlLEVBQWY7QUFDSDtBQUNERCxxQkFBS0ksS0FBTCxHQUFhTSxPQUFPTixLQUFQLEdBQWUsR0FBZixHQUFxQk0sT0FBT1QsS0FBUCxDQUFhYixNQUEvQztBQUNIOztBQUVELGdCQUFJVixNQUFNNEIsR0FBTixDQUFKLEVBQWdCO0FBQ1pOLHFCQUFLWSxPQUFMLEdBQWUsT0FBZjtBQUNILGFBRkQsTUFFTyxJQUFJakMsT0FBTzJCLEdBQVAsQ0FBSixFQUFpQjtBQUNwQk4scUJBQUtZLE9BQUwsR0FBZSxRQUFmO0FBQ0gsYUFGTSxNQUVBLElBQUloQyxVQUFVMEIsR0FBVixDQUFKLEVBQW9CO0FBQ3ZCTixxQkFBS1ksT0FBTCxHQUFlLFdBQWY7QUFDSDs7QUFFRCxnQkFBSUwsTUFBTW5CLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJZLHFCQUFLYSxJQUFMLEdBQVlOLE1BQU1PLE1BQU4sQ0FBYSxVQUFVQyxHQUFWLEVBQWVGLElBQWYsRUFBcUI7QUFDMUMsd0JBQUlHLE9BQU9ILEtBQUtHLElBQWhCO0FBQ0Esd0JBQUlDLFFBQVFKLEtBQUtJLEtBQWpCO0FBQ0Esd0JBQUlELFFBQVEsT0FBWixFQUFxQjtBQUNqQjtBQUNBO0FBQ0FoQiw2QkFBS2tCLFFBQUwsR0FBZ0JELEtBQWhCO0FBQ0g7QUFDRDtBQUNBO0FBQ0Esd0JBQUlELFFBQVEsT0FBWixFQUFxQjtBQUNqQjtBQUNBO0FBQ0FoQiw2QkFBS21CLFFBQUwsR0FBZ0JGLEtBQWhCO0FBQ0g7QUFDRCx3QkFBSUEsTUFBTUcsS0FBTixDQUFZLEdBQVosQ0FBSixFQUFzQjtBQUNsQkgsZ0NBQVFBLE1BQU0vQixLQUFOLENBQVksR0FBWixDQUFSO0FBQ0g7O0FBR0Q7QUFDQTtBQUNBLHdCQUFJNkIsSUFBSUMsSUFBSixDQUFKLEVBQWU7QUFDWCw0QkFBSUssTUFBTUMsT0FBTixDQUFjUCxJQUFJQyxJQUFKLENBQWQsQ0FBSixFQUE4QjtBQUMxQjtBQUNBRCxnQ0FBSUMsSUFBSixFQUFVTyxJQUFWLENBQWVOLEtBQWY7QUFDSCx5QkFIRCxNQUdPO0FBQ0g7QUFDQUYsZ0NBQUlDLElBQUosSUFBWSxDQUFDRCxJQUFJQyxJQUFKLENBQUQsRUFBWUMsS0FBWixDQUFaO0FBQ0g7QUFDSixxQkFSRCxNQVFPO0FBQ0g7QUFDQUYsNEJBQUlDLElBQUosSUFBWUMsS0FBWjtBQUNIOztBQUVELDJCQUFPRixHQUFQO0FBQ0gsaUJBcENXLEVBb0NULEVBcENTLENBQVo7QUFxQ0g7O0FBRUQ7QUFDQSxnQkFBSWYsS0FBS00sR0FBTCxLQUFhLEtBQWpCLEVBQXdCO0FBQ3BCTixxQkFBS3dCLFFBQUwsR0FBZ0J6QixRQUFRRyxNQUFSLENBQWVkLE1BQS9CO0FBQ0Esb0JBQUlxQyxTQUFTekIsS0FBS2EsSUFBTCxDQUFVYSxHQUF2QjtBQUNBLG9CQUFJRCxPQUFPLENBQVAsS0FBYSxFQUFqQixFQUFxQjtBQUNqQkEsMkJBQU9FLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ0g7QUFDREYseUJBQVNwRCxVQUFVdUQsWUFBVixDQUF1QkgsTUFBdkIsRUFBK0J4RCxtQkFBL0IsQ0FBVDtBQUNBK0IscUJBQUthLElBQUwsQ0FBVWEsR0FBVixHQUFnQkQsTUFBaEI7QUFDQXpCLHFCQUFLNkIsSUFBTCxHQUFZakMsUUFBWjtBQUNBRyx3QkFBUUcsTUFBUixDQUFlcUIsSUFBZixDQUFvQnZCLElBQXBCO0FBQ0FELHdCQUFRSSxTQUFSLENBQWtCb0IsSUFBbEIsQ0FBdUJFLE1BQXZCO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSXpCLEtBQUtNLEdBQUwsS0FBYSxNQUFqQixFQUF5QjtBQUNyQixvQkFBSXdCLFdBQVcsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixRQUFyQixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxVQUFuRCxFQUErRCxtQkFBL0QsQ0FBZjtBQUNBLG9CQUFJQyxhQUFhO0FBQ2IsNkJBQVMsT0FESTtBQUViLDRCQUFRLGFBRks7QUFHYiw0QkFBUTtBQUhLLGlCQUFqQjtBQUtBLG9CQUFJLENBQUMvQixLQUFLYSxJQUFMLENBQVVtQixLQUFmLEVBQXNCaEMsS0FBS2EsSUFBTCxDQUFVbUIsS0FBVixHQUFrQixFQUFsQjtBQUN0QixvQkFBSSxDQUFDaEMsS0FBS21CLFFBQVYsRUFBb0JuQixLQUFLbUIsUUFBTCxHQUFnQixFQUFoQjtBQUNwQixxQkFBSyxJQUFJYyxHQUFULElBQWdCRixVQUFoQixFQUE0QjtBQUN4Qix3QkFBSS9CLEtBQUthLElBQUwsQ0FBVW9CLEdBQVYsQ0FBSixFQUFvQjtBQUNoQiw0QkFBSWhCLFFBQVFnQixRQUFRLE1BQVIsR0FBaUJILFNBQVM5QixLQUFLYSxJQUFMLENBQVVvQixHQUFWLElBQWUsQ0FBeEIsQ0FBakIsR0FBOENqQyxLQUFLYSxJQUFMLENBQVVvQixHQUFWLENBQTFEO0FBQ0FqQyw2QkFBS2EsSUFBTCxDQUFVbUIsS0FBVixDQUFnQlQsSUFBaEIsQ0FBcUJRLFdBQVdFLEdBQVgsQ0FBckI7QUFDQWpDLDZCQUFLYSxJQUFMLENBQVVtQixLQUFWLENBQWdCVCxJQUFoQixDQUFxQk4sS0FBckI7QUFDQWpCLDZCQUFLbUIsUUFBTCxJQUFpQlksV0FBV0UsR0FBWCxJQUFrQixJQUFsQixHQUF5QmhCLEtBQXpCLEdBQWlDLEdBQWxEO0FBQ0g7QUFDSjtBQUNKOztBQUVEO0FBQ0EsZ0JBQUdqQixLQUFLTSxHQUFMLEtBQWEsUUFBaEIsRUFBeUI7QUFDckJQLHdCQUFRbUMsTUFBUixHQUFpQmxDLEtBQUthLElBQUwsQ0FBVWEsR0FBM0I7QUFDSDs7QUFFRCxnQkFBSWxCLEtBQUosRUFBVztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFJRSxTQUFTWixTQUFTLENBQVQsS0FBZUMsT0FBNUI7QUFDQSxvQkFBSVcsT0FBT1QsS0FBUCxLQUFpQlUsU0FBckIsRUFBZ0M7QUFDNUJELDJCQUFPVCxLQUFQLEdBQWUsRUFBZjtBQUNIO0FBQ0RTLHVCQUFPVCxLQUFQLENBQWFzQixJQUFiLENBQWtCdkIsSUFBbEI7QUFDSCxhQVRELE1BU087QUFDSEYseUJBQVNxQyxPQUFULENBQWlCbkMsSUFBakI7QUFDSDtBQUNKLFNBdkhZO0FBd0hib0MsYUFBSyxhQUFVOUIsR0FBVixFQUFlO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBSU4sT0FBT0YsU0FBU3VDLEtBQVQsRUFBWDtBQUNBLGdCQUFJckMsS0FBS00sR0FBTCxLQUFhQSxHQUFqQixFQUFzQmdDLFFBQVFDLEtBQVIsQ0FBYyxpQ0FBZDs7QUFFdEI7QUFDQSxnQkFBR3ZDLEtBQUtNLEdBQUwsS0FBYSxPQUFiLElBQXdCUCxRQUFRbUMsTUFBbkMsRUFBMEM7QUFDdENsQyxxQkFBS2EsSUFBTCxDQUFVYSxHQUFWLEdBQWdCM0IsUUFBUW1DLE1BQXhCO0FBQ0EsdUJBQU9uQyxRQUFRbUMsTUFBZjtBQUNIOztBQUVELGdCQUFJcEMsU0FBU1YsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2Qlcsd0JBQVFFLEtBQVIsQ0FBY3NCLElBQWQsQ0FBbUJ2QixJQUFuQjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJVSxTQUFTWixTQUFTLENBQVQsQ0FBYjtBQUNBLG9CQUFJWSxPQUFPVCxLQUFQLEtBQWlCVSxTQUFyQixFQUFnQztBQUM1QkQsMkJBQU9ULEtBQVAsR0FBZSxFQUFmO0FBQ0g7QUFDRFMsdUJBQU9ULEtBQVAsQ0FBYXNCLElBQWIsQ0FBa0J2QixJQUFsQjtBQUNIO0FBQ0osU0E3SVk7QUE4SWJ3QyxlQUFPLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkI7QUFDQSxnQkFBSXpDLE9BQU87QUFDUEEsc0JBQU0sTUFEQztBQUVQeUMsc0JBQU1BLElBRkM7QUFHUEMsMkJBQVVDLGNBQWNGLElBQWQ7QUFISCxhQUFYOztBQU1BLGdCQUFJM0MsU0FBU1YsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QlkscUJBQUtJLEtBQUwsR0FBYUEsTUFBTUssUUFBTixFQUFiO0FBQ0FMLHlCQUFTLENBQVQ7QUFDQUwsd0JBQVFFLEtBQVIsQ0FBY3NCLElBQWQsQ0FBbUJ2QixJQUFuQjtBQUNILGFBSkQsTUFJTztBQUNILG9CQUFJVSxTQUFTWixTQUFTLENBQVQsQ0FBYjtBQUNBLG9CQUFJWSxPQUFPVCxLQUFQLEtBQWlCVSxTQUFyQixFQUFnQztBQUM1QkQsMkJBQU9ULEtBQVAsR0FBZSxFQUFmO0FBQ0g7QUFDREQscUJBQUtJLEtBQUwsR0FBYU0sT0FBT04sS0FBUCxHQUFlLEdBQWYsR0FBcUJNLE9BQU9ULEtBQVAsQ0FBYWIsTUFBL0M7QUFDQXNCLHVCQUFPVCxLQUFQLENBQWFzQixJQUFiLENBQWtCdkIsSUFBbEI7QUFDSDtBQUNKLFNBbEtZO0FBbUtiNEMsaUJBQVMsaUJBQVVILElBQVYsRUFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTlLWSxLQUFqQjtBQWdMQSxXQUFPMUMsT0FBUDtBQUNIOztBQUVELFNBQVM0QyxhQUFULENBQXVCNUQsR0FBdkIsRUFBMkI7QUFDekI7QUFDRjs7QUFFRSxRQUFJOEQsWUFBWSxFQUFoQjtBQUNBO0FBQ0EsUUFBRzNFLFlBQVlrQixNQUFaLElBQXNCLENBQXRCLElBQTJCLENBQUNoQixRQUEvQixFQUF3QztBQUNwQyxZQUFJMEUsV0FBVyxFQUFmO0FBQ0FBLGlCQUFTOUMsSUFBVCxHQUFnQixNQUFoQjtBQUNBOEMsaUJBQVNMLElBQVQsR0FBZ0IxRCxHQUFoQjtBQUNBZ0UsZ0JBQVEsQ0FBQ0QsUUFBRCxDQUFSO0FBQ0EsZUFBT0MsS0FBUDtBQUNIO0FBQ0Q7QUFDQWhFLFVBQU1BLElBQUlVLE9BQUosQ0FBWSxpQkFBWixFQUE4QixNQUE5QixDQUFOO0FBQ0EsUUFBSXVELE9BQU8sSUFBSUMsTUFBSixDQUFXLEtBQVgsQ0FBWDtBQUNBLFFBQUlGLFFBQVFoRSxJQUFJRyxLQUFKLENBQVU4RCxJQUFWLENBQVo7QUFDQSxTQUFJLElBQUk3RCxJQUFJLENBQVosRUFBZUEsSUFBSTRELE1BQU0zRCxNQUF6QixFQUFpQ0QsR0FBakMsRUFBcUM7QUFDbkMsWUFBSStELE1BQU1ILE1BQU01RCxDQUFOLENBQVY7QUFDQSxZQUFJMkQsV0FBVyxFQUFmO0FBQ0EsWUFBRzFFLFNBQVM4RSxHQUFULENBQUgsRUFBaUI7QUFDZkoscUJBQVM5QyxJQUFULEdBQWdCLFNBQWhCO0FBQ0E4QyxxQkFBU3hDLEdBQVQsR0FBZSxPQUFmO0FBQ0F3QyxxQkFBU0wsSUFBVCxHQUFnQnJFLFNBQVM4RSxHQUFULENBQWhCO0FBQ0FKLHFCQUFTSyxPQUFULEdBQWtCaEYsZUFBbEI7QUFDRCxTQUxELE1BS0s7QUFDSDJFLHFCQUFTOUMsSUFBVCxHQUFnQixNQUFoQjtBQUNBOEMscUJBQVNMLElBQVQsR0FBZ0JTLEdBQWhCO0FBQ0Q7QUFDREwsa0JBQVV0QixJQUFWLENBQWV1QixRQUFmO0FBQ0Q7O0FBRUQsV0FBT0QsU0FBUDtBQUNEOztBQUVELFNBQVNPLFVBQVQsR0FBNkQ7QUFBQSxRQUF6Q0MsR0FBeUMsdUVBQXJDLEVBQXFDO0FBQUEsUUFBbENGLE9BQWtDLHVFQUExQixrQkFBMEI7QUFBQSxRQUFQRyxNQUFPOztBQUN6RHBGLGtCQUFjbUYsR0FBZDtBQUNBbEYsc0JBQWdCZ0YsT0FBaEI7QUFDQS9FLGVBQVNrRixNQUFUO0FBQ0g7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYjdELGVBQVdBLFNBREU7QUFFYnlELGdCQUFXQTtBQUZFLENBQWpCIiwiZmlsZSI6Imh0bWwyanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBodG1sMkpzb24g5pS56YCg5p2l6IeqOiBodHRwczovL2dpdGh1Yi5jb20vSnhjay9odG1sMmpzb25cclxuICpcclxuICpcclxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxyXG4gKiBvcmdhbml6YXRpb246IFdlQXBwRGV2KOW+ruS/oeWwj+eoi+W6j+W8gOWPkeiuuuWdmykoaHR0cDovL3dlYXBwZGV2LmNvbSlcclxuICogICAgICAgICAgICAgICDlnoLnm7Tlvq7kv6HlsI/nqIvluo/lvIDlj5HkuqTmtYHnpL7ljLpcclxuICpcclxuICogZ2l0aHVi5Zyw5Z2AOiBodHRwczovL2dpdGh1Yi5jb20vaWNpbmR5L3d4UGFyc2VcclxuICpcclxuICogZm9yOiDlvq7kv6HlsI/nqIvluo/lr4zmlofmnKzop6PmnpBcclxuICogZGV0YWlsIDogaHR0cDovL3dlYXBwZGV2LmNvbS90L3d4cGFyc2UtYWxwaGEwLTEtaHRtbC1tYXJrZG93bi8xODRcclxuICovXHJcblxyXG52YXIgX19wbGFjZUltZ2VVcmxIdHRwcyA9IFwiaHR0cHNcIjtcclxudmFyIF9fZW1vamlzUmVnID0gJyc7XHJcbnZhciBfX2Vtb2ppc0Jhc2VTcmMgPSAnJztcclxudmFyIF9fZW1vamlzID0ge307XHJcbnZhciB3eERpc2NvZGUgPSByZXF1aXJlKCcuL3d4RGlzY29kZS5qcycpO1xyXG52YXIgSFRNTFBhcnNlciA9IHJlcXVpcmUoJy4vaHRtbHBhcnNlci5qcycpO1xyXG4vLyBFbXB0eSBFbGVtZW50cyAtIEhUTUwgNVxyXG52YXIgZW1wdHkgPSBtYWtlTWFwKFwiYXJlYSxiYXNlLGJhc2Vmb250LGJyLGNvbCxmcmFtZSxocixpbWcsaW5wdXQsbGluayxtZXRhLHBhcmFtLGVtYmVkLGNvbW1hbmQsa2V5Z2VuLHNvdXJjZSx0cmFjayx3YnJcIik7XHJcbi8vIEJsb2NrIEVsZW1lbnRzIC0gSFRNTCA1XHJcbnZhciBibG9jayA9IG1ha2VNYXAoXCJicixhLGNvZGUsYWRkcmVzcyxhcnRpY2xlLGFwcGxldCxhc2lkZSxhdWRpbyxibG9ja3F1b3RlLGJ1dHRvbixjYW52YXMsY2VudGVyLGRkLGRlbCxkaXIsZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGZyYW1lc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaWZyYW1lLGlucyxpc2luZGV4LGxpLG1hcCxtZW51LG5vZnJhbWVzLG5vc2NyaXB0LG9iamVjdCxvbCxvdXRwdXQscCxwcmUsc2VjdGlvbixzY3JpcHQsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHIsdWwsdmlkZW9cIik7XHJcblxyXG4vLyBJbmxpbmUgRWxlbWVudHMgLSBIVE1MIDVcclxudmFyIGlubGluZSA9IG1ha2VNYXAoXCJhYmJyLGFjcm9ueW0sYXBwbGV0LGIsYmFzZWZvbnQsYmRvLGJpZyxidXR0b24sY2l0ZSxkZWwsZGZuLGVtLGZvbnQsaSxpZnJhbWUsaW1nLGlucHV0LGlucyxrYmQsbGFiZWwsbWFwLG9iamVjdCxxLHMsc2FtcCxzY3JpcHQsc2VsZWN0LHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRleHRhcmVhLHR0LHUsdmFyXCIpO1xyXG5cclxuLy8gRWxlbWVudHMgdGhhdCB5b3UgY2FuLCBpbnRlbnRpb25hbGx5LCBsZWF2ZSBvcGVuXHJcbi8vIChhbmQgd2hpY2ggY2xvc2UgdGhlbXNlbHZlcylcclxudmFyIGNsb3NlU2VsZiA9IG1ha2VNYXAoXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHJcIik7XHJcblxyXG4vLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSB0aGVpciB2YWx1ZXMgZmlsbGVkIGluIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG52YXIgZmlsbEF0dHJzID0gbWFrZU1hcChcImNoZWNrZWQsY29tcGFjdCxkZWNsYXJlLGRlZmVyLGRpc2FibGVkLGlzbWFwLG11bHRpcGxlLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vd3JhcCxyZWFkb25seSxzZWxlY3RlZFwiKTtcclxuXHJcbi8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxyXG52YXIgc3BlY2lhbCA9IG1ha2VNYXAoXCJ3eHh4Y29kZS1zdHlsZSxzY3JpcHQsc3R5bGUsdmlldyxzY3JvbGwtdmlldyxibG9ja1wiKTtcclxuZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcclxuICAgIHZhciBvYmogPSB7fSwgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuICAgICAgICBvYmpbaXRlbXNbaV1dID0gdHJ1ZTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHEodikge1xyXG4gICAgcmV0dXJuICdcIicgKyB2ICsgJ1wiJztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRE9DVFlQRShodG1sKSB7XHJcbiAgICByZXR1cm4gaHRtbFxyXG4gICAgICAgIC5yZXBsYWNlKC88XFw/eG1sLipcXD8+XFxuLywgJycpXHJcbiAgICAgICAgLnJlcGxhY2UoLzwuKiFkb2N0eXBlLipcXD5cXG4vLCAnJylcclxuICAgICAgICAucmVwbGFjZSgvPC4qIURPQ1RZUEUuKlxcPlxcbi8sICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJpbUh0bWwoaHRtbCkge1xyXG4gIHJldHVybiBodG1sXHJcbiAgICAgICAgLnJlcGxhY2UoL1xccj9cXG4rL2csICcnKVxyXG4gICAgICAgIC5yZXBsYWNlKC88IS0tLio/LS0+L2lnLCAnJylcclxuICAgICAgICAucmVwbGFjZSgvXFwvXFwqLio/XFwqXFwvL2lnLCAnJylcclxuICAgICAgICAucmVwbGFjZSgvWyBdKzwvaWcsICc8JylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGh0bWwyanNvbihodG1sLCBiaW5kTmFtZSkge1xyXG4gICAgLy/lpITnkIblrZfnrKbkuLJcclxuICAgIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xyXG4gICAgaHRtbCA9IHRyaW1IdG1sKGh0bWwpO1xyXG4gICAgaHRtbCA9IHd4RGlzY29kZS5zdHJEaXNjb2RlKGh0bWwpO1xyXG4gICAgLy/nlJ/miJBub2Rl6IqC54K5XHJcbiAgICB2YXIgYnVmQXJyYXkgPSBbXTtcclxuICAgIHZhciByZXN1bHRzID0ge1xyXG4gICAgICAgIG5vZGU6IGJpbmROYW1lLFxyXG4gICAgICAgIG5vZGVzOiBbXSxcclxuICAgICAgICBpbWFnZXM6W10sXHJcbiAgICAgICAgaW1hZ2VVcmxzOltdXHJcbiAgICB9O1xyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuICAgIEhUTUxQYXJzZXIoaHRtbCwge1xyXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAodGFnLCBhdHRycywgdW5hcnkpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Zyh0YWcsIGF0dHJzLCB1bmFyeSk7XHJcbiAgICAgICAgICAgIC8vIG5vZGUgZm9yIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHtcclxuICAgICAgICAgICAgICAgIG5vZGU6ICdlbGVtZW50JyxcclxuICAgICAgICAgICAgICAgIHRhZzogdGFnLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJ1ZkFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5pbmRleCA9IGluZGV4LnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIGluZGV4ICs9IDFcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5ub2RlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZS5pbmRleCA9IHBhcmVudC5pbmRleCArICcuJyArIHBhcmVudC5ub2Rlcy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJsb2NrW3RhZ10pIHtcclxuICAgICAgICAgICAgICAgIG5vZGUudGFnVHlwZSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmxpbmVbdGFnXSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS50YWdUeXBlID0gXCJpbmxpbmVcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbG9zZVNlbGZbdGFnXSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS50YWdUeXBlID0gXCJjbG9zZVNlbGZcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGF0dHJzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hdHRyID0gYXR0cnMucmVkdWNlKGZ1bmN0aW9uIChwcmUsIGF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGF0dHIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICdjbGFzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgdmFsdWUgPSB2YWx1ZS5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NTdHIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFzIG11bHRpIGF0dGlidXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgaXQgYXJyYXkgb2YgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gJ3N0eWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICB2YWx1ZSA9IHZhbHVlLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVN0ciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUubWF0Y2goLyAvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYXR0ciBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lcmdlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGFycmF5LCBwdXNoIHRvIGxhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZVtuYW1lXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmdsZSB2YWx1ZSwgbWFrZSBpdCBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlW25hbWVdID0gW3ByZVtuYW1lXSwgdmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGV4aXN0LCBwdXQgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlO1xyXG4gICAgICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WvuWltZ+a3u+WKoOmineWkluaVsOaNrlxyXG4gICAgICAgICAgICBpZiAobm9kZS50YWcgPT09ICdpbWcnKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmltZ0luZGV4ID0gcmVzdWx0cy5pbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ1VybCA9IG5vZGUuYXR0ci5zcmM7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nVXJsWzBdID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZ1VybCA9IHd4RGlzY29kZS51cmxUb0h0dHBVcmwoaW1nVXJsLCBfX3BsYWNlSW1nZVVybEh0dHBzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXR0ci5zcmMgPSBpbWdVcmw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmZyb20gPSBiaW5kTmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuaW1hZ2VzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLmltYWdlVXJscy5wdXNoKGltZ1VybCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOWkhOeQhmZvbnTmoIfnrb7moLflvI/lsZ7mgKdcclxuICAgICAgICAgICAgaWYgKG5vZGUudGFnID09PSAnZm9udCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneC1sYXJnZScsICd4eC1sYXJnZScsICctd2Via2l0LXh4eC1sYXJnZSddO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlQXR0cnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogJ2NvbG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmFjZSc6ICdmb250LWZhbWlseScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NpemUnOiAnZm9udC1zaXplJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5hdHRyLnN0eWxlKSBub2RlLmF0dHIuc3R5bGUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5zdHlsZVN0cikgbm9kZS5zdHlsZVN0ciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHN0eWxlQXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hdHRyW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0ga2V5ID09PSAnc2l6ZScgPyBmb250U2l6ZVtub2RlLmF0dHJba2V5XS0xXSA6IG5vZGUuYXR0cltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHIuc3R5bGUucHVzaChzdHlsZUF0dHJzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHIuc3R5bGUucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVTdHIgKz0gc3R5bGVBdHRyc1trZXldICsgJzogJyArIHZhbHVlICsgJzsnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/kuLTml7borrDlvZVzb3VyY2XotYTmupBcclxuICAgICAgICAgICAgaWYobm9kZS50YWcgPT09ICdzb3VyY2UnKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMuc291cmNlID0gbm9kZS5hdHRyLnNyYztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHVuYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHRhZyBkb3Nlbid0IGhhdmUgZW5kIHRhZ1xyXG4gICAgICAgICAgICAgICAgLy8gbGlrZSA8aW1nIHNyYz1cImhvZ2UucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRvIHBhcmVudHNcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXSB8fCByZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1ZkFycmF5LnVuc2hpZnQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZDogZnVuY3Rpb24gKHRhZykge1xyXG4gICAgICAgICAgICAvL2RlYnVnKHRhZyk7XHJcbiAgICAgICAgICAgIC8vIG1lcmdlIGludG8gcGFyZW50IHRhZ1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGJ1ZkFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGlmIChub2RlLnRhZyAhPT0gdGFnKSBjb25zb2xlLmVycm9yKCdpbnZhbGlkIHN0YXRlOiBtaXNtYXRjaCBlbmQgdGFnJyk7XHJcblxyXG4gICAgICAgICAgICAvL+W9k+aciee8k+WtmHNvdXJjZei1hOa6kOaXtuS6juS6jnZpZGVv6KGl5LiKc3Jj6LWE5rqQXHJcbiAgICAgICAgICAgIGlmKG5vZGUudGFnID09PSAndmlkZW8nICYmIHJlc3VsdHMuc291cmNlKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuYXR0ci5zcmMgPSByZXN1bHRzLnNvdXJjZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRzLnNvdXJjZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJ1ZkFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhcnM6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vZGVidWcodGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0ge1xyXG4gICAgICAgICAgICAgICAgbm9kZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgICAgIHRleHRBcnJheTp0cmFuc0Vtb2ppU3RyKHRleHQpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoYnVmQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmluZGV4ID0gaW5kZXgudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLmluZGV4ID0gcGFyZW50LmluZGV4ICsgJy4nICsgcGFyZW50Lm5vZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbW1lbnQ6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vZGVidWcodGV4dCk7XHJcbiAgICAgICAgICAgIC8vIHZhciBub2RlID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZTogJ2NvbW1lbnQnLFxyXG4gICAgICAgICAgICAvLyAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgLy8gdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xyXG4gICAgICAgICAgICAvLyBpZiAocGFyZW50Lm5vZGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHBhcmVudC5ub2RlcyA9IFtdO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHBhcmVudC5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdHJhbnNFbW9qaVN0cihzdHIpe1xyXG4gIC8vIHZhciBlUmVnID0gbmV3IFJlZ0V4cChcIltcIitfX3JlZysnICcrXCJdXCIpO1xyXG4vLyAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXFsoW15cXFtcXF1dKylcXF0vZywnOiQxOicpXHJcblxyXG4gIHZhciBlbW9qaU9ianMgPSBbXTtcclxuICAvL+WmguaenOato+WImeihqOi+vuW8j+S4uuepulxyXG4gIGlmKF9fZW1vamlzUmVnLmxlbmd0aCA9PSAwIHx8ICFfX2Vtb2ppcyl7XHJcbiAgICAgIHZhciBlbW9qaU9iaiA9IHt9XHJcbiAgICAgIGVtb2ppT2JqLm5vZGUgPSBcInRleHRcIjtcclxuICAgICAgZW1vamlPYmoudGV4dCA9IHN0cjtcclxuICAgICAgYXJyYXkgPSBbZW1vamlPYmpdO1xyXG4gICAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG4gIC8v6L+Z5Liq5Zyw5pa56ZyA6KaB6LCD5pW0XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcWyhbXlxcW1xcXV0rKVxcXS9nLCc6JDE6JylcclxuICB2YXIgZVJlZyA9IG5ldyBSZWdFeHAoXCJbOl1cIik7XHJcbiAgdmFyIGFycmF5ID0gc3RyLnNwbGl0KGVSZWcpO1xyXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICB2YXIgZWxlID0gYXJyYXlbaV07XHJcbiAgICB2YXIgZW1vamlPYmogPSB7fTtcclxuICAgIGlmKF9fZW1vamlzW2VsZV0pe1xyXG4gICAgICBlbW9qaU9iai5ub2RlID0gXCJlbGVtZW50XCI7XHJcbiAgICAgIGVtb2ppT2JqLnRhZyA9IFwiZW1vamlcIjtcclxuICAgICAgZW1vamlPYmoudGV4dCA9IF9fZW1vamlzW2VsZV07XHJcbiAgICAgIGVtb2ppT2JqLmJhc2VTcmM9IF9fZW1vamlzQmFzZVNyYztcclxuICAgIH1lbHNle1xyXG4gICAgICBlbW9qaU9iai5ub2RlID0gXCJ0ZXh0XCI7XHJcbiAgICAgIGVtb2ppT2JqLnRleHQgPSBlbGU7XHJcbiAgICB9XHJcbiAgICBlbW9qaU9ianMucHVzaChlbW9qaU9iaik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZW1vamlPYmpzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbW9qaXNJbml0KHJlZz0nJyxiYXNlU3JjPVwiL3d4UGFyc2UvZW1vamlzL1wiLGVtb2ppcyl7XHJcbiAgICBfX2Vtb2ppc1JlZyA9IHJlZztcclxuICAgIF9fZW1vamlzQmFzZVNyYz1iYXNlU3JjO1xyXG4gICAgX19lbW9qaXM9ZW1vamlzO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGh0bWwyanNvbjogaHRtbDJqc29uLFxyXG4gICAgZW1vamlzSW5pdDplbW9qaXNJbml0XHJcbn07XHJcblxyXG4iXX0=