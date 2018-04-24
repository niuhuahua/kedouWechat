'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

var _user = require('./../../api/wl/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import htmlParser from '../../components/htmlParser'


var WlPwdReturn = function (_wepy$page) {
    _inherits(WlPwdReturn, _wepy$page);

    function WlPwdReturn() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WlPwdReturn);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WlPwdReturn.__proto__ || Object.getPrototypeOf(WlPwdReturn)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            user: JSON.parse(wx.getStorageSync('user'))
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WlPwdReturn, [{
        key: 'onLoad',
        value: function onLoad() {
            var user = JSON.parse(wx.getStorageSync('user'));
            console.log('====================================');
            console.log(user);
            console.log('====================================');
        }
    }]);

    return WlPwdReturn;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WlPwdReturn , 'pages/wl/pwdReturn'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB3ZFJldHVybi5qcyJdLCJuYW1lcyI6WyJXbFB3ZFJldHVybiIsImRhdGEiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxJLEdBQU87QUFDSEMsa0JBQU1DLEtBQUtDLEtBQUwsQ0FBV0MsR0FBR0MsY0FBSCxDQUFrQixNQUFsQixDQUFYO0FBREgsUzs7Ozs7aUNBR0Q7QUFDTCxnQkFBTUosT0FBT0MsS0FBS0MsS0FBTCxDQUFXQyxHQUFHQyxjQUFILENBQWtCLE1BQWxCLENBQVgsQ0FBYjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLHNDQUFaO0FBQ0FELG9CQUFRQyxHQUFSLENBQVlOLElBQVo7QUFDQUssb0JBQVFDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNGOzs7O0VBVHNDLGVBQUtDLEk7O2tCQUF6QlQsVyIsImZpbGUiOiJwd2RSZXR1cm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi4vLi4vdXRpbC9UaXBzLmpzJ1xyXG4vLyBpbXBvcnQgaHRtbFBhcnNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2h0bWxQYXJzZXInXHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi8uLi9hcGkvd2wvdXNlci5qcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xQd2RSZXR1cm4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB1c2VyOiBKU09OLnBhcnNlKHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJykpXHJcbiAgICB9XHJcbiAgb25Mb2FkKCl7XHJcbiAgICAgY29uc3QgdXNlciAgPUpTT04ucGFyc2Uod3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXInKSk7XHJcbiAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xyXG4gICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcclxuICB9XHJcbn1cclxuIl19