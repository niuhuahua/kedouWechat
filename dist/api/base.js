'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Http = require('./../util/Http.js');

var _Http2 = _interopRequireDefault(_Http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base = function () {
  function base() {
    _classCallCheck(this, base);
  }

  _createClass(base, null, [{
    key: 'setToken',

    /**
       * 需要token
       */
    value: function setToken(param) {
      if (_wepy2.default.getStorageSync("user")) {
        Object.assign(param, { 'token': '' });
        param.token = JSON.parse(_wepy2.default.getStorageSync("user")).token;
      } else {
        console.log("获取用户token失败");
        return false;
      }
    }
  }, {
    key: 'setDeviceid',
    value: function setDeviceid(param) {
      if (wx.getStorageSync("openid")) {
        Object.assign(param, { 'deviceid': '' });
        param.deviceid = wx.getStorageSync("openid");
      } else {
        console.log("获取用户唯一设备id失败");
        return false;
      }
    }
  }]);

  return base;
}();

base.baseUrl = _wepy2.default.$instance.globalData.baseUrl;
base.get = _Http2.default.get.bind(_Http2.default);
base.getTwo = _Http2.default.getTwo.bind(_Http2.default);
base.put = _Http2.default.put.bind(_Http2.default);
base.post = _Http2.default.post.bind(_Http2.default);
base.delete = _Http2.default.delete.bind(_Http2.default);
exports.default = base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiYmFzZSIsInBhcmFtIiwiZ2V0U3RvcmFnZVN5bmMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b2tlbiIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsImRldmljZWlkIiwiYmFzZVVybCIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJnZXQiLCJiaW5kIiwiZ2V0VHdvIiwicHV0IiwicG9zdCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7O0FBT25COzs7NkJBR2tCQyxLLEVBQU07QUFDcEIsVUFBRyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQUgsRUFBK0I7QUFDM0JDLGVBQU9DLE1BQVAsQ0FBY0gsS0FBZCxFQUFvQixFQUFDLFNBQVEsRUFBVCxFQUFwQjtBQUNBQSxjQUFNSSxLQUFOLEdBQWNDLEtBQUtDLEtBQUwsQ0FBVyxlQUFLTCxjQUFMLENBQW9CLE1BQXBCLENBQVgsRUFBd0NHLEtBQXREO0FBQ0gsT0FIRCxNQUdLO0FBQ0RHLGdCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBLGVBQU8sS0FBUDtBQUNIO0FBQ0o7OztnQ0FDa0JSLEssRUFBTTtBQUNyQixVQUFHUyxHQUFHUixjQUFILENBQWtCLFFBQWxCLENBQUgsRUFBK0I7QUFDN0JDLGVBQU9DLE1BQVAsQ0FBY0gsS0FBZCxFQUFvQixFQUFDLFlBQVcsRUFBWixFQUFwQjtBQUNBQSxjQUFNVSxRQUFOLEdBQWlCRCxHQUFHUixjQUFILENBQWtCLFFBQWxCLENBQWpCO0FBQ0QsT0FIRCxNQUdLO0FBQ0hNLGdCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0o7Ozs7OztBQTNCa0JULEksQ0FDWlksTyxHQUFVLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkYsTztBQUR4QlosSSxDQUVaZSxHLEdBQU0sZUFBS0EsR0FBTCxDQUFTQyxJQUFULGdCO0FBRk1oQixJLENBR1ppQixNLEdBQVMsZUFBS0EsTUFBTCxDQUFZRCxJQUFaLGdCO0FBSEdoQixJLENBSVprQixHLEdBQU0sZUFBS0EsR0FBTCxDQUFTRixJQUFULGdCO0FBSk1oQixJLENBS1ptQixJLEdBQU8sZUFBS0EsSUFBTCxDQUFVSCxJQUFWLGdCO0FBTEtoQixJLENBTVpvQixNLEdBQVMsZUFBS0EsTUFBTCxDQUFZSixJQUFaLGdCO2tCQU5HaEIsSSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWwvSHR0cCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhc2Uge1xyXG4gIHN0YXRpYyBiYXNlVXJsID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5iYXNlVXJsO1xyXG4gIHN0YXRpYyBnZXQgPSBodHRwLmdldC5iaW5kKGh0dHApO1xyXG4gIHN0YXRpYyBnZXRUd28gPSBodHRwLmdldFR3by5iaW5kKGh0dHApO1xyXG4gIHN0YXRpYyBwdXQgPSBodHRwLnB1dC5iaW5kKGh0dHApO1xyXG4gIHN0YXRpYyBwb3N0ID0gaHR0cC5wb3N0LmJpbmQoaHR0cCk7XHJcbiAgc3RhdGljIGRlbGV0ZSA9IGh0dHAuZGVsZXRlLmJpbmQoaHR0cCk7XHJcbiAgLyoqXHJcbiAgICAgKiDpnIDopoF0b2tlblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0VG9rZW4ocGFyYW0pe1xyXG4gICAgICBpZih3ZXB5LmdldFN0b3JhZ2VTeW5jKFwidXNlclwiKSl7XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtLHsndG9rZW4nOicnfSlcclxuICAgICAgICAgIHBhcmFtLnRva2VuID0gSlNPTi5wYXJzZSh3ZXB5LmdldFN0b3JhZ2VTeW5jKFwidXNlclwiKSkudG9rZW47XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLojrflj5bnlKjmiLd0b2tlbuWksei0pVwiKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBzZXREZXZpY2VpZChwYXJhbSl7XHJcbiAgICAgIGlmKHd4LmdldFN0b3JhZ2VTeW5jKFwib3BlbmlkXCIpKXtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtLHsnZGV2aWNlaWQnOicnfSk7XHJcbiAgICAgICAgcGFyYW0uZGV2aWNlaWQgPSB3eC5nZXRTdG9yYWdlU3luYyhcIm9wZW5pZFwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLojrflj5bnlKjmiLfllK/kuIDorr7lpIdpZOWksei0pVwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gIH1cclxuIFxyXG4gIFxyXG59XHJcbiJdfQ==