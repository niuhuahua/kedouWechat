'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


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

var WlNewPwd = function (_wepy$page) {
    _inherits(WlNewPwd, _wepy$page);

    function WlNewPwd() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WlNewPwd);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WlNewPwd.__proto__ || Object.getPrototypeOf(WlNewPwd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '设置新密码'
        }, _this.data = {
            pwdOnce: true,
            pwdTwice: true,
            newPwd: '',
            againPwd: '',
            showDifference: false
        }, _this.methods = {
            changeNewpwd: function changeNewpwd(e) {
                this.newPwd = e.detail.value;
            },
            changeAgainpwd: function changeAgainpwd(e) {
                this.againPwd = e.detail.value;
                // if(this.againPwd==this.newPwd){
                //  this.showDifference = false;
                // }else{
                //  this.showDifference = true;
                // }
            },
            changePwdOnce: function changePwdOnce() {
                this.pwdOnce = !this.pwdOnce;
            },
            changePwdTwice: function changePwdTwice() {
                this.pwdTwice = !this.pwdTwice;
            },
            toChangePwd: function toChangePwd() {
                var _this2 = this;

                //修改密码
                var param = {
                    keytype: "1",
                    old_password: this.newPwd,
                    new_password: this.againPwd
                };
                _user2.default.changePwd(param).then(function (res) {
                    if (res.Head.code == "S0000") {
                        _Tips2.default.success('修改成功');
                        //  wepy.navigateBack();
                        _this2.$navigate('member');
                    } else {
                        _Tips2.default.error(res.Head.msg);
                    }
                }).catch(function (err) {
                    _Tips2.default.error(err.Head.msg);
                    console.log("修改密码错误==》", err);
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return WlNewPwd;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WlNewPwd , 'pages/wl/newPwd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld1B3ZC5qcyJdLCJuYW1lcyI6WyJXbE5ld1B3ZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHdkT25jZSIsInB3ZFR3aWNlIiwibmV3UHdkIiwiYWdhaW5Qd2QiLCJzaG93RGlmZmVyZW5jZSIsIm1ldGhvZHMiLCJjaGFuZ2VOZXdwd2QiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjaGFuZ2VBZ2FpbnB3ZCIsImNoYW5nZVB3ZE9uY2UiLCJjaGFuZ2VQd2RUd2ljZSIsInRvQ2hhbmdlUHdkIiwicGFyYW0iLCJrZXl0eXBlIiwib2xkX3Bhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwiY2hhbmdlUHdkIiwidGhlbiIsInJlcyIsIkhlYWQiLCJjb2RlIiwic3VjY2VzcyIsIiRuYXZpZ2F0ZSIsImVycm9yIiwibXNnIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdYQyxJLEdBQU87QUFDSEMscUJBQVEsSUFETDtBQUVIQyxzQkFBUyxJQUZOO0FBR0hDLG9CQUFPLEVBSEo7QUFJSEMsc0JBQVMsRUFKTjtBQUtIQyw0QkFBZTtBQUxaLFMsUUFPUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1M7QUFDZCxxQkFBS0wsTUFBTCxHQUFjSyxFQUFFQyxNQUFGLENBQVNDLEtBQXZCO0FBQ0EsYUFISztBQUlOQywwQkFKTSwwQkFJU0gsQ0FKVCxFQUlXO0FBQ2YscUJBQUtKLFFBQUwsR0FBZ0JJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsYUFYSztBQVlORSx5QkFaTSwyQkFZUztBQUNYLHFCQUFLWCxPQUFMLEdBQWUsQ0FBRyxLQUFLQSxPQUF2QjtBQUNILGFBZEs7QUFlTlksMEJBZk0sNEJBZVU7QUFDWixxQkFBS1gsUUFBTCxHQUFnQixDQUFFLEtBQUtBLFFBQXZCO0FBQ0gsYUFqQks7QUFrQk5ZLHVCQWxCTSx5QkFrQk87QUFBQTs7QUFBQztBQUNkLG9CQUFJQyxRQUFRO0FBQ1JDLDZCQUFRLEdBREE7QUFFUkMsa0NBQWEsS0FBS2QsTUFGVjtBQUdSZSxrQ0FBYSxLQUFLZDtBQUhWLGlCQUFaO0FBS0MsK0JBQVllLFNBQVosQ0FBc0JKLEtBQXRCLEVBQTZCSyxJQUE3QixDQUFrQyxlQUFLO0FBQ3JDLHdCQUFHQyxJQUFJQyxJQUFKLENBQVNDLElBQVQsSUFBZSxPQUFsQixFQUEwQjtBQUN0Qix1Q0FBS0MsT0FBTCxDQUFhLE1BQWI7QUFDRDtBQUNELCtCQUFLQyxTQUFMLENBQWUsUUFBZjtBQUNELHFCQUpELE1BSUs7QUFDQSx1Q0FBS0MsS0FBTCxDQUFXTCxJQUFJQyxJQUFKLENBQVNLLEdBQXBCO0FBQ0o7QUFDRixpQkFSRCxFQVFHQyxLQVJILENBUVMsZUFBSztBQUNaLG1DQUFLRixLQUFMLENBQVdHLElBQUlQLElBQUosQ0FBU0ssR0FBcEI7QUFDQ0csNEJBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCRixHQUF4QjtBQUNGLGlCQVhEO0FBWUE7QUFwQ0ssUzs7OztFQVgwQixlQUFLRyxJOztrQkFBdEJuQyxRIiwiZmlsZSI6Im5ld1B3ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgVGlwcyBmcm9tICcuLi8uLi91dGlsL1RpcHMuanMnXHJcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuLi8uLi9hcGkvd2wvdXNlci5qcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2xOZXdQd2QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6+572u5paw5a+G56CBJ1xyXG4gICAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgICBwd2RPbmNlOnRydWUsXHJcbiAgICAgIHB3ZFR3aWNlOnRydWUsXHJcbiAgICAgIG5ld1B3ZDonJyxcclxuICAgICAgYWdhaW5Qd2Q6JycsXHJcbiAgICAgIHNob3dEaWZmZXJlbmNlOmZhbHNlXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNoYW5nZU5ld3B3ZChlKXtcclxuICAgICAgIHRoaXMubmV3UHdkID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZUFnYWlucHdkKGUpe1xyXG4gICAgICAgIHRoaXMuYWdhaW5Qd2QgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAvLyBpZih0aGlzLmFnYWluUHdkPT10aGlzLm5ld1B3ZCl7XHJcbiAgICAgICAgLy8gIHRoaXMuc2hvd0RpZmZlcmVuY2UgPSBmYWxzZTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgdGhpcy5zaG93RGlmZmVyZW5jZSA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VQd2RPbmNlKCl7XHJcbiAgICAgICAgICB0aGlzLnB3ZE9uY2UgPSAhICB0aGlzLnB3ZE9uY2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVB3ZFR3aWNlKCl7XHJcbiAgICAgICAgICB0aGlzLnB3ZFR3aWNlID0gISB0aGlzLnB3ZFR3aWNlO1xyXG4gICAgICB9LFxyXG4gICAgICB0b0NoYW5nZVB3ZCgpey8v5L+u5pS55a+G56CBXHJcbiAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICAgIGtleXR5cGU6XCIxXCIsXHJcbiAgICAgICAgICBvbGRfcGFzc3dvcmQ6dGhpcy5uZXdQd2QsXHJcbiAgICAgICAgICBuZXdfcGFzc3dvcmQ6dGhpcy5hZ2FpblB3ZFxyXG4gICAgICB9XHJcbiAgICAgICB1c2VyU2VydmljZS5jaGFuZ2VQd2QocGFyYW0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgICAgICBUaXBzLnN1Y2Nlc3MoJ+S/ruaUueaIkOWKnycpO1xyXG4gICAgICAgICAgICAvLyAgd2VweS5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnbWVtYmVyJylcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgVGlwcy5lcnJvcihyZXMuSGVhZC5tc2cpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgVGlwcy5lcnJvcihlcnIuSGVhZC5tc2cpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLkv67mlLnlr4bnoIHplJnor689PeOAi1wiLGVycilcclxuICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuIl19