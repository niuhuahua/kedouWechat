"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/WxNotificationCenter
 * 
 * for: 微信小程序通知广播模式类,降低小程序之间的耦合度
 * detail : http://weappdev.com/t/wxnotificationcenter/233
 */
// 存放
var __notices = [];
var isDebug = true;
/**
 * addNotification
 * 注册通知对象方法
 * 
 * 参数:
 * name： 注册名，一般let在公共类中
 * selector： 对应的通知方法，接受到通知后进行的动作
 * observer: 注册对象，指Page对象
 */
function addNotification(name, selector, observer) {
    if (name && selector) {
        if (!observer) {
            console.log("addNotification Warning: no observer will can't remove notice");
        }
        console.log("addNotification:" + name);
        var newNotice = {
            name: name,
            selector: selector,
            observer: observer
        };

        addNotices(newNotice);
    } else {
        console.log("addNotification error: no selector or name");
    }
}

/**
 * 仅添加一次监听
 * 
 * 参数:
 * name： 注册名，一般let在公共类中
 * selector： 对应的通知方法，接受到通知后进行的动作
 * observer: 注册对象，指Page对象
 */
function addOnceNotification(name, selector, observer) {
    if (__notices.length > 0) {
        for (var i = 0; i < __notices.length; i++) {
            var notice = __notices[i];
            if (notice.name === name) {
                if (notice.observer === observer) {
                    return;
                }
            }
        }
    }
    this.addNotification(name, selector, observer);
}

function addNotices(newNotice) {
    // if (__notices.length > 0) {
    //     for (var i = 0; i < __notices.length; i++) {
    //         var hisNotice = __notices[i];
    //         //当名称一样时进行对比，如果不是同一个 则放入数组，否则跳出
    //         if (newNotice.name === hisNotice.name) {
    //             if (!cmp(hisNotice, newNotice)) {
    //                 __notices.push(newNotice);
    //             }
    //             return;
    //         }else{
    //             __notices.push(newNotice);
    //         }

    //     }
    // } else {

    // }

    __notices.push(newNotice);
}

/**
 * removeNotification
 * 移除通知方法
 * 
 * 参数:
 * name: 已经注册了的通知
 * observer: 移除的通知所在的Page对象
 */

function removeNotification(name, observer) {
    console.log("removeNotification:" + name);
    for (var i = 0; i < __notices.length; i++) {
        var notice = __notices[i];
        if (notice.name === name) {
            if (notice.observer === observer) {
                __notices.splice(i, 1);
                return;
            }
        }
    }
}

/**
 * postNotificationName
 * 发送通知方法
 * 
 * 参数:
 * name: 已经注册了的通知
 * info: 携带的参数
 */

function postNotificationName(name, info) {
    console.log("postNotificationName:" + name);
    if (__notices.length == 0) {
        console.log("postNotificationName error: u hadn't add any notice.");
        return;
    }

    for (var i = 0; i < __notices.length; i++) {
        var notice = __notices[i];
        if (notice.name === name) {
            notice.selector(info);
        }
    }
}

// 用于对比两个对象是否相等
function cmp(x, y) {
    // If both x and y are null or undefined and exactly the same  
    if (x === y) {
        return true;
    }

    // If they are not strictly equal, they both need to be Objects  
    if (!(x instanceof Object) || !(y instanceof Object)) {
        return false;
    }

    // They must have the exact same prototype chain, the closest we can do is  
    // test the constructor.  
    if (x.constructor !== y.constructor) {
        return false;
    }

    for (var p in x) {
        // Inherited properties were tested using x.constructor === y.constructor  
        if (x.hasOwnProperty(p)) {
            // Allows comparing x[ p ] and y[ p ] when set to undefined  
            if (!y.hasOwnProperty(p)) {
                return false;
            }

            // If they have the same strict value or identity then they are equal  
            if (x[p] === y[p]) {
                continue;
            }

            // Numbers, Strings, Functions, Booleans must be strictly equal  
            if (_typeof(x[p]) !== "object") {
                return false;
            }

            // Objects and Arrays must be tested recursively  
            if (!Object.equals(x[p], y[p])) {
                return false;
            }
        }
    }

    for (p in y) {
        // allows x[ p ] to be set to undefined  
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};

module.exports = {
    addNotification: addNotification,
    removeNotification: removeNotification,
    postNotificationName: postNotificationName,
    addOnceNotification: addOnceNotification
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIld4Tm90aWZpY2F0aW9uQ2VudGVyLmpzIl0sIm5hbWVzIjpbIl9fbm90aWNlcyIsImlzRGVidWciLCJhZGROb3RpZmljYXRpb24iLCJuYW1lIiwic2VsZWN0b3IiLCJvYnNlcnZlciIsImNvbnNvbGUiLCJsb2ciLCJuZXdOb3RpY2UiLCJhZGROb3RpY2VzIiwiYWRkT25jZU5vdGlmaWNhdGlvbiIsImxlbmd0aCIsImkiLCJub3RpY2UiLCJwdXNoIiwicmVtb3ZlTm90aWZpY2F0aW9uIiwic3BsaWNlIiwicG9zdE5vdGlmaWNhdGlvbk5hbWUiLCJpbmZvIiwiY21wIiwieCIsInkiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsImVxdWFscyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0EsSUFBSUEsWUFBWSxFQUFoQjtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBOzs7Ozs7Ozs7QUFTQSxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsUUFBL0IsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQy9DLFFBQUlGLFFBQVFDLFFBQVosRUFBc0I7QUFDbEIsWUFBRyxDQUFDQyxRQUFKLEVBQWE7QUFDVEMsb0JBQVFDLEdBQVIsQ0FBWSwrREFBWjtBQUNIO0FBQ0RELGdCQUFRQyxHQUFSLENBQVkscUJBQXFCSixJQUFqQztBQUNBLFlBQUlLLFlBQVk7QUFDWkwsa0JBQU1BLElBRE07QUFFWkMsc0JBQVVBLFFBRkU7QUFHWkMsc0JBQVVBO0FBSEUsU0FBaEI7O0FBTUFJLG1CQUFXRCxTQUFYO0FBRUgsS0FiRCxNQWFPO0FBQ0hGLGdCQUFRQyxHQUFSLENBQVksNENBQVo7QUFDSDtBQUNKOztBQUVEOzs7Ozs7OztBQVFBLFNBQVNHLG1CQUFULENBQTZCUCxJQUE3QixFQUFtQ0MsUUFBbkMsRUFBNkNDLFFBQTdDLEVBQXVEO0FBQ25ELFFBQUlMLFVBQVVXLE1BQVYsR0FBbUIs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RUksQ0FBRixDQUFkLEVBQW9CSCxFQUFFRyxDQUFGLENBQXBCLENBQUwsRUFBZ0M7QUFDNUIsdUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFLQSxDQUFMLElBQVVILENBQVYsRUFBYTtBQUNUO0FBQ0EsWUFBSUEsRUFBRUksY0FBRixDQUFpQkQsQ0FBakIsS0FBdUIsQ0FBQ0osRUFBRUssY0FBRixDQUFpQkQsQ0FBakIsQ0FBNUIsRUFBaUQ7QUFDN0MsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRCxXQUFPLElBQVA7QUFDSDs7QUFFREcsT0FBT0MsT0FBUCxHQUFpQjtBQUNiMUIscUJBQWlCQSxlQURKO0FBRWJhLHdCQUFvQkEsa0JBRlA7QUFHYkUsMEJBQXNCQSxvQkFIVDtBQUliUCx5QkFBcUJBO0FBSlIsQ0FBakIiLCJmaWxlIjoiV3hOb3RpZmljYXRpb25DZW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxyXG4gKiBvcmdhbml6YXRpb246IFdlQXBwRGV2KOW+ruS/oeWwj+eoi+W6j+W8gOWPkeiuuuWdmykoaHR0cDovL3dlYXBwZGV2LmNvbSlcclxuICogICAgICAgICAgICAgICDlnoLnm7Tlvq7kv6HlsI/nqIvluo/lvIDlj5HkuqTmtYHnpL7ljLpcclxuICogXHJcbiAqIGdpdGh1YuWcsOWdgDogaHR0cHM6Ly9naXRodWIuY29tL2ljaW5keS9XeE5vdGlmaWNhdGlvbkNlbnRlclxyXG4gKiBcclxuICogZm9yOiDlvq7kv6HlsI/nqIvluo/pgJrnn6Xlub/mkq3mqKHlvI/nsbss6ZmN5L2O5bCP56iL5bqP5LmL6Ze055qE6ICm5ZCI5bqmXHJcbiAqIGRldGFpbCA6IGh0dHA6Ly93ZWFwcGRldi5jb20vdC93eG5vdGlmaWNhdGlvbmNlbnRlci8yMzNcclxuICovXHJcbi8vIOWtmOaUvlxyXG52YXIgX19ub3RpY2VzID0gW107XHJcbnZhciBpc0RlYnVnID0gdHJ1ZTtcclxuLyoqXHJcbiAqIGFkZE5vdGlmaWNhdGlvblxyXG4gKiDms6jlhozpgJrnn6Xlr7nosaHmlrnms5VcclxuICogXHJcbiAqIOWPguaVsDpcclxuICogbmFtZe+8miDms6jlhozlkI3vvIzkuIDoiKxsZXTlnKjlhazlhbHnsbvkuK1cclxuICogc2VsZWN0b3LvvJog5a+55bqU55qE6YCa55+l5pa55rOV77yM5o6l5Y+X5Yiw6YCa55+l5ZCO6L+b6KGM55qE5Yqo5L2cXHJcbiAqIG9ic2VydmVyOiDms6jlhozlr7nosaHvvIzmjIdQYWdl5a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGROb3RpZmljYXRpb24obmFtZSwgc2VsZWN0b3IsIG9ic2VydmVyKSB7XHJcbiAgICBpZiAobmFtZSAmJiBzZWxlY3Rvcikge1xyXG4gICAgICAgIGlmKCFvYnNlcnZlcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkTm90aWZpY2F0aW9uIFdhcm5pbmc6IG5vIG9ic2VydmVyIHdpbGwgY2FuJ3QgcmVtb3ZlIG5vdGljZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGROb3RpZmljYXRpb246XCIgKyBuYW1lKTtcclxuICAgICAgICB2YXIgbmV3Tm90aWNlID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiBvYnNlcnZlclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFkZE5vdGljZXMobmV3Tm90aWNlKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkTm90aWZpY2F0aW9uIGVycm9yOiBubyBzZWxlY3RvciBvciBuYW1lXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog5LuF5re75Yqg5LiA5qyh55uR5ZCsXHJcbiAqIFxyXG4gKiDlj4LmlbA6XHJcbiAqIG5hbWXvvJog5rOo5YaM5ZCN77yM5LiA6IisbGV05Zyo5YWs5YWx57G75LitXHJcbiAqIHNlbGVjdG9y77yaIOWvueW6lOeahOmAmuefpeaWueazle+8jOaOpeWPl+WIsOmAmuefpeWQjui/m+ihjOeahOWKqOS9nFxyXG4gKiBvYnNlcnZlcjog5rOo5YaM5a+56LGh77yM5oyHUGFnZeWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkT25jZU5vdGlmaWNhdGlvbihuYW1lLCBzZWxlY3Rvciwgb2JzZXJ2ZXIpIHtcclxuICAgIGlmIChfX25vdGljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19ub3RpY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBub3RpY2UgPSBfX25vdGljZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChub3RpY2UubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdGljZS5vYnNlcnZlciA9PT0gb2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblx0dGhpcy5hZGROb3RpZmljYXRpb24obmFtZSwgc2VsZWN0b3IsIG9ic2VydmVyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROb3RpY2VzKG5ld05vdGljZSkge1xyXG4gICAgLy8gaWYgKF9fbm90aWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX25vdGljZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGhpc05vdGljZSA9IF9fbm90aWNlc1tpXTtcclxuICAgIC8vICAgICAgICAgLy/lvZPlkI3np7DkuIDmoLfml7bov5vooYzlr7nmr5TvvIzlpoLmnpzkuI3mmK/lkIzkuIDkuKog5YiZ5pS+5YWl5pWw57uE77yM5ZCm5YiZ6Lez5Ye6XHJcbiAgICAvLyAgICAgICAgIGlmIChuZXdOb3RpY2UubmFtZSA9PT0gaGlzTm90aWNlLm5hbWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICghY21wKGhpc05vdGljZSwgbmV3Tm90aWNlKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIF9fbm90aWNlcy5wdXNoKG5ld05vdGljZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgX19ub3RpY2VzLnB1c2gobmV3Tm90aWNlKTtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIF9fbm90aWNlcy5wdXNoKG5ld05vdGljZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiByZW1vdmVOb3RpZmljYXRpb25cclxuICog56e76Zmk6YCa55+l5pa55rOVXHJcbiAqIFxyXG4gKiDlj4LmlbA6XHJcbiAqIG5hbWU6IOW3sue7j+azqOWGjOS6hueahOmAmuefpVxyXG4gKiBvYnNlcnZlcjog56e76Zmk55qE6YCa55+l5omA5Zyo55qEUGFnZeWvueixoVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vdGlmaWNhdGlvbihuYW1lLG9ic2VydmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbW92ZU5vdGlmaWNhdGlvbjpcIiArIG5hbWUpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfX25vdGljZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICB2YXIgbm90aWNlID0gX19ub3RpY2VzW2ldO1xyXG4gICAgICBpZihub3RpY2UubmFtZSA9PT0gbmFtZSl7XHJcbiAgICAgICAgaWYobm90aWNlLm9ic2VydmVyID09PSBvYnNlcnZlcil7XHJcbiAgICAgICAgICAgIF9fbm90aWNlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBwb3N0Tm90aWZpY2F0aW9uTmFtZVxyXG4gKiDlj5HpgIHpgJrnn6Xmlrnms5VcclxuICogXHJcbiAqIOWPguaVsDpcclxuICogbmFtZTog5bey57uP5rOo5YaM5LqG55qE6YCa55+lXHJcbiAqIGluZm86IOaQuuW4pueahOWPguaVsFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHBvc3ROb3RpZmljYXRpb25OYW1lKG5hbWUsIGluZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKFwicG9zdE5vdGlmaWNhdGlvbk5hbWU6XCIgKyBuYW1lKTtcclxuICAgIGlmKF9fbm90aWNlcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicG9zdE5vdGlmaWNhdGlvbk5hbWUgZXJyb3I6IHUgaGFkbid0IGFkZCBhbnkgbm90aWNlLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX19ub3RpY2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgdmFyIG5vdGljZSA9IF9fbm90aWNlc1tpXTtcclxuICAgICAgaWYobm90aWNlLm5hbWUgPT09IG5hbWUpe1xyXG4gICAgICAgIG5vdGljZS5zZWxlY3RvcihpbmZvKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8vIOeUqOS6juWvueavlOS4pOS4quWvueixoeaYr+WQpuebuOetiVxyXG5mdW5jdGlvbiBjbXAoeCwgeSkge1xyXG4gICAgLy8gSWYgYm90aCB4IGFuZCB5IGFyZSBudWxsIG9yIHVuZGVmaW5lZCBhbmQgZXhhY3RseSB0aGUgc2FtZSAgXHJcbiAgICBpZiAoeCA9PT0geSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZXkgYXJlIG5vdCBzdHJpY3RseSBlcXVhbCwgdGhleSBib3RoIG5lZWQgdG8gYmUgT2JqZWN0cyAgXHJcbiAgICBpZiAoISAoeCBpbnN0YW5jZW9mIE9iamVjdCkgfHwgISh5IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGV5IG11c3QgaGF2ZSB0aGUgZXhhY3Qgc2FtZSBwcm90b3R5cGUgY2hhaW4sIHRoZSBjbG9zZXN0IHdlIGNhbiBkbyBpcyAgXHJcbiAgICAvLyB0ZXN0IHRoZSBjb25zdHJ1Y3Rvci4gIFxyXG4gICAgaWYgKHguY29uc3RydWN0b3IgIT09IHkuY29uc3RydWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgcCBpbiB4KSB7XHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIHByb3BlcnRpZXMgd2VyZSB0ZXN0ZWQgdXNpbmcgeC5jb25zdHJ1Y3RvciA9PT0geS5jb25zdHJ1Y3RvciAgXHJcbiAgICAgICAgaWYgKHguaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgLy8gQWxsb3dzIGNvbXBhcmluZyB4WyBwIF0gYW5kIHlbIHAgXSB3aGVuIHNldCB0byB1bmRlZmluZWQgIFxyXG4gICAgICAgICAgICBpZiAoIXkuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhleSBoYXZlIHRoZSBzYW1lIHN0cmljdCB2YWx1ZSBvciBpZGVudGl0eSB0aGVuIHRoZXkgYXJlIGVxdWFsICBcclxuICAgICAgICAgICAgaWYgKHhbcF0gPT09IHlbcF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOdW1iZXJzLCBTdHJpbmdzLCBGdW5jdGlvbnMsIEJvb2xlYW5zIG11c3QgYmUgc3RyaWN0bHkgZXF1YWwgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKHhbcF0pICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9iamVjdHMgYW5kIEFycmF5cyBtdXN0IGJlIHRlc3RlZCByZWN1cnNpdmVseSAgXHJcbiAgICAgICAgICAgIGlmICghT2JqZWN0LmVxdWFscyh4W3BdLCB5W3BdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAocCBpbiB5KSB7XHJcbiAgICAgICAgLy8gYWxsb3dzIHhbIHAgXSB0byBiZSBzZXQgdG8gdW5kZWZpbmVkICBcclxuICAgICAgICBpZiAoeS5oYXNPd25Qcm9wZXJ0eShwKSAmJiAheC5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGFkZE5vdGlmaWNhdGlvbjogYWRkTm90aWZpY2F0aW9uLFxyXG4gICAgcmVtb3ZlTm90aWZpY2F0aW9uOiByZW1vdmVOb3RpZmljYXRpb24sXHJcbiAgICBwb3N0Tm90aWZpY2F0aW9uTmFtZTogcG9zdE5vdGlmaWNhdGlvbk5hbWUsXHJcbiAgICBhZGRPbmNlTm90aWZpY2F0aW9uOiBhZGRPbmNlTm90aWZpY2F0aW9uXHJcbn1cclxuIl19