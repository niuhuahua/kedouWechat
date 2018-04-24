'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _user = require('./../../api/wl/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wlMember = function (_wepy$page) {
  _inherits(wlMember, _wepy$page);

  function wlMember() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, wlMember);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = wlMember.__proto__ || Object.getPrototypeOf(wlMember)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      user: ''
    }, _this.methods = {
      toChangePwd: function toChangePwd() {
        this.$navigate('newPwd');
      },
      toChangePhone: function toChangePhone() {
        this.$navigate('pwdReturn');
      },
      loginOut: function loginOut() {
        var that = this;
        _user2.default.toLoginOut().then(function (res) {
          if (res.Head.code = "S0000") {
            wx.removeStorageSync('panType');
            wx.removeStorageSync('user');
            that.$navigate('/pages/wl/login');
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(wlMember, [{
    key: 'onLoad',
    value: function onLoad() {
      var user = JSON.parse(wx.getStorageSync("user"));
      this.user = user;
      //    this.$apply();
    }
  }]);

  return wlMember;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(wlMember , 'pages/wl/member'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci5qcyJdLCJuYW1lcyI6WyJ3bE1lbWJlciIsImRhdGEiLCJ1c2VyIiwibWV0aG9kcyIsInRvQ2hhbmdlUHdkIiwiJG5hdmlnYXRlIiwidG9DaGFuZ2VQaG9uZSIsImxvZ2luT3V0IiwidGhhdCIsInRvTG9naW5PdXQiLCJ0aGVuIiwicmVzIiwiSGVhZCIsImNvZGUiLCJ3eCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3RvcmFnZVN5bmMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNqQkMsSSxHQUFPO0FBQ0hDLFlBQUs7QUFERixLLFFBR1BDLE8sR0FBVTtBQUNOQyxpQkFETSx5QkFDTztBQUNaLGFBQUtDLFNBQUwsQ0FBZSxRQUFmO0FBQ0EsT0FISztBQUlOQyxtQkFKTSwyQkFJUztBQUNkLGFBQUtELFNBQUwsQ0FBZSxXQUFmO0FBQ0EsT0FOSztBQU9ORSxjQVBNLHNCQU9JO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0gsdUJBQVlDLFVBQVosR0FBeUJDLElBQXpCLENBQThCLGVBQUs7QUFDbEMsY0FBR0MsSUFBSUMsSUFBSixDQUFTQyxJQUFULEdBQWMsT0FBakIsRUFBeUI7QUFDdkJDLGVBQUdDLGlCQUFILENBQXFCLFNBQXJCO0FBQ0FELGVBQUdDLGlCQUFILENBQXFCLE1BQXJCO0FBQ0FQLGlCQUFLSCxTQUFMLENBQWUsaUJBQWY7QUFDRDtBQUNELFNBTkQsRUFNR1csS0FOSCxDQU1TLGVBQUs7QUFDYkMsa0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNBLFNBUkQ7QUFTQTtBQWxCSyxLOzs7Ozs2QkFvQkY7QUFDTCxVQUFJakIsT0FBUWtCLEtBQUtDLEtBQUwsQ0FBV1AsR0FBR1EsY0FBSCxDQUFrQixNQUFsQixDQUFYLENBQVo7QUFDQSxXQUFLcEIsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7QUFDQzs7OztFQTVCaUMsZUFBS3FCLEk7O2tCQUF0QnZCLFEiLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi8uLi9hcGkvd2wvdXNlci5qcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd2xNZW1iZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICB1c2VyOicnXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHRvQ2hhbmdlUHdkKCl7XHJcbiAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCduZXdQd2QnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvQ2hhbmdlUGhvbmUoKXtcclxuICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3B3ZFJldHVybicpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5PdXQoKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICB1c2VyU2VydmljZS50b0xvZ2luT3V0KCkudGhlbihyZXM9PntcclxuICAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3BhblR5cGUnKVxyXG4gICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndXNlcicpO1xyXG4gICAgICAgICAgICB0aGF0LiRuYXZpZ2F0ZSgnL3BhZ2VzL3dsL2xvZ2luJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICBsZXQgdXNlciA9ICBKU09OLnBhcnNlKHd4LmdldFN0b3JhZ2VTeW5jKFwidXNlclwiKSk7XHJcbiAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgLy8gICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICBcclxufVxyXG4iXX0=