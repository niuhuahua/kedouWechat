'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _WxUtils = require('./util/WxUtils.js');

var _WxUtils2 = _interopRequireDefault(_WxUtils);

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import './util/jquery.min.js'


// import '../src/util/rem.js'
var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/wl/login', 'pages/wl/changeType', 'pages/wl/peiList', 'pages/wl/pMember', 'pages/wl/changeM', 'pages/wl/pJieSuan', 'pages/wl/pRecord', 'pages/wl/setMa', 'pages/wl/pkucun', 'pages/wl/addPanProd', 'pages/wl/member', 'pages/wl/pwdReturn', 'pages/wl/newPwd'],
      window: {
        navigationBarTitleText: '蝌蚪商城',
        backgroundColor: '#fff',
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true,
        onReachBottomDistance: true
      }
    };
    _this.globalData = {
      userInfo: null,
      baseData: {
        "Tadpole": { "Head": { "channel": "03", "version": "1.0.0", "service": "dataQuery" }, "Body": {} }
      },
      //baseUrl:'https://ec.kedoupay.com/index.php/api/'
      baseUrl: 'http://tshop.zrbao.net/index.php/'
    };

    _this.use('promisify');
    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch(param) {
      //检验SDK
      _WxUtils2.default.checkSDK();
      // const ext = wepy.getExtConfigSync();
      // Object.assign(wepy.$instance.globalData, ext);
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJiYXNlRGF0YSIsImJhc2VVcmwiLCJ1c2UiLCJwYXJhbSIsImNoZWNrU0RLIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztBQUhBOzs7QUFJQTs7OztBQThCRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBNUJmQSxNQTRCZSxHQTVCTjtBQUNQQyxhQUFPLENBQ0YsZ0JBREUsRUFFRixxQkFGRSxFQUdGLGtCQUhFLEVBSUQsa0JBSkMsRUFLQSxrQkFMQSxFQU1BLG1CQU5BLEVBT0Esa0JBUEEsRUFRQSxnQkFSQSxFQVNBLGlCQVRBLEVBVUEscUJBVkEsRUFXQSxpQkFYQSxFQVlBLG9CQVpBLEVBYUEsaUJBYkEsQ0FEQTtBQWlCUEMsY0FBUTtBQUNOQyxnQ0FBd0IsTUFEbEI7QUFFTkMseUJBQWdCLE1BRlY7QUFHTkMsNkJBQXFCLE9BSGY7QUFJTkMsc0NBQThCLE1BSnhCO0FBS05DLGdDQUF3QixPQUxsQjtBQU1OQywrQkFBc0IsSUFOaEI7QUFPTkMsK0JBQXNCO0FBUGhCO0FBakJELEtBNEJNO0FBQUEsVUFZZkMsVUFaZSxHQVlGO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsZ0JBQVc7QUFDVCxtQkFBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLElBQWIsRUFBbUIsV0FBVyxPQUE5QixFQUF1QyxXQUFXLFdBQWxELEVBQVYsRUFBMkUsUUFBUSxFQUFuRjtBQURGLE9BRkE7QUFLYjtBQUNFQyxlQUFRO0FBTkcsS0FaRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsV0FBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBSGE7QUFJZDs7Ozs2QkFDUUMsSyxFQUFNO0FBQ1g7QUFDQSx3QkFBUUMsUUFBUjtBQUNBO0FBQ0E7QUFDSDs7OztFQXZDMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuLy8gaW1wb3J0ICcuL3V0aWwvanF1ZXJ5Lm1pbi5qcydcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQgV3hVdGlscyBmcm9tICcuL3V0aWwvV3hVdGlscyc7XHJcbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuLy8gaW1wb3J0ICcuLi9zcmMvdXRpbC9yZW0uanMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgICdwYWdlcy93bC9sb2dpbicsXHJcbiAgICAgICAgICdwYWdlcy93bC9jaGFuZ2VUeXBlJyxcclxuICAgICAgICAgJ3BhZ2VzL3dsL3BlaUxpc3QnLFxyXG4gICAgICAgICAgJ3BhZ2VzL3dsL3BNZW1iZXInLFxyXG4gICAgICAgICAgICdwYWdlcy93bC9jaGFuZ2VNJyxcclxuICAgICAgICAgICAncGFnZXMvd2wvcEppZVN1YW4nLFxyXG4gICAgICAgICAgICdwYWdlcy93bC9wUmVjb3JkJyxcclxuICAgICAgICAgICAncGFnZXMvd2wvc2V0TWEnLFxyXG4gICAgICAgICAgICdwYWdlcy93bC9wa3VjdW4nLFxyXG4gICAgICAgICAgICdwYWdlcy93bC9hZGRQYW5Qcm9kJyxcclxuICAgICAgICAgICAncGFnZXMvd2wvbWVtYmVyJyxcclxuICAgICAgICAgICAncGFnZXMvd2wvcHdkUmV0dXJuJyxcclxuICAgICAgICAgICAncGFnZXMvd2wvbmV3UHdkJ1xyXG4gICAgICAgICBcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+idjOiaquWVhuWfjicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjonI2ZmZicsXHJcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOnRydWUsXHJcbiAgICAgIG9uUmVhY2hCb3R0b21EaXN0YW5jZTp0cnVlXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuICBvbkxhdW5jaChwYXJhbSl7XHJcbiAgICAgIC8v5qOA6aqMU0RLXHJcbiAgICAgIFd4VXRpbHMuY2hlY2tTREsoKTtcclxuICAgICAgLy8gY29uc3QgZXh0ID0gd2VweS5nZXRFeHRDb25maWdTeW5jKCk7XHJcbiAgICAgIC8vIE9iamVjdC5hc3NpZ24od2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YSwgZXh0KTtcclxuICB9XHJcbiBcclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBiYXNlRGF0YSA6IHtcclxuICAgICAgXCJUYWRwb2xlXCI6IHsgXCJIZWFkXCI6IHsgXCJjaGFubmVsXCI6IFwiMDNcIiwgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIiwgXCJzZXJ2aWNlXCI6IFwiZGF0YVF1ZXJ5XCIgfSwgXCJCb2R5XCI6IHt9IH0gXHJcbiAgICB9LFxyXG4gIC8vYmFzZVVybDonaHR0cHM6Ly9lYy5rZWRvdXBheS5jb20vaW5kZXgucGhwL2FwaS8nXHJcbiAgICBiYXNlVXJsOidodHRwOi8vdHNob3AuenJiYW8ubmV0L2luZGV4LnBocC8nXHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ==