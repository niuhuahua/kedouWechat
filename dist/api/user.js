'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base2 = require('./base.js');

var _base3 = _interopRequireDefault(_base2);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var user = function (_base) {
    _inherits(user, _base);

    function user() {
        _classCallCheck(this, user);

        return _possibleConstructorReturn(this, (user.__proto__ || Object.getPrototypeOf(user)).apply(this, arguments));
    }

    _createClass(user, null, [{
        key: 'toLogin',

        /**
         * 登录
         */

        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userInfo) {
                var url, param;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                url = this.baseUrl + '/user1000/user_login';
                                param = {
                                    user_mobile: userInfo.user_mobile,
                                    user_pass: userInfo.user_pass
                                };
                                _context.next = 4;
                                return this.get(url, param);

                            case 4:
                                return _context.abrupt('return', _context.sent);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function toLogin(_x) {
                return _ref.apply(this, arguments);
            }

            return toLogin;
        }()
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var url, param;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                url = this.baseUrl + '/user1000/user_get';
                                param = {};

                                this.setToken(param);
                                _context2.next = 5;
                                return this.get(url, param);

                            case 5:
                                return _context2.abrupt('return', _context2.sent);

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return user;
}(_base3.default);

exports.default = user;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlciIsInVzZXJJbmZvIiwidXJsIiwiYmFzZVVybCIsInBhcmFtIiwidXNlcl9tb2JpbGUiLCJ1c2VyX3Bhc3MiLCJnZXQiLCJzZXRUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7Z0dBSXFCQyxROzs7Ozs7QUFDWEMsbUMsR0FBUyxLQUFLQyxPO0FBQ2RDLHFDLEdBQVE7QUFDVkMsaURBQVlKLFNBQVNJLFdBRFg7QUFFVkMsK0NBQVVMLFNBQVNLO0FBRlQsaUM7O3VDQUlELEtBQUtDLEdBQUwsQ0FBU0wsR0FBVCxFQUFhRSxLQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUEYsbUMsR0FBUyxLQUFLQyxPO0FBQ2RDLHFDLEdBQVEsRTs7QUFDZCxxQ0FBS0ksUUFBTCxDQUFjSixLQUFkOzt1Q0FDYSxLQUFLRyxHQUFMLENBQVNMLEdBQVQsRUFBYUUsS0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBbEJBSixJIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UnXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB1c2VyIGV4dGVuZHMgYmFzZXtcclxuICAgIC8qKlxyXG4gICAgICog55m75b2VXHJcbiAgICAgKi9cclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIHRvTG9naW4odXNlckluZm8pe1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vdXNlcjEwMDAvdXNlcl9sb2dpbmBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICAgICAgdXNlcl9tb2JpbGU6dXNlckluZm8udXNlcl9tb2JpbGUsXHJcbiAgICAgICAgICAgIHVzZXJfcGFzczp1c2VySW5mby51c2VyX3Bhc3NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS91c2VyMTAwMC91c2VyX2dldGBcclxuICAgICAgICBjb25zdCBwYXJhbSA9IHsgfVxyXG4gICAgICAgIHRoaXMuc2V0VG9rZW4ocGFyYW0pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwscGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBcclxufSJdfQ==