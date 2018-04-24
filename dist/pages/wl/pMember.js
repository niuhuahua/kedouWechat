'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pan = require('./../../api/wl/pan.js');

var _pan2 = _interopRequireDefault(_pan);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PMember = function (_wepy$page) {
    _inherits(PMember, _wepy$page);

    function PMember() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PMember);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PMember.__proto__ || Object.getPrototypeOf(PMember)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '蝌蚪物流'
        }, _this.data = {
            user: '',
            isPandian: '', //判断是否拥有盘点单
            panMsg: '', //当拥有盘点单时的盘点信息
            isFrist: false,
            panType: true,
            wliuCount: ''
        }, _this.methods = {
            toKucun: function toKucun() {
                if (this.isPandian) {
                    //已经有盘点单
                    if (this.panMsg.status == "2") {
                        this.$navigate('changeM');
                    } else if (this.panMsg.status == "4") {
                        //跳转到结算单页面
                        this.$navigate('pJieSuan');
                    } else if (this.panMsg.status == "5") {
                        this.$navigate('changeM');
                        wx.setStorageSync('isAdd', "1");
                    } else {
                        console.log("其他的盘点状态");
                    }
                } else {
                    //没有盘点单
                    this.$navigate('pkucun');
                }
            },
            toAddpan: function toAddpan() {
                var that = this;
                if (this.panMsg) {
                    if (that.isFrist) {
                        _Tips2.default.error("首次盘点不能添加");
                    } else {
                        that.$navigate('addPanProd');
                    }
                } else {
                    that.$navigate('pkucun');
                }
            },
            toPanList: function toPanList() {
                this.$navigate('pRecord');
            },
            toMember: function toMember() {
                this.$navigate('member');
            },
            peiIng: function peiIng() {},
            peiWait: function peiWait() {
                this.$navigate('peiList');
            },
            peiList: function peiList() {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PMember, [{
        key: 'getAllocationCount',

        //获取配送人员的配送单数量
        value: function getAllocationCount() {
            var that = this;
            _pan2.default.getAllocationCount().then(function (res) {
                if (res.Head.code == "S0000") {
                    that.wliuCount = res.Body[0];
                    console.log(res.Body[0]);
                } else {
                    _Tips2.default.error(res.Head.msg);
                }
            }).catch(function (err) {
                _Tips2.default.error(err.Head.msg);
            });
        }

        //判断盘点人员是否拥有盘点单

    }, {
        key: 'getPanDianCount',
        value: function getPanDianCount() {
            var that = this;
            _pan2.default.getInveCount().then(function (res) {
                if (res.Head.code === "S0000") {
                    if (res.Body[0]) {
                        that.isPandian = true;
                        that.panMsg = res.Body[0];
                        wx.setStorageSync('inventoryMsg', JSON.stringify(res.Body[0]));
                        var param = { inventory_sn: that.panMsg.inventory_sn };
                        _pan2.default.isFirstInven(param).then(function (ress) {
                            if (ress.Head.code == "S0000") {
                                if (ress.Body[0].is_first) {
                                    that.isFrist = ress.Body[0].is_first;
                                    wx.setStorageSync('isFrist', ress.Body[0].is_first);
                                } else {
                                    wx.setStorageSync('isFrist', ress.Body[0].is_first);
                                    that.isFrist = ress.Body[0].is_first;
                                }
                                that.$apply();
                            } else {
                                _Tips2.default.error(ress.Head.msg);
                            }
                        }).catch(function (errs) {
                            _Tips2.default.error(errs.Head.msg);
                        });
                        wx.hideLoading();
                    } else {
                        wx.hideLoading();
                        that.isPandian = false;
                        that.$apply();
                        return false;
                    }
                }
            }).catch(function (err) {
                console.log("盘点人员是否拥有盘点单获取失败=>", err);
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var panType = wx.getStorageSync('panType');
            this.panType = panType;
            if (panType) {
                console.log("盘点人员");
            } else {
                this.getAllocationCount();
            }
            wx.setStorageSync('isAdd', "2"); //是否为补盘
            var user = JSON.parse(wx.getStorageSync("user"));
            this.user = user;
            console.log("user==>", user);
            this.getPanDianCount();
            this.$apply();
        }
    }]);

    return PMember;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(PMember , 'pages/wl/pMember'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBNZW1iZXIuanMiXSwibmFtZXMiOlsiUE1lbWJlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlciIsImlzUGFuZGlhbiIsInBhbk1zZyIsImlzRnJpc3QiLCJwYW5UeXBlIiwid2xpdUNvdW50IiwibWV0aG9kcyIsInRvS3VjdW4iLCJzdGF0dXMiLCIkbmF2aWdhdGUiLCJ3eCIsInNldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInRvQWRkcGFuIiwidGhhdCIsImVycm9yIiwidG9QYW5MaXN0IiwidG9NZW1iZXIiLCJwZWlJbmciLCJwZWlXYWl0IiwicGVpTGlzdCIsImdldEFsbG9jYXRpb25Db3VudCIsInRoZW4iLCJyZXMiLCJIZWFkIiwiY29kZSIsIkJvZHkiLCJtc2ciLCJjYXRjaCIsImVyciIsImdldEludmVDb3VudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJhbSIsImludmVudG9yeV9zbiIsImlzRmlyc3RJbnZlbiIsInJlc3MiLCJpc19maXJzdCIsIiRhcHBseSIsImVycnMiLCJoaWRlTG9hZGluZyIsImdldFN0b3JhZ2VTeW5jIiwicGFyc2UiLCJnZXRQYW5EaWFuQ291bnQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2hCQyxNLEdBQVM7QUFDUkMsb0NBQXdCO0FBRGhCLFMsUUFHWEMsSSxHQUFPO0FBQ0ZDLGtCQUFLLEVBREg7QUFFRkMsdUJBQVUsRUFGUixFQUVXO0FBQ2JDLG9CQUFPLEVBSEwsRUFHVztBQUNiQyxxQkFBUSxLQUpOO0FBS0ZDLHFCQUFRLElBTE47QUFNRkMsdUJBQVU7QUFOUixTLFFBUVBDLE8sR0FBVTtBQUNOQyxtQkFETSxxQkFDRztBQUNKLG9CQUFHLEtBQUtOLFNBQVIsRUFBa0I7QUFBQztBQUNsQix3QkFBRyxLQUFLQyxNQUFMLENBQVlNLE1BQVosSUFB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QyxjQUFILENBQWtCLE9BQWxCLEVBQTJCLEdBQTNCLEVBUkssQ0FRMkI7QUFDaEMsZ0JBQUlYLE9BQVFnQyxLQUFLVyxLQUFMLENBQVdqQyxHQUFHZ0MsY0FBSCxDQUFrQixNQUFsQixDQUFYLENBQVo7QUFDQSxpQkFBSzFDLElBQUwsR0FBWUEsSUFBWjtBQUNBWSxvQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBc0JiLElBQXRCO0FBQ0EsaUJBQUs0QyxlQUFMO0FBQ0EsaUJBQUtMLE1BQUw7QUFFRjs7OztFQTlIZ0MsZUFBS00sSTs7a0JBQXJCakQsTyIsImZpbGUiOiJwTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBwYW5EaWFuU3JldmljZSBmcm9tICcuLi8uLi9hcGkvd2wvcGFuLmpzJ1xyXG5pbXBvcnQgVGlwcyBmcm9tICcuLi8uLi91dGlsL1RpcHMuanMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBNZW1iZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+idjOiaqueJqea1gSdcclxuICAgIH07XHJcbiAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcjonJyxcclxuICAgICAgICBpc1BhbmRpYW46JycsLy/liKTmlq3mmK/lkKbmi6XmnInnm5jngrnljZVcclxuICAgICAgICBwYW5Nc2c6JycgLCAgLy/lvZPmi6XmnInnm5jngrnljZXml7bnmoTnm5jngrnkv6Hmga9cclxuICAgICAgICBpc0ZyaXN0OmZhbHNlLFxyXG4gICAgICAgIHBhblR5cGU6dHJ1ZSxcclxuICAgICAgICB3bGl1Q291bnQ6JydcclxuICAgIH1cclxuICAgbWV0aG9kcyA9IHtcclxuICAgICAgIHRvS3VjdW4oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5pc1BhbmRpYW4pey8v5bey57uP5pyJ55uY54K55Y2VXHJcbiAgICAgICAgICAgICBpZih0aGlzLnBhbk1zZy5zdGF0dXM9PVwiMlwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCdjaGFuZ2VNJyk7XHJcbiAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnBhbk1zZy5zdGF0dXM9PVwiNFwiKXsvL+i3s+i9rOWIsOe7k+eul+WNlemhtemdolxyXG4gICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCdwSmllU3VhbicpO1xyXG4gICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5wYW5Nc2cuc3RhdHVzPT1cIjVcIil7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ2NoYW5nZU0nKTtcclxuICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNBZGQnLCBcIjFcIilcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YW25LuW55qE55uY54K554q25oCBXCIpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfWVsc2V7Ly/msqHmnInnm5jngrnljZVcclxuICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3BrdWN1bicpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH0sXHJcbiAgICAgICB0b0FkZHBhbigpe1xyXG4gICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgIGlmKHRoaXMucGFuTXNnKXtcclxuICAgICAgICAgICAgaWYodGhhdC5pc0ZyaXN0KXtcclxuICAgICAgICAgICAgICAgIFRpcHMuZXJyb3IoXCLpppbmrKHnm5jngrnkuI3og73mt7vliqBcIikgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICB0aGF0LiRuYXZpZ2F0ZSgnYWRkUGFuUHJvZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgdGhhdC4kbmF2aWdhdGUoJ3BrdWN1bicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICB9LFxyXG4gICAgICAgdG9QYW5MaXN0KCl7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3BSZWNvcmQnKTtcclxuICAgICAgIH0sXHJcbiAgICAgICB0b01lbWJlcigpe1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCdtZW1iZXInKTtcclxuICAgICAgIH0sXHJcbiAgICAgICBwZWlJbmcoKXtcclxuXHJcbiAgICAgICB9LFxyXG4gICAgICAgcGVpV2FpdCgpe1xyXG4gICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgncGVpTGlzdCcpO1xyXG4gICAgICAgfSxcclxuICAgICAgIHBlaUxpc3QoKXtcclxuICAgICAgICAgICBcclxuICAgICAgIH1cclxuXHJcbiAgIH1cclxuICAgLy/ojrflj5bphY3pgIHkurrlkZjnmoTphY3pgIHljZXmlbDph49cclxuICAgZ2V0QWxsb2NhdGlvbkNvdW50KCl7XHJcbiAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICBwYW5EaWFuU3JldmljZS5nZXRBbGxvY2F0aW9uQ291bnQoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgICAgICB0aGF0LndsaXVDb3VudCA9IHJlcy5Cb2R5WzBdO1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLkJvZHlbMF0pXHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFRpcHMuZXJyb3IocmVzLkhlYWQubXNnKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgIFRpcHMuZXJyb3IoZXJyLkhlYWQubXNnKVxyXG4gICAgICAgfSlcclxuICAgfVxyXG5cclxuICAgLy/liKTmlq3nm5jngrnkurrlkZjmmK/lkKbmi6XmnInnm5jngrnljZVcclxuICAgZ2V0UGFuRGlhbkNvdW50KCl7XHJcbiAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICBwYW5EaWFuU3JldmljZS5nZXRJbnZlQ291bnQoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PT1cIlMwMDAwXCIpe1xyXG4gICAgICAgICAgaWYocmVzLkJvZHlbMF0pe1xyXG4gICAgICAgICAgICB0aGF0LmlzUGFuZGlhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoYXQucGFuTXNnID0gcmVzLkJvZHlbMF07XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdpbnZlbnRvcnlNc2cnLCBKU09OLnN0cmluZ2lmeShyZXMuQm9keVswXSkpXHJcbiAgICAgICAgICAgICAgbGV0IHBhcmFtID0ge2ludmVudG9yeV9zbjp0aGF0LnBhbk1zZy5pbnZlbnRvcnlfc24gfVxyXG4gICAgICAgICAgICAgIHBhbkRpYW5TcmV2aWNlLmlzRmlyc3RJbnZlbihwYXJhbSkudGhlbihyZXNzPT57XHJcbiAgICAgICAgICAgICAgIGlmKHJlc3MuSGVhZC5jb2RlPT1cIlMwMDAwXCIpe1xyXG4gICAgICAgICAgICAgICAgIGlmKHJlc3MuQm9keVswXS5pc19maXJzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNGcmlzdCA9IHJlc3MuQm9keVswXS5pc19maXJzdFxyXG4gICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNGcmlzdCcscmVzcy5Cb2R5WzBdLmlzX2ZpcnN0KVxyXG4gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzRnJpc3QnLHJlc3MuQm9keVswXS5pc19maXJzdClcclxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNGcmlzdCA9IHJlc3MuQm9keVswXS5pc19maXJzdFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIFRpcHMuZXJyb3IocmVzcy5IZWFkLm1zZylcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pLmNhdGNoKGVycnM9PntcclxuICAgICAgICAgICAgICAgIFRpcHMuZXJyb3IoZXJycy5IZWFkLm1zZylcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICB0aGF0LmlzUGFuZGlhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwi55uY54K55Lq65ZGY5piv5ZCm5oul5pyJ55uY54K55Y2V6I635Y+W5aSx6LSlPT5cIixlcnIpXHJcbiAgICAgICB9KVxyXG4gICB9XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgIGxldCBwYW5UeXBlID0gIHd4LmdldFN0b3JhZ2VTeW5jKCdwYW5UeXBlJylcclxuICAgICAgIHRoaXMucGFuVHlwZSA9IHBhblR5cGU7XHJcbiAgICAgICBpZihwYW5UeXBlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuebmOeCueS6uuWRmFwiKVxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ2V0QWxsb2NhdGlvbkNvdW50KCk7XHJcbiAgICAgICB9XHJcbiAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNBZGQnLCBcIjJcIikgLy/mmK/lkKbkuLrooaXnm5hcclxuICAgICAgIGxldCB1c2VyID0gIEpTT04ucGFyc2Uod3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpKTtcclxuICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInVzZXI9PT5cIix1c2VyKVxyXG4gICAgICAgdGhpcy5nZXRQYW5EaWFuQ291bnQoKTtcclxuICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19