'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 分页通用方法
*/
var pagination = function (_wepy$mixin) {
  _inherits(pagination, _wepy$mixin);

  function pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pagination.__proto__ || Object.getPrototypeOf(pagination)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _this.data = {
      isPageLoading: false,
      isPageEmpty: false,
      isPageReachBottom: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pagination, [{
    key: 'next',

    /**
     * 下一页
     */
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  // if (this.page.reachBottom) {
                  //   return;
                  // }
                  // this.isPageLoading = true;
                  // const param = this.params ? this.params() : {};
                  // await this.page.next(param);
                  // this.isPageReachBottom = this.page.reachBottom;
                  // this.isPageEmpty = this.page.list.length == 0;
                  // if (this.onPageLoad) {
                  //   this.onPageLoad();
                  // }
                } finally {
                  this.isPageLoading = false;
                  this.init = true;
                  this.$apply();
                  _Tips2.default.loaded();
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function next() {
        return _ref2.apply(this, arguments);
      }

      return next;
    }()

    /**
     * 到达底部
     */

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log("onReachBottom");
      // await this.next();
    }
  }, {
    key: 'onPullDownRefresh',


    /**
    下拉刷新
     */
    value: function onPullDownRefresh() {
      console.log("下拉刷新");
    }
    /**
     * 重新加载
     */

  }, {
    key: 'reload',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.page && this.page.reset)) {
                  _context2.next = 5;
                  break;
                }

                this.page.reset();
                _context2.next = 4;
                return this.next();

              case 4:
                _wepy2.default.stopPullDownRefresh();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reload() {
        return _ref3.apply(this, arguments);
      }

      return reload;
    }()

    /**
     * 下拉刷新
     */

  }, {
    key: 'onPullDownRefresh',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.reload();

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onPullDownRefresh() {
        return _ref4.apply(this, arguments);
      }

      return onPullDownRefresh;
    }()

    /**
     * 更新列表（外部事件）
     */

  }, {
    key: 'update',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.reload();

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update() {
        return _ref5.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return pagination;
}(_wepy2.default.mixin);

exports.default = pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsicGFnaW5hdGlvbiIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwiZGF0YSIsImlzUGFnZUxvYWRpbmciLCJpc1BhZ2VFbXB0eSIsImlzUGFnZVJlYWNoQm90dG9tIiwiaW5pdCIsIiRhcHBseSIsImxvYWRlZCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIiwicmVzZXQiLCJuZXh0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInJlbG9hZCIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTLEUsUUFDVEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEUsUUFDVEMsSSxHQUFPO0FBQ0xDLHFCQUFlLEtBRFY7QUFFTEMsbUJBQWEsS0FGUjtBQUdMQyx5QkFBbUI7QUFIZCxLOzs7Ozs7QUFLUDs7Ozs7Ozs7O0FBSUUsb0JBQUk7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsaUJBWkQsU0FZVTtBQUNSLHVCQUFLRixhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsdUJBQUtHLElBQUwsR0FBWSxJQUFaO0FBQ0EsdUJBQUtDLE1BQUw7QUFDQSxpQ0FBS0MsTUFBTDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdIOzs7Ozs7b0NBR2lCO0FBQ2ZDLGNBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7QUFDRDs7Ozs7QUFFRDs7O3dDQUdvQjtBQUNqQkQsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7c0JBSU0sS0FBS0MsSUFBTCxJQUFhLEtBQUtBLElBQUwsQ0FBVUMsSzs7Ozs7QUFDekIscUJBQUtELElBQUwsQ0FBVUMsS0FBVjs7dUJBQ00sS0FBS0MsSUFBTCxFOzs7QUFDTiwrQkFBS0MsbUJBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUo7Ozs7Ozs7Ozs7Ozs7dUJBSVEsS0FBS0MsTUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdSOzs7Ozs7Ozs7Ozs7O3VCQUlRLEtBQUtBLE1BQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRFOEIsZUFBS0MsSzs7a0JBQXhCbkIsVSIsImZpbGUiOiJwYWdpbmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IFRpcHMgZnJvbSAnLi4vdXRpbC9UaXBzLmpzJztcclxuXHJcbiAgLyoqXHJcbiAgICog5YiG6aG16YCa55So5pa55rOVXHJcbiAgKi9cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwYWdpbmF0aW9uIGV4dGVuZHMgd2VweS5taXhpbiB7XHJcbiAgICBjb25maWcgPSB7fTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuICAgIG1ldGhvZHMgPSB7fTtcclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgaXNQYWdlTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGlzUGFnZUVtcHR5OiBmYWxzZSxcclxuICAgICAgaXNQYWdlUmVhY2hCb3R0b206IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuIvkuIDpobVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgbmV4dCAoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGFnZS5yZWFjaEJvdHRvbSkge1xyXG4gICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmlzUGFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNvbnN0IHBhcmFtID0gdGhpcy5wYXJhbXMgPyB0aGlzLnBhcmFtcygpIDoge307XHJcbiAgICAgICAgLy8gYXdhaXQgdGhpcy5wYWdlLm5leHQocGFyYW0pO1xyXG4gICAgICAgIC8vIHRoaXMuaXNQYWdlUmVhY2hCb3R0b20gPSB0aGlzLnBhZ2UucmVhY2hCb3R0b207XHJcbiAgICAgICAgLy8gdGhpcy5pc1BhZ2VFbXB0eSA9IHRoaXMucGFnZS5saXN0Lmxlbmd0aCA9PSAwO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm9uUGFnZUxvYWQpIHtcclxuICAgICAgICAvLyAgIHRoaXMub25QYWdlTG9hZCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICB0aGlzLmlzUGFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgVGlwcy5sb2FkZWQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yiw6L6+5bqV6YOoXHJcbiAgICAgKi9cclxuICAgIG9uUmVhY2hCb3R0b20gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9uUmVhY2hCb3R0b21cIilcclxuICAgICAgLy8gYXdhaXQgdGhpcy5uZXh0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAg5LiL5ouJ5Yi35pawXHJcbiAgICAgKi9cclxuICAgICBvblB1bGxEb3duUmVmcmVzaCgpe1xyXG4gICAgICAgY29uc29sZS5sb2coXCLkuIvmi4nliLfmlrBcIilcclxuICAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmHjeaWsOWKoOi9vVxyXG4gICAgICovXHJcbiAgICAgYXN5bmMgcmVsb2FkICgpIHtcclxuICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UucmVzZXQpIHtcclxuICAgICAgICB0aGlzLnBhZ2UucmVzZXQoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLm5leHQoKTtcclxuICAgICAgICB3ZXB5LnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiL5ouJ5Yi35pawXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIG9uUHVsbERvd25SZWZyZXNoICgpIHtcclxuICAgICAgYXdhaXQgdGhpcy5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWIl+ihqO+8iOWklumDqOS6i+S7tu+8iVxyXG4gICAgICovXHJcbiAgICBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucmVsb2FkKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuIl19