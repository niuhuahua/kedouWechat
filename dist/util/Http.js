'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = getApp();

// HTTP工具类

var http = function () {
  function http() {
    _classCallCheck(this, http);
  }

  _createClass(http, null, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, data) {
        var baseData, param, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                baseData = { 'Tadpole': { "Tadpole": { "Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": {} } } };

                Object.assign(baseData['Tadpole']["Tadpole"]["Body"], data);

                param = {
                  url: url,
                  method: method,
                  data: baseData
                };

                _Tips2.default.loading();
                _context.next = 6;
                return _wepy2.default.request(param);

              case 6:
                res = _context.sent;

                if (!this.isSuccess(res)) {
                  _context.next = 12;
                  break;
                }

                if (res.data.Tadpole.Head.code == "E0020") {
                  wx.navigateTo({
                    url: 'login',
                    success: function success(res) {
                      wx.removeStorageSync('user');
                    },
                    fail: function fail() {
                      // fail
                    },
                    complete: function complete() {
                      // complete
                    }
                  });
                }
                return _context.abrupt('return', res.data.Tadpole);

              case 12:
                console.error(method, url, data, res);
                throw this.requestException(res);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'requestTwo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(method, url, data) {
        var baseData, param, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                baseData = { 'Tadpole': { "Tadpole": { "Head": { "channel": "01", "version": "1.0.0", "service": "dataQuery" }, "Body": {} } } };

                Object.assign(baseData['Tadpole']["Tadpole"]["Body"], data);

                param = {
                  url: url,
                  method: method,
                  data: baseData
                };

                _Tips2.default.loading();
                _context2.next = 6;
                return _wepy2.default.request(param);

              case 6:
                res = _context2.sent;

                if (!this.isSuccess(res)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt('return', res);

              case 11:
                console.error(method, url, data, res);
                throw this.requestException(res);

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestTwo(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return requestTwo;
    }()

    /**
     * 判断请求是否成功
     */

  }, {
    key: 'isSuccess',
    value: function isSuccess(res) {
      var wxCode = res.statusCode;
      // 微信请求错误
      if (wxCode !== 200) {
        return false;
      }
      var wxData = res.data;
      return wxData;
    }

    /**
     * 异常
     */

  }, {
    key: 'requestException',
    value: function requestException(res) {
      var error = {};
      error.statusCode = res.statusCode;
      var wxData = res.data;
      var serverData = wxData.data;
      if (serverData) {
        error.serverCode = wxData.code;
        error.message = serverData.message;
        error.serverData = serverData;
      }

      return error;
    }
  }, {
    key: 'get',
    value: function get(url, data) {
      return this.request('GET', url, data);
    }
  }, {
    key: 'getTwo',
    value: function getTwo(url, data) {
      return this.requestTwo('GET', url, data);
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      return this.request('PUT', url, data);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return this.request('POST', url, data);
    }
  }, {
    key: 'patch',
    value: function patch(url, data) {
      return this.request('PATCH', url, data);
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      return this.request('DELETE', url, data);
    }
  }]);

  return http;
}();

exports.default = http;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkh0dHAuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXBwIiwiaHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJiYXNlRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInBhcmFtIiwibG9hZGluZyIsInJlcXVlc3QiLCJyZXMiLCJpc1N1Y2Nlc3MiLCJUYWRwb2xlIiwiSGVhZCIsImNvZGUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJzdWNjZXNzIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJmYWlsIiwiY29tcGxldGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXF1ZXN0RXhjZXB0aW9uIiwid3hDb2RlIiwic3RhdHVzQ29kZSIsInd4RGF0YSIsInNlcnZlckRhdGEiLCJzZXJ2ZXJDb2RlIiwibWVzc2FnZSIsInJlcXVlc3RUd28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxNQUFNQyxRQUFaOztBQUVBOztJQUNxQkMsSTs7Ozs7Ozs7MEZBQ0dDLE0sRUFBUUMsRyxFQUFLQyxJOzs7Ozs7QUFDN0JDLHdCLEdBQVcsRUFBQyxXQUFVLEVBQUMsV0FBVSxFQUFDLFFBQVEsRUFBRSxXQUFXLElBQWIsRUFBbUIsV0FBVyxPQUE5QixFQUF1QyxXQUFXLFdBQWxELEVBQVQsRUFBMEUsUUFBUSxFQUFsRixFQUFYLEVBQVgsRTs7QUFDZkMsdUJBQU9DLE1BQVAsQ0FBY0YsU0FBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLE1BQS9CLENBQWQsRUFBcURELElBQXJEOztBQUVNSSxxQixHQUFRO0FBQ1pMLHVCQUFLQSxHQURPO0FBRVpELDBCQUFRQSxNQUZJO0FBR1pFLHdCQUFNQztBQUhNLGlCOztBQUtkLCtCQUFLSSxPQUFMOzt1QkFDa0IsZUFBS0MsT0FBTCxDQUFhRixLQUFiLEM7OztBQUFaRyxtQjs7cUJBQ0YsS0FBS0MsU0FBTCxDQUFlRCxHQUFmLEM7Ozs7O0FBQ0Ysb0JBQUdBLElBQUlQLElBQUosQ0FBU1MsT0FBVCxDQUFp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RUFBc0JQLEdBQXRCLEVBQTJCQyxJQUEzQixDQUFQO0FBQ0Q7Ozs0QkFFY0QsRyxFQUFLQyxJLEVBQU07QUFDeEIsYUFBTyxLQUFLTSxPQUFMLENBQWEsUUFBYixFQUF1QlAsR0FBdkIsRUFBNEJDLElBQTVCLENBQVA7QUFDRDs7Ozs7O2tCQXhHa0JILEkiLCJmaWxlIjoiSHR0cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBUaXBzIGZyb20gJy4vVGlwcyc7XHJcbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cclxuLy8gSFRUUOW3peWFt+exu1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBodHRwIHtcclxuICBzdGF0aWMgYXN5bmMgcmVxdWVzdCAobWV0aG9kLCB1cmwsIGRhdGEpIHtcclxuICAgIGxldCBiYXNlRGF0YSA9IHsnVGFkcG9sZSc6e1wiVGFkcG9sZVwiOntcIkhlYWRcIjogeyBcImNoYW5uZWxcIjogXCIwMVwiLCBcInZlcnNpb25cIjogXCIxLjAuMFwiLCBcInNlcnZpY2VcIjogXCJkYXRhUXVlcnlcIiB9LCBcIkJvZHlcIjogeyB9fX0gfTtcclxuICAgIE9iamVjdC5hc3NpZ24oYmFzZURhdGFbJ1RhZHBvbGUnXVtcIlRhZHBvbGVcIl1bXCJCb2R5XCJdLGRhdGEpXHJcbiBcclxuICAgIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgIGRhdGE6IGJhc2VEYXRhXHJcbiAgICB9O1xyXG4gICAgVGlwcy5sb2FkaW5nKCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3QocGFyYW0pO1xyXG4gICAgaWYgKHRoaXMuaXNTdWNjZXNzKHJlcykpIHtcclxuICAgICAgaWYocmVzLmRhdGEuVGFkcG9sZS5IZWFkLmNvZGU9PVwiRTAwMjBcIil7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdsb2dpbicsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCd1c2VyJylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gZmFpbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gY29tcGxldGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSAgXHJcbiAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmRhdGEuVGFkcG9sZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKG1ldGhvZCwgdXJsLCBkYXRhLCByZXMpO1xyXG4gICAgICB0aHJvdyB0aGlzLnJlcXVlc3RFeGNlcHRpb24ocmVzKTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGFzeW5jIHJlcXVlc3RUd28gKG1ldGhvZCwgdXJsLCBkYXRhKSB7XHJcbiAgICBsZXQgYmFzZURhdGEgPSB7J1RhZHBvbGUnOntcIlRhZHBvbGVcIjp7XCJIZWFkXCI6IHsgXCJjaGFubmVsXCI6IFwiMDFcIiwgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIiwgXCJzZXJ2aWNlXCI6IFwiZGF0YVF1ZXJ5XCIgfSwgXCJCb2R5XCI6IHsgfX19IH07XHJcbiAgICBPYmplY3QuYXNzaWduKGJhc2VEYXRhWydUYWRwb2xlJ11bXCJUYWRwb2xlXCJdW1wiQm9keVwiXSxkYXRhKVxyXG4gXHJcbiAgICBjb25zdCBwYXJhbSA9IHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICBkYXRhOiBiYXNlRGF0YVxyXG4gICAgfTtcclxuICAgIFRpcHMubG9hZGluZygpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHBhcmFtKTtcclxuICAgIGlmICh0aGlzLmlzU3VjY2VzcyhyZXMpKSB7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKG1ldGhvZCwgdXJsLCBkYXRhLCByZXMpO1xyXG4gICAgICB0aHJvdyB0aGlzLnJlcXVlc3RFeGNlcHRpb24ocmVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreivt+axguaYr+WQpuaIkOWKn1xyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1N1Y2Nlc3MocmVzKSB7XHJcbiAgICBjb25zdCB3eENvZGUgPSByZXMuc3RhdHVzQ29kZTtcclxuICAgIC8vIOW+ruS/oeivt+axgumUmeivr1xyXG4gICAgaWYgKHd4Q29kZSAhPT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHd4RGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgcmV0dXJuIHd4RGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOW8guW4uFxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1ZXN0RXhjZXB0aW9uKHJlcykge1xyXG4gICAgY29uc3QgZXJyb3IgPSB7fTtcclxuICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcclxuICAgIGNvbnN0IHd4RGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgY29uc3Qgc2VydmVyRGF0YSA9IHd4RGF0YS5kYXRhO1xyXG4gICAgaWYgKHNlcnZlckRhdGEpIHtcclxuICAgICAgZXJyb3Iuc2VydmVyQ29kZSA9IHd4RGF0YS5jb2RlO1xyXG4gICAgICBlcnJvci5tZXNzYWdlID0gc2VydmVyRGF0YS5tZXNzYWdlO1xyXG4gICAgICBlcnJvci5zZXJ2ZXJEYXRhID0gc2VydmVyRGF0YTtcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0ICh1cmwsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSlcclxuICB9XHJcbiAgc3RhdGljIGdldFR3byAodXJsLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0VHdvKCdHRVQnLCB1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcHV0ICh1cmwsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwb3N0ICh1cmwsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGF0Y2ggKHVybCwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUEFUQ0gnLCB1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVsZXRlICh1cmwsIGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwgZGF0YSlcclxuICB9XHJcbn1cclxuIl19