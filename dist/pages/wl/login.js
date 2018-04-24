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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WlLogin = function (_wepy$page) {
    _inherits(WlLogin, _wepy$page);

    function WlLogin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WlLogin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WlLogin.__proto__ || Object.getPrototypeOf(WlLogin)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '登录'
        }, _this.data = {
            user_name: '',
            user_pass: '',
            pwdClose: true,
            remeMe: false
        }, _this.methods = {
            changePhone: function changePhone(e) {
                this.user_name = e.detail.value;
            },
            changePwd: function changePwd(e) {
                this.user_pass = e.detail.value;
            },
            pwdClose: function pwdClose() {
                this.pwdClose = !this.pwdClose;
            },
            toLogin: function toLogin() {
                var _t = this;
                var userInfo = {
                    user_name: this.user_name,
                    user_pass: this.user_pass
                };
                _user2.default.userLogin(userInfo).then(function (res) {
                    if (res.Head.code == "S0000") {
                        wx.setStorageSync('user', JSON.stringify(res.Body[0]));
                        _t.$navigate('changeType');
                    } else {
                        _Tips2.default.error('输入错误');
                        return false;
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            },
            changeReMe: function changeReMe() {
                this.remeMe = !this.remeMe;
                if (this.remeMe) {
                    wx.setStorageSync('userName', this.user_name);
                } else {
                    wx.setStorageSync('userName', '');
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WlLogin, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var user, userName;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                try {
                                    user = wx.getStorageSync('user');
                                    userName = wx.getStorageSync('userName');

                                    if (userName) {
                                        this.user_name = userName;
                                        this.remeMe = true;
                                    }
                                    //  if(user){
                                    //    this.$navigate('pMember') ;
                                    //  }else{
                                    wx.login({
                                        success: function success(res) {
                                            if (res.code) {
                                                var url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx6b62993f66b58177&secret=900a8d51b9c64b2f98f7302f0431281a&js_code=" + res.code + "&grant_type=authorization_code";
                                                // console.log(url)
                                                wx.request({
                                                    url: url,
                                                    method: 'GET',
                                                    success: function success(res) {
                                                        wx.setStorageSync("session_key", res.data.session_key);
                                                        wx.setStorageSync("openid", res.data.openid);
                                                        //    let poenid =  wx.getStorageSync("openid");
                                                        //    console.log(poenid)
                                                    },
                                                    fail: function fail() {
                                                        console.log("fail");
                                                    }
                                                });
                                            } else {
                                                console.log('获取用户登录态失败！' + res.errMsg);
                                            }
                                        }
                                    });
                                    // }
                                } catch (error) {
                                    console.log(error);
                                }

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return WlLogin;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WlLogin , 'pages/wl/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIldsTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVzZXJfbmFtZSIsInVzZXJfcGFzcyIsInB3ZENsb3NlIiwicmVtZU1lIiwibWV0aG9kcyIsImNoYW5nZVBob25lIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY2hhbmdlUHdkIiwidG9Mb2dpbiIsIl90IiwidXNlckluZm8iLCJ1c2VyTG9naW4iLCJ0aGVuIiwicmVzIiwiSGVhZCIsImNvZGUiLCJ3eCIsInNldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsIkJvZHkiLCIkbmF2aWdhdGUiLCJlcnJvciIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVyciIsImNoYW5nZVJlTWUiLCJ1c2VyIiwiZ2V0U3RvcmFnZVN5bmMiLCJ1c2VyTmFtZSIsImxvZ2luIiwic3VjY2VzcyIsInVybCIsInJlcXVlc3QiLCJtZXRob2QiLCJzZXNzaW9uX2tleSIsIm9wZW5pZCIsImZhaWwiLCJlcnJNc2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDaEJDLE0sR0FBUztBQUNSQyxvQ0FBd0I7QUFEaEIsUyxRQUdWQyxJLEdBQU87QUFDSEMsdUJBQVUsRUFEUDtBQUVIQyx1QkFBVSxFQUZQO0FBR0hDLHNCQUFTLElBSE47QUFJSEMsb0JBQU87QUFKSixTLFFBTVBDLE8sR0FBVTtBQUNKQyx1QkFESSx1QkFDUUMsQ0FEUixFQUNVO0FBQ2IscUJBQUtOLFNBQUwsR0FBaUJNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBMUI7QUFDRixhQUhLO0FBSUxDLHFCQUpLLHFCQUlLSCxDQUpMLEVBSU87QUFDVixxQkFBS0wsU0FBTCxHQUFpQkssRUFBRUMsTUFBRixDQUFTQyxLQUExQjtBQUNELGFBTkk7QUFPTE4sb0JBUEssc0JBT0s7QUFDTixxQkFBS0EsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCO0FBQ0gsYUFUSTtBQVVMUSxtQkFWSyxxQkFVSTtBQUNMLG9CQUFJQyxLQUFLLElBQVQ7QUFDQSxvQkFBSUMsV0FBVztBQUNaWiwrQkFBVSxLQUFLQSxTQURIO0FBRVpDLCtCQUFXLEtBQUtBO0FBRkosaUJBQWY7QUFJQSwrQkFBWVksU0FBWixDQUFzQkQsUUFBdEIsRUFBZ0NFLElBQWhDLENBQXFDLGVBQUs7QUFDMUMsd0JBQUdDLElBQUlDLElBQUosQ0FBU0MsSUFBVCxJQUFlLE9BQWxCLEVBQTBCO0FBQ3RCQywyQkFBR0MsY0FBSCxDQUFrQixNQUFsQixFQUEwQkMsS0FBS0MsU0FBTCxDQUFlTixJQUFJTyxJQUFKLENBQVMsQ0FBVCxDQUFmLENBQTFCO0FBQ0RYLDJCQUFHWSxTQUFILENBQWEsWUFBYjtBQUNGLHFCQUhELE1BR0s7QUFDRCx1Q0FBS0MsS0FBTCxDQUFXLE1BQVg7QUFDQSwrQkFBTyxLQUFQO0FBQ0g7QUFDQSxpQkFSRCxFQVFHQyxLQVJILENBUVMsZUFBSztBQUNYQyw0QkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0YsaUJBVkQ7QUFXSCxhQTNCSTtBQTRCTEMsc0JBNUJLLHdCQTRCTztBQUNSLHFCQUFLMUIsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDQSxvQkFBRyxLQUFLQSxNQUFSLEVBQWU7QUFDYmUsdUJBQUdDLGNBQUgsQ0FBa0IsVUFBbEIsRUFBOEIsS0FBS25CLFNBQW5DO0FBQ0QsaUJBRkQsTUFFSztBQUNBa0IsdUJBQUdDLGNBQUgsQ0FBa0IsVUFBbEIsRUFBOEIsRUFBOUI7QUFDSjtBQUNKO0FBbkNJLFM7Ozs7Ozs7Ozs7OztBQXNDUCxvQ0FBSTtBQUNHVyx3Q0FESCxHQUNXWixHQUFHYSxjQUFILENBQWtCLE1BQWxCLENBRFg7QUFFR0MsNENBRkgsR0FFY2QsR0FBR2EsY0FBSCxDQUFrQixVQUFsQixDQUZkOztBQUdELHdDQUFHQyxRQUFILEVBQVk7QUFDWCw2Q0FBS2hDLFNBQUwsR0FBaUJnQyxRQUFqQjtBQUNBLDZDQUFLN0IsTUFBTCxHQUFjLElBQWQ7QUFDQTtBQUNIO0FBQ0E7QUFDQTtBQUNHZSx1Q0FBR2UsS0FBSCxDQUFTO0FBQ1JDLGlEQUFTLGlCQUFTbkIsR0FBVCxFQUFjO0FBQ3RCLGdEQUFJQSxJQUFJRSxJQUFSLEVBQWM7QUFDWCxvREFBSWtCLE1BQU0sMkhBQXlIcEIsSUFBSUUsSUFBN0gsR0FBa0ksZ0NBQTVJO0FBQ0E7QUFDQUMsbURBQUdrQixPQUFILENBQVc7QUFDUEQseURBQUtBLEdBREU7QUFFUEUsNERBQVEsS0FGRDtBQUdQSCw2REFBUyxpQkFBU25CLEdBQVQsRUFBYTtBQUNsQkcsMkRBQUdDLGNBQUgsQ0FBa0IsYUFBbEIsRUFBZ0NKLElBQUloQixJQUFKLENBQVN1QyxXQUF6QztBQUNBcEIsMkRBQUdDLGNBQUgsQ0FBa0IsUUFBbEIsRUFBMkJKLElBQUloQixJQUFKLENBQVN3QyxNQUFwQztBQUNKO0FBQ0E7QUFDQyxxREFSTTtBQVNQQywwREFBTSxnQkFBVztBQUNiZCxnRUFBUUMsR0FBUixDQUFZLE1BQVo7QUFDSDtBQVhNLGlEQUFYO0FBYUQsNkNBaEJGLE1BZ0JRO0FBQ0xELHdEQUFRQyxHQUFSLENBQVksZUFBZVosSUFBSTBCLE1BQS9CO0FBQ0Y7QUFDUDtBQXJCYSxxQ0FBVDtBQXVCUDtBQUNJLGlDQWxDRCxDQWtDRSxPQUFPakIsS0FBUCxFQUFjO0FBQ1pFLDRDQUFRQyxHQUFSLENBQVlILEtBQVo7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBGNkIsZUFBS2tCLEk7O2tCQUFyQjlDLE8iLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi4vLi4vdXRpbC9UaXBzLmpzJ1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi4vLi4vYXBpL3dsL3VzZXIuanMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdsTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lSdcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHVzZXJfbmFtZTonJyxcclxuICAgICAgICB1c2VyX3Bhc3M6JycsXHJcbiAgICAgICAgcHdkQ2xvc2U6dHJ1ZSxcclxuICAgICAgICByZW1lTWU6ZmFsc2VcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICBjaGFuZ2VQaG9uZShlKXtcclxuICAgICAgICAgICB0aGlzLnVzZXJfbmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIGNoYW5nZVB3ZChlKXtcclxuICAgICAgICAgICB0aGlzLnVzZXJfcGFzcyA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBwd2RDbG9zZSgpe1xyXG4gICAgICAgICAgICAgdGhpcy5wd2RDbG9zZSA9ICF0aGlzLnB3ZENsb3NlO1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICB0b0xvZ2luKCl7XHJcbiAgICAgICAgICAgICBsZXQgX3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgdXNlcl9uYW1lOnRoaXMudXNlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9wYXNzIDp0aGlzLnVzZXJfcGFzc1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgdXNlclNlcnZpY2UudXNlckxvZ2luKHVzZXJJbmZvKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy5Cb2R5WzBdKSk7XHJcbiAgICAgICAgICAgICAgICBfdC4kbmF2aWdhdGUoJ2NoYW5nZVR5cGUnKSBcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIFRpcHMuZXJyb3IoJ+i+k+WFpemUmeivrycpXHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBjaGFuZ2VSZU1lKCl7XHJcbiAgICAgICAgICAgICB0aGlzLnJlbWVNZSA9ICF0aGlzLnJlbWVNZTtcclxuICAgICAgICAgICAgIGlmKHRoaXMucmVtZU1lKXtcclxuICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJOYW1lJywgdGhpcy51c2VyX25hbWUpXHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJOYW1lJywgJycpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgYXN5bmMgb25Mb2FkICgpIHtcclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgdXNlciA9ICB3eC5nZXRTdG9yYWdlU3luYygndXNlcicpO1xyXG4gICAgICAgICAgbGV0IHVzZXJOYW1lID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJOYW1lJyk7XHJcbiAgICAgICAgICBpZih1c2VyTmFtZSl7XHJcbiAgICAgICAgICAgdGhpcy51c2VyX25hbWUgPSB1c2VyTmFtZTtcclxuICAgICAgICAgICB0aGlzLnJlbWVNZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLy8gIGlmKHVzZXIpe1xyXG4gICAgICAgIC8vICAgIHRoaXMuJG5hdmlnYXRlKCdwTWVtYmVyJykgO1xyXG4gICAgICAgIC8vICB9ZWxzZXtcclxuICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbj9hcHBpZD13eDZiNjI5OTNmNjZiNTgxNzcmc2VjcmV0PTkwMGE4ZDUxYjljNjRiMmY5OGY3MzAyZjA0MzEyODFhJmpzX2NvZGU9XCIrcmVzLmNvZGUrXCImZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGVcIjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJzZXNzaW9uX2tleVwiLHJlcy5kYXRhLnNlc3Npb25fa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcIm9wZW5pZFwiLHJlcy5kYXRhLm9wZW5pZClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBsZXQgcG9lbmlkID0gIHd4LmdldFN0b3JhZ2VTeW5jKFwib3BlbmlkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHBvZW5pZClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgIH1cclxuICAgfVxyXG59XHJcbiJdfQ==