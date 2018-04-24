'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base2 = require('./../base.js');

var _base3 = _interopRequireDefault(_base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userWl = function (_base) {
  _inherits(userWl, _base);

  function userWl() {
    _classCallCheck(this, userWl);

    return _possibleConstructorReturn(this, (userWl.__proto__ || Object.getPrototypeOf(userWl)).apply(this, arguments));
  }

  _createClass(userWl, null, [{
    key: 'userLogin',

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
                url = this.baseUrl + 'apiwl/userwl/user_login';
                param = {
                  user_mobile: userInfo.user_name,
                  user_pass: userInfo.user_pass,
                  // user_type:"1",
                  user_type: "2",
                  is_auto: '2'
                };

                this.setDeviceid(param);
                _context.next = 5;
                return this.get(url, param);

              case 5:
                return _context.abrupt('return', _context.sent);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function userLogin(_x) {
        return _ref.apply(this, arguments);
      }

      return userLogin;
    }()
    /**
     * 修改密码
     */

  }, {
    key: 'changePwd',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        var url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.baseUrl + 'apiwl/userwl/password_save';

                this.setDeviceid(params);
                this.setToken(params);
                _context2.next = 5;
                return this.get(url, params);

              case 5:
                return _context2.abrupt('return', _context2.sent);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function changePwd(_x2) {
        return _ref2.apply(this, arguments);
      }

      return changePwd;
    }()
    /**
     * 用户退出
     */

  }, {
    key: 'toLoginOut',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var url, param;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.baseUrl + 'apiwl/userwl/user_logout';
                param = {};

                this.setDeviceid(param);
                this.setToken(param);
                _context3.next = 6;
                return this.get(url, param);

              case 6:
                return _context3.abrupt('return', _context3.sent);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function toLoginOut() {
        return _ref3.apply(this, arguments);
      }

      return toLoginOut;
    }()
  }]);

  return userWl;
}(_base3.default);

exports.default = userWl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsidXNlcldsIiwidXNlckluZm8iLCJ1cmwiLCJiYXNlVXJsIiwicGFyYW0iLCJ1c2VyX21vYmlsZSIsInVzZXJfbmFtZSIsInVzZXJfcGFzcyIsInVzZXJfdHlwZSIsImlzX2F1dG8iLCJzZXREZXZpY2VpZCIsImdldCIsInBhcmFtcyIsInNldFRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNzQkEsTTs7Ozs7Ozs7Ozs7O0FBQ3BCOzs7OzBGQUd1QkMsUTs7Ozs7O0FBQ2ZDLG1CLEdBQVEsS0FBS0MsTztBQUNiQyxxQixHQUFRO0FBQ1ZDLCtCQUFZSixTQUFTSyxTQURYO0FBRVZDLDZCQUFVTixTQUFTTSxTQUZUO0FBR1Y7QUFDQUMsNkJBQVUsR0FKQTtBQUtWQywyQkFBUTtBQUxFLGlCOztBQU9kLHFCQUFLQyxXQUFMLENBQWlCTixLQUFqQjs7dUJBQ2EsS0FBS08sR0FBTCxDQUFTVCxHQUFULEVBQWFFLEtBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmOzs7Ozs7OzRGQUd1QlEsTTs7Ozs7O0FBQ2hCVixtQixHQUFTLEtBQUtDLE87O0FBQ3BCLHFCQUFLTyxXQUFMLENBQWlCRSxNQUFqQjtBQUNBLHFCQUFLQyxRQUFMLENBQWNELE1BQWQ7O3VCQUNhLEtBQUtELEdBQUwsQ0FBU1QsR0FBVCxFQUFhVSxNQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEI7Ozs7Ozs7Ozs7Ozs7QUFJT1YsbUIsR0FBUyxLQUFLQyxPO0FBQ2RDLHFCLEdBQVEsRTs7QUFDZCxxQkFBS00sV0FBTCxDQUFpQk4sS0FBakI7QUFDQSxxQkFBS1MsUUFBTCxDQUFjVCxLQUFkOzt1QkFDYSxLQUFLTyxHQUFMLENBQVNULEdBQVQsRUFBYUUsS0FBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBakNRSixNIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGJhc2UgZnJvbSAgJy4uL2Jhc2UnXHJcbmV4cG9ydCBkZWZhdWx0ICBjbGFzcyB1c2VyV2wgZXh0ZW5kcyBiYXNle1xyXG4gIC8qKlxyXG4gICAqIOeZu+W9lVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhc3luYyB1c2VyTG9naW4odXNlckluZm8pe1xyXG4gICAgY29uc3QgdXJsID1gJHt0aGlzLmJhc2VVcmx9YXBpd2wvdXNlcndsL3VzZXJfbG9naW5gXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgICB1c2VyX21vYmlsZTp1c2VySW5mby51c2VyX25hbWUsXHJcbiAgICAgICAgdXNlcl9wYXNzOnVzZXJJbmZvLnVzZXJfcGFzcyxcclxuICAgICAgICAvLyB1c2VyX3R5cGU6XCIxXCIsXHJcbiAgICAgICAgdXNlcl90eXBlOlwiMlwiLFxyXG4gICAgICAgIGlzX2F1dG86JzInXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERldmljZWlkKHBhcmFtKSBcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldCh1cmwscGFyYW0pOyBcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5L+u5pS55a+G56CBXHJcbiAgICovXHJcbiAgc3RhdGljIGFzeW5jIGNoYW5nZVB3ZChwYXJhbXMpe1xyXG4gICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvdXNlcndsL3Bhc3N3b3JkX3NhdmVgO1xyXG4gICB0aGlzLnNldERldmljZWlkKHBhcmFtcyk7XHJcbiAgIHRoaXMuc2V0VG9rZW4ocGFyYW1zKTtcclxuICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybCxwYXJhbXMpO1xyXG4gIH1cclxuLyoqXHJcbiAqIOeUqOaIt+mAgOWHulxyXG4gKi9cclxuIHN0YXRpYyBhc3luYyB0b0xvZ2luT3V0KCl7XHJcbiBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9YXBpd2wvdXNlcndsL3VzZXJfbG9nb3V0YDtcclxuIGNvbnN0IHBhcmFtID0ge307XHJcbiB0aGlzLnNldERldmljZWlkKHBhcmFtKTtcclxuIHRoaXMuc2V0VG9rZW4ocGFyYW0pO1xyXG4gcmV0dXJuIGF3YWl0IHRoaXMuZ2V0KHVybCxwYXJhbSk7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59Il19