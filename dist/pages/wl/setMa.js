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

var setMa = function (_wepy$page) {
    _inherits(setMa, _wepy$page);

    function setMa() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, setMa);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = setMa.__proto__ || Object.getPrototypeOf(setMa)).call.apply(_ref, [this].concat(args))), _this), _this.data = { storage_num: 0, insenMsg: '', inputCode: '', showModel: false, codePro: '', saleType: '', checkType: '' }, _this.methods = {
            changeCode: function changeCode(e) {
                this.inputCode = e.detail.value;
            },
            getCodeProduct: function getCodeProduct() {
                var that = this;
                console.log(that.insenMsg);
                var parma = { code_goods: that.inputCode, inventory_sn: that.insenMsg.inventory_sn, is_first: wx.getStorageSync('isFrist') };
                _pan2.default.getScanGoods(parma).then(function (res) {
                    wx.hideLoading();
                    if (res.Head.code == "S0000") {
                        that.showModel = true;
                        that.codePro = res.Body[0].goods_lists[0];
                        that.storage_num = res.Body[0].goods_lists[0].storage_num;
                        that.saleType = res.Body[0].sale_type;
                        that.$apply();
                        console.log(res.Body[0]);
                    } else {
                        that.showModel = false;
                        _Tips2.default.error(res.Head.msg);
                    }
                }).catch(function (err) {});
            },
            checkType: function checkType(index) {
                console.log(index);
                this.checkType = index;
                this.$apply();
            },
            jianNumber: function jianNumber() {
                if (this.storage_num > 0) {
                    this.storage_num -= 1;
                    this.$apply();
                } else {
                    this.storage_num = 0;
                    this.$apply();
                }
            },
            addNumber: function addNumber() {
                this.storage_num += 1;
                this.$apply();
            },
            setKuCun: function setKuCun() {
                var _this2 = this;

                //确认库存
                var that = this;
                if (!that.checkType) {
                    _Tips2.default.error("请选择销售方式");
                    return false;
                }
                var isBu = "";
                if (wx.getStorageSync('isAdd') == "1") {
                    isBu = "2";
                } else {
                    isBu = "1";
                }
                var param = {
                    code_goods: that.codePro.code_goods, inventory_sn: that.insenMsg.inventory_sn, is_first: wx.getStorageSync('isFrist'),
                    gstandard_id: that.codePro.gstandard_id, goods_id: that.codePro.goods_id, goods_ab: that.codePro.goods_ab,
                    goods_name: that.codePro.goods_name, price_sell: that.codePro.price_sell, ratio: that.codePro.ratio, price_purchase: that.codePro.price_purchase,
                    num: that.storage_num, image_thumb: that.codePro.image_thumb, g_name: that.codePro.g_name, g_value: that.codePro.g_value, gg_name: that.codePro.gg_name,
                    gg_value: that.codePro.gg_value, storage_num: that.codePro.storage_num, is_add: isBu
                };
                _pan2.default.setInvenProd(param).then(function (res) {
                    if (res.Head.code == "S0000") {
                        wx.setStorageSync("inventorySn", res.Body[0].inventory_sn);
                        _this2.showModel = false;
                    } else {
                        _Tips2.default.error(res.Head.msg);
                    }
                }).catch(function (err) {
                    _Tips2.default.error(err.Head.msg);
                });
            },
            againSao: function againSao() {
                //重新扫码
                this.showModel = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(setMa, [{
        key: 'onLoad',
        value: function onLoad() {
            this.insenMsg = JSON.parse(wx.getStorageSync('inventoryMsg'));
            console.log(this.insenMsg);
            this.$apply();
        }
    }]);

    return setMa;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(setMa , 'pages/wl/setMa'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldE1hLmpzIl0sIm5hbWVzIjpbInNldE1hIiwiZGF0YSIsInN0b3JhZ2VfbnVtIiwiaW5zZW5Nc2ciLCJpbnB1dENvZGUiLCJzaG93TW9kZWwiLCJjb2RlUHJvIiwic2FsZVR5cGUiLCJjaGVja1R5cGUiLCJtZXRob2RzIiwiY2hhbmdlQ29kZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImdldENvZGVQcm9kdWN0IiwidGhhdCIsImNvbnNvbGUiLCJsb2ciLCJwYXJtYSIsImNvZGVfZ29vZHMiLCJpbnZlbnRvcnlfc24iLCJpc19maXJzdCIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJnZXRTY2FuR29vZHMiLCJ0aGVuIiwiaGlkZUxvYWRpbmciLCJyZXMiLCJIZWFkIiwiY29kZSIsIkJvZHkiLCJnb29kc19saXN0cyIsInNhbGVfdHlwZSIsIiRhcHBseSIsImVycm9yIiwibXNnIiwiY2F0Y2giLCJpbmRleCIsImppYW5OdW1iZXIiLCJhZGROdW1iZXIiLCJzZXRLdUN1biIsImlzQnUiLCJwYXJhbSIsImdzdGFuZGFyZF9pZCIsImdvb2RzX2lkIiwiZ29vZHNfYWIiLCJnb29kc19uYW1lIiwicHJpY2Vfc2VsbCIsInJhdGlvIiwicHJpY2VfcHVyY2hhc2UiLCJudW0iLCJpbWFnZV90aHVtYiIsImdfbmFtZSIsImdfdmFsdWUiLCJnZ19uYW1lIiwiZ2dfdmFsdWUiLCJpc19hZGQiLCJzZXRJbnZlblByb2QiLCJzZXRTdG9yYWdlU3luYyIsImVyciIsImFnYWluU2FvIiwiSlNPTiIsInBhcnNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPLEVBQUNDLGFBQVksQ0FBYixFQUFnQkMsVUFBVSxFQUExQixFQUE2QkMsV0FBVSxFQUF2QyxFQUEwQ0MsV0FBVSxLQUFwRCxFQUEwREMsU0FBUSxFQUFsRSxFQUFxRUMsVUFBUyxFQUE5RSxF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QUFDQTtBQTVFSyxTOzs7OztpQ0E4RUQ7QUFDVCxpQkFBS0YsUUFBTCxHQUFpQjBELEtBQUtDLEtBQUwsQ0FBV3hDLEdBQUdDLGNBQUgsQ0FBa0IsY0FBbEIsQ0FBWCxDQUFqQjtBQUNBUCxvQkFBUUMsR0FBUixDQUFZLEtBQUtkLFFBQWpCO0FBQ0EsaUJBQUs4QixNQUFMO0FBQ0E7Ozs7RUFwRitCLGVBQUs4QixJOztrQkFBbkIvRCxLIiwiZmlsZSI6InNldE1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgcGFuU2VydmljZSBmcm9tICcuLi8uLi9hcGkvd2wvcGFuLmpzJ1xyXG5pbXBvcnQgVGlwcyBmcm9tICcuLi8uLi91dGlsL1RpcHMuanMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNldE1hIGV4dGVuZHMgd2VweS5wYWdlICB7XHJcbiAgICBkYXRhID0ge3N0b3JhZ2VfbnVtOjAsIGluc2VuTXNnIDonJyxpbnB1dENvZGU6Jycsc2hvd01vZGVsOmZhbHNlLGNvZGVQcm86Jycsc2FsZVR5cGU6JycsY2hlY2tUeXBlOicnfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBjaGFuZ2VDb2RlKGUpe1xyXG4gICAgICAgICAgdGhpcy5pbnB1dENvZGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q29kZVByb2R1Y3QoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0Lmluc2VuTXNnKVxyXG4gICAgICAgICAgICBsZXQgcGFybWEgPSB7Y29kZV9nb29kczp0aGF0LmlucHV0Q29kZSxpbnZlbnRvcnlfc246dGhhdC5pbnNlbk1zZy5pbnZlbnRvcnlfc24saXNfZmlyc3Q6d3guZ2V0U3RvcmFnZVN5bmMoJ2lzRnJpc3QnKX1cclxuICAgICAgICAgICAgcGFuU2VydmljZS5nZXRTY2FuR29vZHMocGFybWEpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2hvd01vZGVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoYXQuY29kZVBybyA9IHJlcy5Cb2R5WzBdLmdvb2RzX2xpc3RzWzBdOyBcclxuICAgICAgICAgICAgICAgIHRoYXQuc3RvcmFnZV9udW0gPSByZXMuQm9keVswXS5nb29kc19saXN0c1swXS5zdG9yYWdlX251bTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2FsZVR5cGUgPSByZXMuQm9keVswXS5zYWxlX3R5cGU7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLkJvZHlbMF0pXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd01vZGVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIFRpcHMuZXJyb3IocmVzLkhlYWQubXNnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tUeXBlKGluZGV4KXtcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgIHRoaXMuY2hlY2tUeXBlID0gaW5kZXg7XHJcbiAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqaWFuTnVtYmVyKCl7XHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnN0b3JhZ2VfbnVtPjApe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZV9udW0gLT0gMTtcclxuICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VfbnVtID0gMFxyXG4gICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZE51bWJlcigpe1xyXG4gICAgICAgICB0aGlzLnN0b3JhZ2VfbnVtICs9IDE7XHJcbiAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRLdUN1bigpey8v56Gu6K6k5bqT5a2YXHJcbiAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICBpZighdGhhdC5jaGVja1R5cGUpe1xyXG4gICAgICAgICAgICAgIFRpcHMuZXJyb3IoXCLor7fpgInmi6nplIDllK7mlrnlvI9cIilcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfSBcclxuICAgICAgICAgICBsZXQgaXNCdSA9IFwiXCI7XHJcbiAgICAgICAgICAgaWYod3guZ2V0U3RvcmFnZVN5bmMoJ2lzQWRkJyk9PVwiMVwiKXtcclxuICAgICAgICAgICAgICAgaXNCdSA9IFwiMlwiXHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpc0J1ID0gXCIxXCJcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgbGV0IHBhcmFtID0ge1xyXG4gICAgICAgICAgICAgICBjb2RlX2dvb2RzOnRoYXQuY29kZVByby5jb2RlX2dvb2RzLGludmVudG9yeV9zbjp0aGF0Lmluc2VuTXNnLmludmVudG9yeV9zbixpc19maXJzdDp3eC5nZXRTdG9yYWdlU3luYygnaXNGcmlzdCcpLFxyXG4gICAgICAgICAgICAgICBnc3RhbmRhcmRfaWQ6dGhhdC5jb2RlUHJvLmdzdGFuZGFyZF9pZCxnb29kc19pZDp0aGF0LmNvZGVQcm8uZ29vZHNfaWQsZ29vZHNfYWI6dGhhdC5jb2RlUHJvLmdvb2RzX2FiLFxyXG4gICAgICAgICAgICAgICBnb29kc19uYW1lOnRoYXQuY29kZVByby5nb29kc19uYW1lLHByaWNlX3NlbGw6dGhhdC5jb2RlUHJvLnByaWNlX3NlbGwscmF0aW86dGhhdC5jb2RlUHJvLnJhdGlvLHByaWNlX3B1cmNoYXNlOnRoYXQuY29kZVByby5wcmljZV9wdXJjaGFzZSxcclxuICAgICAgICAgICAgICAgbnVtOnRoYXQuc3RvcmFnZV9udW0saW1hZ2VfdGh1bWI6dGhhdC5jb2RlUHJvLmltYWdlX3RodW1iLGdfbmFtZTp0aGF0LmNvZGVQcm8uZ19uYW1lLGdfdmFsdWU6dGhhdC5jb2RlUHJvLmdfdmFsdWUsZ2dfbmFtZTp0aGF0LmNvZGVQcm8uZ2dfbmFtZSxcclxuICAgICAgICAgICAgICAgZ2dfdmFsdWU6dGhhdC5jb2RlUHJvLmdnX3ZhbHVlLHN0b3JhZ2VfbnVtOnRoYXQuY29kZVByby5zdG9yYWdlX251bSxpc19hZGQ6aXNCdVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIHBhblNlcnZpY2Uuc2V0SW52ZW5Qcm9kKHBhcmFtKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJpbnZlbnRvcnlTblwiLHJlcy5Cb2R5WzBdLmludmVudG9yeV9zbilcclxuICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIFRpcHMuZXJyb3IocmVzLkhlYWQubXNnKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgVGlwcy5lcnJvcihlcnIuSGVhZC5tc2cpXHJcbiAgICAgICAgICB9KSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFnYWluU2FvKCl7Ly/ph43mlrDmiavnoIFcclxuICAgICAgICAgdGhpcy5zaG93TW9kZWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmluc2VuTXNnID0gIEpTT04ucGFyc2Uod3guZ2V0U3RvcmFnZVN5bmMoJ2ludmVudG9yeU1zZycpKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5zZW5Nc2cpXHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gICB9XHJcbn1cclxuIl19