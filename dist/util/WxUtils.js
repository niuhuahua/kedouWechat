'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tips = require('./Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxUtils = function () {
  function WxUtils() {
    _classCallCheck(this, WxUtils);
  }

  _createClass(WxUtils, null, [{
    key: 'backOrRedirect',

    /**
     * 如果能够后退（多层），则navigaetBack，否则调用redirectTo
     */
    value: function backOrRedirect(url) {
      var pages = getCurrentPages();
      // route在低版本不兼容
      var index = pages.findIndex(function (item) {
        return '/' + item.__route__ == url;
      });
      if (pages.length < 2 || index < 0) {
        wx.redirectTo({
          url: url
        });
      } else {
        var delta = pages.length - 1 - index;
        wx.navigateBack({
          delta: delta
        });
      }
    }
    /**
     * 如果能够后退（多层），则navigaetBack，否则调用navigateTo
     */

  }, {
    key: 'backOrNavigate',
    value: function backOrNavigate(url) {
      var pages = getCurrentPages();
      // route在低版本不兼容
      var index = pages.findIndex(function (item) {
        return '/' + item.__route__ == url;
      });
      if (pages.length < 2 || index < 0) {
        wx.navigateTo({
          url: url
        });
      } else {
        var delta = pages.length - 1 - index;
        wx.navigateBack({
          delta: delta
        });
      }
    }
  }, {
    key: 'wxPay',
    value: function wxPay(param) {
      return new Promise(function (resolve, reject) {
        wx.requestPayment(_extends({}, param, {
          complete: function complete(res) {
            if (res.errMsg == 'requestPayment:ok') {
              resolve(res);
            } else {
              reject(res);
            }
          }
        }));
      });
    }

    /**
     * 兼容性判断
     */

  }, {
    key: 'canIUse',
    value: function canIUse(str) {
      if (wx.canIUse) {
        return wx.canIUse(str);
      } else {
        return false;
      }
    }
    /**
     * 检查SDK版本
     */

  }, {
    key: 'isSDKExipred',
    value: function isSDKExipred() {
      var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
          SDKVersion = _wx$getSystemInfoSync.SDKVersion;

      console.info('[version]sdk ' + SDKVersion);
      return SDKVersion == null || SDKVersion < '1.2.0';
    }
    /**
     * 检查SDK版本
     */

  }, {
    key: 'checkSDK',
    value: function checkSDK() {
      if (this.isSDKExipred()) {
        _Tips2.default.modal('您的微信版本太低，为确保正常使用，请尽快升级');
      }
    }
  }]);

  return WxUtils;
}();

exports.default = WxUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIld4VXRpbHMuanMiXSwibmFtZXMiOlsiV3hVdGlscyIsInVybCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiX19yb3V0ZV9fIiwibGVuZ3RoIiwid3giLCJyZWRpcmVjdFRvIiwiZGVsdGEiLCJuYXZpZ2F0ZUJhY2siLCJuYXZpZ2F0ZVRvIiwicGFyYW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RQYXltZW50IiwiY29tcGxldGUiLCJyZXMiLCJlcnJNc2ciLCJzdHIiLCJjYW5JVXNlIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJTREtWZXJzaW9uIiwiY29uc29sZSIsImluZm8iLCJpc1NES0V4aXByZWQiLCJtb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7O0FBQ25COzs7bUNBR3NCQyxHLEVBQUs7QUFDekIsVUFBTUMsUUFBUUMsaUJBQWQ7QUFDQTtBQUNBLFVBQU1DLFFBQVFGLE1BQU1HLFNBQU4sQ0FBZ0I7QUFBQSxlQUFTLE1BQU1DLEtBQUtDLFNBQVosSUFBMEJOLEdBQWxDO0FBQUEsT0FBaEIsQ0FBZDtBQUNBLFVBQUlDLE1BQU1NLE1BQU4sR0FBZSxDQUFmLElBQW9CSixRQUFRLENBQWhDLEVBQW1DO0FBQ2pDSyxXQUFHQyxVQUFILENBQWM7QUFDWlQsZUFBS0E7QUFETyxTQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0wsWUFBTVUsUUFBUVQsTUFBTU0sTUFBTixHQUFlLENBQWYsR0FBbUJKLEtBQWpDO0FBQ0FLLFdBQUdHLFlBQUgsQ0FBZ0I7QUFDZEQsaUJBQU9BO0FBRE8sU0FBaEI7QUFHRDtBQUNGO0FBQ0Q7Ozs7OzttQ0FHc0JWLEcsRUFBSztBQUN6QixVQUFNQyxRQUFRQyxpQkFBZDtBQUNBO0FBQ0EsVUFBTUMsUUFBUUYsTUFBTUcsU0FBTixDQUFnQjtBQUFBLGVBQVMsTUFBTUMsS0FBS0MsU0FBWixJQUEwQk4sR0FBbEM7QUFBQSxPQUFoQixDQUFkO0FBQ0EsVUFBSUMsTUFBTU0sTUFBTixHQUFlLENBQWYsSUFBb0JKLFFBQVEsQ0FBaEMsRUFBbUM7QUFDakNLLFdBQUdJLFVBQUgsQ0FBYztBQUNaWixlQUFLQTtBQURPLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxZQUFNVSxRQUFRVCxNQUFNTSxNQUFOLEdBQWUsQ0FBZixHQUFtQkosS0FBakM7QUFDQUssV0FBR0csWUFBSCxDQUFnQjtBQUNkRCxpQkFBT0E7QUFETyxTQUFoQjtBQUdEO0FBQ0Y7OzswQkFFWUcsSyxFQUFPO0FBQ2xCLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1IsV0FBR1MsY0FBSCxjQUNLSixLQURMO0FBRUVLLG9CQUFVLHVCQUFPO0FBQ2YsZ0JBQUlDLElBQUlDLE1BQUosSUFBYyxtQkFBbEIsRUFBdUM7QUFDckNMLHNCQUFRSSxHQUFSO0FBQ0QsYUFGRCxNQUVPO0FBQ0xILHFCQUFPRyxHQUFQO0FBQ0Q7QUFDRjtBQVJIO0FBVUQsT0FYTSxDQUFQO0FBWUQ7O0FBRUQ7Ozs7Ozs0QkFHZUUsRyxFQUFLO0FBQ2xCLFVBQUliLEdBQUdjLE9BQVAsRUFBZ0I7QUFDZCxlQUFPZCxHQUFHYyxPQUFILENBQVdELEdBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRDs7Ozs7O21DQUdzQjtBQUFBLGtDQUNDYixHQUFHZSxpQkFBSCxFQUREO0FBQUEsVUFDYkMsVUFEYSx5QkFDYkEsVUFEYTs7QUFFcEJDLGNBQVFDLElBQVIsbUJBQTZCRixVQUE3QjtBQUNBLGFBQU9BLGNBQWMsSUFBZCxJQUFzQkEsYUFBYSxPQUExQztBQUNEO0FBQ0Q7Ozs7OzsrQkFHa0I7QUFDaEIsVUFBSSxLQUFLRyxZQUFMLEVBQUosRUFBeUI7QUFDdkIsdUJBQUtDLEtBQUwsQ0FBVyx3QkFBWDtBQUNEO0FBQ0Y7Ozs7OztrQkE5RWtCN0IsTyIsImZpbGUiOiJXeFV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpcHMgZnJvbSAnLi9UaXBzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFd4VXRpbHMge1xyXG4gIC8qKlxyXG4gICAqIOWmguaenOiDveWkn+WQjumAgO+8iOWkmuWxgu+8ie+8jOWImW5hdmlnYWV0QmFja++8jOWQpuWImeiwg+eUqHJlZGlyZWN0VG9cclxuICAgKi9cclxuICBzdGF0aWMgYmFja09yUmVkaXJlY3QodXJsKSB7XHJcbiAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgLy8gcm91dGXlnKjkvY7niYjmnKzkuI3lhbzlrrlcclxuICAgIGNvbnN0IGluZGV4ID0gcGFnZXMuZmluZEluZGV4KGl0ZW0gPT4gKCcvJyArIGl0ZW0uX19yb3V0ZV9fKSA9PSB1cmwpO1xyXG4gICAgaWYgKHBhZ2VzLmxlbmd0aCA8IDIgfHwgaW5kZXggPCAwKSB7XHJcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIHVybDogdXJsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGVsdGEgPSBwYWdlcy5sZW5ndGggLSAxIC0gaW5kZXg7XHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IGRlbHRhXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiDlpoLmnpzog73lpJ/lkI7pgIDvvIjlpJrlsYLvvInvvIzliJluYXZpZ2FldEJhY2vvvIzlkKbliJnosIPnlKhuYXZpZ2F0ZVRvXHJcbiAgICovXHJcbiAgc3RhdGljIGJhY2tPck5hdmlnYXRlKHVybCkge1xyXG4gICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgIC8vIHJvdXRl5Zyo5L2O54mI5pys5LiN5YW85a65XHJcbiAgICBjb25zdCBpbmRleCA9IHBhZ2VzLmZpbmRJbmRleChpdGVtID0+ICgnLycgKyBpdGVtLl9fcm91dGVfXykgPT0gdXJsKTtcclxuICAgIGlmIChwYWdlcy5sZW5ndGggPCAyIHx8IGluZGV4IDwgMCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IHVybFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRlbHRhID0gcGFnZXMubGVuZ3RoIC0gMSAtIGluZGV4O1xyXG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgIGRlbHRhOiBkZWx0YVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB3eFBheShwYXJhbSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3gucmVxdWVzdFBheW1lbnQoe1xyXG4gICAgICAgIC4uLnBhcmFtLFxyXG4gICAgICAgIGNvbXBsZXRlOiByZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5lcnJNc2cgPT0gJ3JlcXVlc3RQYXltZW50Om9rJykge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhbzlrrnmgKfliKTmlq1cclxuICAgKi9cclxuICBzdGF0aWMgY2FuSVVzZShzdHIpIHtcclxuICAgIGlmICh3eC5jYW5JVXNlKSB7XHJcbiAgICAgIHJldHVybiB3eC5jYW5JVXNlKHN0cik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOajgOafpVNES+eJiOacrFxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1NES0V4aXByZWQoKSB7XHJcbiAgICBjb25zdCB7U0RLVmVyc2lvbn0gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgY29uc29sZS5pbmZvKGBbdmVyc2lvbl1zZGsgJHtTREtWZXJzaW9ufWApO1xyXG4gICAgcmV0dXJuIFNES1ZlcnNpb24gPT0gbnVsbCB8fCBTREtWZXJzaW9uIDwgJzEuMi4wJ1xyXG4gIH1cclxuICAvKipcclxuICAgKiDmo4Dmn6VTREvniYjmnKxcclxuICAgKi9cclxuICBzdGF0aWMgY2hlY2tTREsoKSB7XHJcbiAgICBpZiAodGhpcy5pc1NES0V4aXByZWQoKSkge1xyXG4gICAgICBUaXBzLm1vZGFsKCfmgqjnmoTlvq7kv6HniYjmnKzlpKrkvY7vvIzkuLrnoa7kv53mraPluLjkvb/nlKjvvIzor7flsL3lv6vljYfnuqcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19