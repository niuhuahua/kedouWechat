'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pagination = require('./../../mixins/pagination.js');

var _pagination2 = _interopRequireDefault(_pagination);

var _pan = require('./../../api/wl/pan.js');

var _pan2 = _interopRequireDefault(_pan);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//该页面还没做下拉加载上拉更新 830 954
var pJieSuan = function (_wepy$page) {
    _inherits(pJieSuan, _wepy$page);

    function pJieSuan() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, pJieSuan);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pJieSuan.__proto__ || Object.getPrototypeOf(pJieSuan)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            winHeight: 0,
            maxHeight: 0,
            page: -100,
            pageCount: -100,
            mainData: [], storage_num: -100,
            isFrist: wx.getStorageSync('isFrist'),
            resonList: [],
            reson: '',
            resonShow: false,
            numChangeItem: '',
            isJian: false

        }, _this.components = {}, _this.mixins = [_pagination2.default], _this.methods = {
            jianValue: function jianValue(item) {
                if (this.isFrist) {
                    return false;
                } else {
                    this.isJian = true;
                    this.numChangeItem = item;
                    this.getResonNum();
                    this.resonShow = true;
                }
            },
            jiaValue: function jiaValue(item) {
                if (this.isFrist) {
                    return false;
                } else {
                    this.isJian = false;
                    this.numChangeItem = item;
                    this.getResonNum();
                    this.resonShow = true;
                }
            },
            setReson: function setReson(item) {
                var that = this;
                this.reson = item;
                this.resonShow = false;
                var num = parseInt(that.numChangeItem.storage_num);
                if (this.isJian) {
                    num = num - 1;
                } else {
                    num = num + 1;
                }
                var param = { inventory_sn: that.mainData.inventory_sn, code_goods: that.numChangeItem.code_goods, num: " " + num, reason: item };
                _pan2.default.getInvenUpdNum(param).then(function (res) {
                    if (res.Head.code == "S0000") {
                        that.getInvenList(that.page);
                        that.$apply();
                    } else {
                        _Tips2.default.error(res.Head.msg);
                    }
                }).catch(function (err) {
                    _Tips2.default.error(err.Head.msg);
                });
            },
            colseReson: function colseReson() {
                this.resonShow = false;
            },
            toCommendInsn: function toCommendInsn() {
                //提交结算单
                var that = this;
                var param = { inventory_sn: that.mainData.inventory_sn };
                _pan2.default.getInvetSubmit().then(function (res) {
                    if (res.Head.code == "S0000") {
                        that.$navigate('pRecord');
                    } else {
                        _Tips2.default.error(res.Head.msg);
                    }
                }).catch(function (err) {
                    _Tips2.default.error(err.head.msg);
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(pJieSuan, [{
        key: 'getResonNum',
        value: function getResonNum() {
            var that = this;
            _pan2.default.getCgNumReson().then(function (res) {
                if (res.Head.code == "S0000") {
                    that.resonList = res.Body[0].lists;
                    that.$apply();
                    console.log(res);
                } else {
                    _Tips2.default.error(res.Head.msg);
                }
            }).catch(function (err) {
                _Tips2.default.error(err.Head.msg);
            });
        }
    }, {
        key: 'getInvenList',
        value: function getInvenList(page) {
            var that = this;
            var param = { inventory_sn: JSON.parse(wx.getStorageSync('inventoryMsg')).inventory_sn, is_first: " " + false, page: page };
            _pan2.default.getInvenSetList(param).then(function (res) {
                if (res.Head.code == "S0000") {
                    that.pageCount = res.Body[0].count_page;
                    that.page = res.Body[0].page;
                    that.$apply();
                    if (that.page == 1) {
                        that.mainData = res.Body[0];
                        that.$apply();
                    } else {
                        var _that$mainData$lists;

                        (_that$mainData$lists = that.mainData.lists).push.apply(_that$mainData$lists, _toConsumableArray(res.Body[0].lists));
                        that.$apply();
                    }
                    wx.getSystemInfo({
                        success: function success(e) {
                            var winHeight = e.windowHeight * 2; //获取商品类型
                            console.log(e.windowHeight);
                            console.log(e.screenHeight);
                            if (that.mainData.type == '2') {
                                winHeight = winHeight - 197;
                                that.maxHeight = winHeight;
                                // that.maxHeight = e.windowHeight;
                            } else if (that.mainData.type == '3') {
                                winHeight = winHeight - 100;
                                that.maxHeight = winHeight;
                                // that.maxHeight =  e.windowHeight;
                            }
                            that.$apply();
                        }
                    });

                    wx.hideLoading();
                } else {
                    _Tips2.default.error(res.Head.msg);
                }
            }).catch(function (err) {
                _Tips2.default.error(err.Head.msg);
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var is = wx.getStorageSync('isFrist');
            this.getInvenList(1);
            var that = this;
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.pageCount > this.page) {
                var page = this.page;page += 1;
                this.getInvenList(page);
            } else {
                return false;
            }
        }
    }]);

    return pJieSuan;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(pJieSuan , 'pages/wl/pJieSuan'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBKaWVTdWFuLmpzIl0sIm5hbWVzIjpbInBKaWVTdWFuIiwiZGF0YSIsIndpbkhlaWdodCIsIm1heEhlaWdodCIsInBhZ2UiLCJwYWdlQ291bnQiLCJtYWluRGF0YSIsInN0b3JhZ2VfbnVtIiwiaXNGcmlzdCIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXNvbkxpc3QiLCJyZXNvbiIsInJlc29uU2hvdyIsIm51bUNoYW5nZUl0ZW0iLCJpc0ppYW4iLCJjb21wb25lbnRzIiwibWl4aW5zIiwibWV0aG9kcyIsImppYW5WYWx1ZSIsIml0ZW0iLCJnZXRSZXNvbk51bSIsImppYVZhbHVlIiwic2V0UmVzb24iLCJ0aGF0IiwibnVtIiwicGFyc2VJbnQiLCJwYXJhbSIsImludmVudG9yeV9zbiIsImNvZGVfZ29vZHMiLCJyZWFzb24iLCJnZXRJbnZlblVwZE51bSIsInRoZW4iLCJyZXMiLCJIZWFkIiwiY29kZSIsImdldEludmVuTGlzdCIsIiRhcHBseSIsImVycm9yIiwibXNnIiwiY2F0Y2giLCJlcnIiLCJjb2xzZVJlc29uIiwidG9Db21tZW5kSW5zbiIsImdldEludmV0U3VibWl0IiwiJG5hdmlnYXRlIiwiaGVhZCIsImdldENnTnVtUmVzb24iLCJCb2R5IiwibGlzdHMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiaXNfZmlyc3QiLCJnZXRJbnZlblNldExpc3QiLCJjb3VudF9wYWdlIiwicHVzaCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiZSIsIndpbmRvd0hlaWdodCIsInNjcmVlbkhlaWdodCIsInR5cGUiLCJoaWRlTG9hZGluZyIsImlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxJLEdBQU87QUFDSEMsdUJBQVUsQ0FEUDtBQUVIQyx1QkFBVyxDQUZSO0FBR0hDLGtCQUFNLENBQUMsR0FISjtB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RCxHQUFHQyxjQUFILENBQWtCLFNBQWxCLENBQVY7QUFDQSxpQkFBSzBCLFlBQUwsQ0FBa0IsQ0FBbEI7QUFDQSxnQkFBSVosT0FBTyxJQUFYO0FBR0Q7Ozt3Q0FDYztBQUNYLGdCQUFHLEtBQUtuQixTQUFMLEdBQWUsS0FBS0QsSUFBdkIsRUFBNEI7QUFDeEIsb0JBQUlBLE9BQU8sS0FBS0EsSUFBaEIsQ0FBcUJBLFFBQU0sQ0FBTjtBQUNyQixxQkFBS2dDLFlBQUwsQ0FBa0JoQyxJQUFsQjtBQUNILGFBSEQsTUFHSztBQUNILHVCQUFPLEtBQVA7QUFDRDtBQUVKOzs7O0VBckptQyxlQUFLQSxJOztrQkFBdEJKLFEiLCJmaWxlIjoicEppZVN1YW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi4vLi4vbWl4aW5zL3BhZ2luYXRpb24nXHJcbmltcG9ydCBwYW5TZXJ2aWNlIGZyb20gJy4uLy4uL2FwaS93bC9wYW4uanMnXHJcbmltcG9ydCBUaXBzIGZyb20gJy4uLy4uL3V0aWwvVGlwcy5qcydcclxuLy/or6XpobXpnaLov5jmsqHlgZrkuIvmi4nliqDovb3kuIrmi4nmm7TmlrAgODMwIDk1NFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwSmllU3VhbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgICAgd2luSGVpZ2h0OjAsXHJcbiAgICAgIG1heEhlaWdodCA6MCxcclxuICAgICAgcGFnZTogLTEwMCxcclxuICAgICAgcGFnZUNvdW50OiAtMTAwLFxyXG4gICAgICBtYWluRGF0YTpbXSxzdG9yYWdlX251bTotMTAwLFxyXG4gICAgICBpc0ZyaXN0Ond4LmdldFN0b3JhZ2VTeW5jKCdpc0ZyaXN0JyksXHJcbiAgICAgIHJlc29uTGlzdDpbXSxcclxuICAgICAgcmVzb246JycsXHJcbiAgICAgIHJlc29uU2hvdzpmYWxzZSxcclxuICAgICAgbnVtQ2hhbmdlSXRlbTonJyxcclxuICAgICAgaXNKaWFuOmZhbHNlXHJcblxyXG4gIH07XHJcbiAgICBjb21wb25lbnRzID0ge31cclxuICAgIG1peGlucyA9IFtwYWdpbmF0aW9uXTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgamlhblZhbHVlKGl0ZW0pe1xyXG4gICAgICAgICBpZih0aGlzLmlzRnJpc3Qpe1xyXG4gICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgIHRoaXMuaXNKaWFuID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5udW1DaGFuZ2VJdGVtID0gaXRlbTtcclxuICAgICAgICAgdGhpcy5nZXRSZXNvbk51bSgpO1xyXG4gICAgICAgICB0aGlzLnJlc29uU2hvdyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgIH0sXHJcbiAgICAgamlhVmFsdWUoaXRlbSl7XHJcbiAgICAgIGlmKHRoaXMuaXNGcmlzdCl7XHJcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgdGhpcy5pc0ppYW4gPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5udW1DaGFuZ2VJdGVtID0gaXRlbTtcclxuICAgICAgICAgdGhpcy5nZXRSZXNvbk51bSgpO1xyXG4gICAgICAgICB0aGlzLnJlc29uU2hvdyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgIH0sXHJcbiAgICAgc2V0UmVzb24oaXRlbSl7XHJcbiAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlc29uID0gaXRlbTtcclxuICAgICAgICB0aGlzLnJlc29uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBudW0gID0gcGFyc2VJbnQodGhhdC5udW1DaGFuZ2VJdGVtLnN0b3JhZ2VfbnVtKTtcclxuICAgICAgICBpZih0aGlzLmlzSmlhbil7XHJcbiAgICAgICAgICAgIG51bSA9IG51bS0xO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBudW0gPSBudW0rMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcmFtID0ge2ludmVudG9yeV9zbjp0aGF0Lm1haW5EYXRhLmludmVudG9yeV9zbixjb2RlX2dvb2RzOnRoYXQubnVtQ2hhbmdlSXRlbS5jb2RlX2dvb2RzLG51bTpcIiBcIitudW0scmVhc29uOml0ZW0gfVxyXG4gICAgICAgIHBhblNlcnZpY2UuZ2V0SW52ZW5VcGROdW0ocGFyYW0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgICB0aGF0LmdldEludmVuTGlzdCh0aGF0LnBhZ2UpO1xyXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgVGlwcy5lcnJvcihyZXMuSGVhZC5tc2cpXHJcbiAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgVGlwcy5lcnJvcihlcnIuSGVhZC5tc2cpXHJcbiAgICAgICAgfSlcclxuICAgICB9LFxyXG4gICAgIGNvbHNlUmVzb24oKXtcclxuICAgICAgIHRoaXMucmVzb25TaG93ID0gZmFsc2U7XHJcbiAgICAgfSxcclxuICAgICB0b0NvbW1lbmRJbnNuKCl7Ly/mj5DkuqTnu5PnrpfljZVcclxuICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgbGV0IHBhcmFtID0ge2ludmVudG9yeV9zbjp0aGF0Lm1haW5EYXRhLmludmVudG9yeV9zbiB9XHJcbiAgICAgICAgcGFuU2VydmljZS5nZXRJbnZldFN1Ym1pdCgpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgICAgICAgdGhhdC4kbmF2aWdhdGUoJ3BSZWNvcmQnKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBUaXBzLmVycm9yKHJlcy5IZWFkLm1zZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBUaXBzLmVycm9yKGVyci5oZWFkLm1zZylcclxuICAgICAgICB9KVxyXG4gICAgIH1cclxuICAgIH1cclxuICAgIGdldFJlc29uTnVtKCl7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBwYW5TZXJ2aWNlLmdldENnTnVtUmVzb24oKS50aGVuKHJlcz0+e1xyXG4gICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICB0aGF0LnJlc29uTGlzdCA9IHJlcy5Cb2R5WzBdLmxpc3RzO1xyXG4gICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgVGlwcy5lcnJvcihyZXMuSGVhZC5tc2cpXHJcbiAgICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICBUaXBzLmVycm9yKGVyci5IZWFkLm1zZylcclxuICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICBnZXRJbnZlbkxpc3QocGFnZSl7XHJcbiAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICBsZXQgcGFyYW0gPSB7IGludmVudG9yeV9zbjpKU09OLnBhcnNlKHd4LmdldFN0b3JhZ2VTeW5jKCdpbnZlbnRvcnlNc2cnKSkuaW52ZW50b3J5X3NuLGlzX2ZpcnN0OlwiIFwiK2ZhbHNlLHBhZ2U6cGFnZX1cclxuICAgICAgICBwYW5TZXJ2aWNlLmdldEludmVuU2V0TGlzdChwYXJhbSkudGhlbihyZXM9PntcclxuICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgICB0aGF0LnBhZ2VDb3VudCA9IHJlcy5Cb2R5WzBdLmNvdW50X3BhZ2U7XHJcbiAgICAgICAgICAgICAgdGhhdC5wYWdlID0gIHJlcy5Cb2R5WzBdLnBhZ2U7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgIGlmKHRoYXQucGFnZT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1haW5EYXRhID0gcmVzLkJvZHlbMF07XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tYWluRGF0YS5saXN0cy5wdXNoKC4uLnJlcy5Cb2R5WzBdLmxpc3RzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgIHdpbkhlaWdodCA9ICBlLndpbmRvd0hlaWdodCoyOy8v6I635Y+W5ZWG5ZOB57G75Z6LXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS53aW5kb3dIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5zY3JlZW5IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5tYWluRGF0YS50eXBlPT0nMicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5IZWlnaHQgPSB3aW5IZWlnaHQtMTk3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1heEhlaWdodCA9IHdpbkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC5tYXhIZWlnaHQgPSBlLndpbmRvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGF0Lm1haW5EYXRhLnR5cGU9PSczJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbkhlaWdodCA9IHdpbkhlaWdodC0xMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubWF4SGVpZ2h0ID0gd2luSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0Lm1heEhlaWdodCA9ICBlLndpbmRvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICBUaXBzLmVycm9yKHJlcy5IZWFkLm1zZylcclxuICAgICAgICAgfVxyXG4gICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICBUaXBzLmVycm9yKGVyci5IZWFkLm1zZylcclxuICAgICB9KVxyXG4gICB9IFxyXG4gIG9uTG9hZCgpe1xyXG4gICAgbGV0IGlzID0gIHd4LmdldFN0b3JhZ2VTeW5jKCdpc0ZyaXN0JylcclxuICAgIHRoaXMuZ2V0SW52ZW5MaXN0KDEpO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICBcclxuICAgIFxyXG4gIH1cclxuICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICAgIGlmKHRoaXMucGFnZUNvdW50PnRoaXMucGFnZSl7XHJcbiAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMucGFnZTtwYWdlKz0xO1xyXG4gICAgICAgICAgdGhpcy5nZXRJbnZlbkxpc3QocGFnZSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gIH1cclxufVxyXG4iXX0=