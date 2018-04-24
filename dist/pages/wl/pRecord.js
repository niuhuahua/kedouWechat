'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _produList = require('./../../components/wl/produList.js');

var _produList2 = _interopRequireDefault(_produList);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

var _pan = require('./../../api/wl/pan.js');

var _pan2 = _interopRequireDefault(_pan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pRecord = function (_wepy$page) {
  _inherits(pRecord, _wepy$page);

  function pRecord() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pRecord);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pRecord.__proto__ || Object.getPrototypeOf(pRecord)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      mainData: '',
      countPage: -100,
      page: -100,
      windowHeight: 0,
      noData: false
    }, _this.config = {
      navigationBarTitleText: '盘点记录'
    }, _this.$repeat = { "item": { "com": "ProucItem", "props": "goods.sync" } }, _this.$props = { "ProucItem": { "wx-if": { "value": "{{item.goods_lists.length>0}}", "for": "item.goods_lists", "item": "item", "index": "index", "key": "index" }, "xmlns:v-bind": { "value": "", "for": "item.goods_lists", "item": "item", "index": "index", "key": "index" }, "v-bind:goods.sync": { "value": "item", "type": "item", "for": "item.goods_lists", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      ProucItem: _produList2.default
    }, _this.methods = {
      errorImg: function errorImg(src) {
        console.log("src==>", src);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pRecord, [{
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.countPage == this.page) {
        this.noData = true;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      wx.getSystemInfo({
        success: function success(e) {
          that.windowHeight = e.windowHeight;
          that.$apply();
          // console.log(e)
        }
      });
      _pan2.default.getInvenLogs().then(function (res) {
        if (res.Head.code == "S0000") {
          wx.hideLoading();
          that.mainData = res.Body[0].lists;
          that.countPage = res.Body[0].count_page;
          that.page = res.Body[0].page;
          that.$apply();
        } else {
          _Tips2.default.error(res.Head.msg);
        }
      }).catch(function (err) {
        _Tips2.default.error(err.Head.msg);
      });
    }
  }]);

  return pRecord;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(pRecord , 'pages/wl/pRecord'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBSZWNvcmQuanMiXSwibmFtZXMiOlsicFJlY29yZCIsImRhdGEiLCJtYWluRGF0YSIsImNvdW50UGFnZSIsInBhZ2UiLCJ3aW5kb3dIZWlnaHQiLCJub0RhdGEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUHJvdWNJdGVtIiwibWV0aG9kcyIsImVycm9ySW1nIiwic3JjIiwiY29uc29sZSIsImxvZyIsInRoYXQiLCJ3eCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiZSIsIiRhcHBseSIsImdldEludmVuTG9ncyIsInRoZW4iLCJyZXMiLCJIZWFkIiwiY29kZSIsImhpZGVMb2FkaW5nIiwiQm9keSIsImxpc3RzIiwiY291bnRfcGFnZSIsImVycm9yIiwibXNnIiwiY2F0Y2giLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFLO0FBQ0hDLGdCQUFTLEVBRE47QUFFSEMsaUJBQVUsQ0FBQyxHQUZSO0FBR0hDLFlBQUssQ0FBQyxHQUhIO0FBSUhDLG9CQUFhLENBSlY7QUFLSEMsY0FBTztBQUxKLEssUUFPTEMsTSxHQUFTO0FBQ1BDLDhCQUF1QjtBQURoQixLLFFBR1ZDLE8sR0FBVSxFQUFDLFFBQU8sRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxZQUEzQixFQUFSLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLFNBQVEsRUFBQyxTQUFRLCtCQUFULEVBQXlDLE9BQU0sa0JBQS9DLEVBQWtFLFFBQU8sTUFBekUsRUFBZ0YsU0FBUSxPQUF4RixFQUFnRyxPQUFNLE9BQXRHLEVBQVQsRUFBd0gsZ0JBQWUsRUFBQyxTQUFRLEVBQVQsRUFBWSxPQUFNLGtCQUFsQixFQUFxQyxRQUFPLE1BQTVDLEVBQW1ELFNBQVEsT0FBM0QsRUFBbUUsT0FBTSxPQUF6RSxFQUF2SSxFQUF5TixxQkFBb0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLGtCQUFwQyxFQUF1RCxRQUFPLE1BQTlELEVBQXFFLFNBQVEsT0FBN0UsRUFBcUYsT0FBTSxPQUEzRixFQUE3TyxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsR0FERCxFQUNLO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVksUUFBWixFQUFxQkYsR0FBckI7QUFDRDtBQUhPLEs7Ozs7O29DQUtHO0FBQ2IsVUFBRyxLQUFLYixTQUFMLElBQWdCLEtBQUtDLElBQXhCLEVBQTZCO0FBQzNCLGFBQUtFLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRjs7OzZCQUNTO0FBQ04sVUFBSWEsT0FBTyxJQUFYO0FBQ0VDLFNBQUdDLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLENBQVQsRUFBWTtBQUNuQkosZUFBS2QsWUFBTCxHQUFvQmtCLEVBQUVsQixZQUF0QjtBQUNBYyxlQUFLSyxNQUFMO0FBQ0E7QUFDRDtBQUxjLE9BQWpCO0FBT0Ysb0JBQVdDLFlBQVgsR0FBMEJDLElBQTFCLENBQStCLGVBQUs7QUFDbkMsWUFBR0MsSUFBSUMsSUFBSixDQUFTQyxJQUFULElBQWUsT0FBbEIsRUFBMEI7QUFDeEJULGFBQUdVLFdBQUg7QUFDQVgsZUFBS2pCLFFBQUwsR0FBZ0J5QixJQUFJSSxJQUFKLENBQVMsQ0FBVCxFQUFZQyxLQUE1QjtBQUNBYixlQUFLaEIsU0FBTCxHQUFpQndCLElBQUlJLElBQUosQ0FBUyxDQUFULEVBQVlFLFVBQTdCO0FBQ0FkLGVBQUtmLElBQUwsR0FBWXVCLElBQUlJLElBQUosQ0FBUyxDQUFULEVBQVkzQixJQUF4QjtBQUNBZSxlQUFLSyxNQUFMO0FBQ0QsU0FORCxNQU1LO0FBQ0YseUJBQUtVLEtBQUwsQ0FBV1AsSUFBSUMsSUFBSixDQUFTTyxHQUFwQjtBQUNGO0FBQ0QsT0FWRCxFQVVHQyxLQVZILENBVVMsZUFBSztBQUNaLHVCQUFLRixLQUFMLENBQVdHLElBQUlULElBQUosQ0FBU08sR0FBcEI7QUFDRCxPQVpEO0FBYUQ7Ozs7RUFqRGdDLGVBQUsvQixJOztrQkFBckJKLE8iLCJmaWxlIjoicFJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICAnd2VweSdcclxuaW1wb3J0IFByb3VjSXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dsL3Byb2R1TGlzdCdcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi4vLi4vdXRpbC9UaXBzLmpzJ1xyXG5pbXBvcnQgcGFuU2VydmljZSBmcm9tICcuLi8uLi9hcGkvd2wvcGFuLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwUmVjb3JkIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGE9e1xyXG4gICAgICBtYWluRGF0YTonJyxcclxuICAgICAgY291bnRQYWdlOi0xMDAsXHJcbiAgICAgIHBhZ2U6LTEwMCxcclxuICAgICAgd2luZG93SGVpZ2h0OjAsXHJcbiAgICAgIG5vRGF0YTpmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Oifnm5jngrnorrDlvZUnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7XCJpdGVtXCI6e1wiY29tXCI6XCJQcm91Y0l0ZW1cIixcInByb3BzXCI6XCJnb29kcy5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiUHJvdWNJdGVtXCI6e1wid3gtaWZcIjp7XCJ2YWx1ZVwiOlwie3tpdGVtLmdvb2RzX2xpc3RzLmxlbmd0aD4wfX1cIixcImZvclwiOlwiaXRlbS5nb29kc19saXN0c1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJpdGVtLmdvb2RzX2xpc3RzXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6Z29vZHMuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIml0ZW0uZ29vZHNfbGlzdHNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBQcm91Y0l0ZW06UHJvdWNJdGVtXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBlcnJvckltZyhzcmMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3JjPT0+XCIsc3JjKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgb25SZWFjaEJvdHRvbSgpe1xyXG4gICAgaWYodGhpcy5jb3VudFBhZ2U9PXRoaXMucGFnZSl7XHJcbiAgICAgIHRoaXMubm9EYXRhID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0aGF0LndpbmRvd0hlaWdodCA9IGUud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICBwYW5TZXJ2aWNlLmdldEludmVuTG9ncygpLnRoZW4ocmVzPT57XHJcbiAgICAgICBpZihyZXMuSGVhZC5jb2RlPT1cIlMwMDAwXCIpe1xyXG4gICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICB0aGF0Lm1haW5EYXRhID0gcmVzLkJvZHlbMF0ubGlzdHM7XHJcbiAgICAgICAgIHRoYXQuY291bnRQYWdlID0gcmVzLkJvZHlbMF0uY291bnRfcGFnZTtcclxuICAgICAgICAgdGhhdC5wYWdlID0gcmVzLkJvZHlbMF0ucGFnZTtcclxuICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBUaXBzLmVycm9yKHJlcy5IZWFkLm1zZylcclxuICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgVGlwcy5lcnJvcihlcnIuSGVhZC5tc2cpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl19