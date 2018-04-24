'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Http = require('./Http.js');

var _Http2 = _interopRequireDefault(_Http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var base = function base() {
  _classCallCheck(this, base);
};

base.baseUrl = '';
base.get = _Http2.default.get.bind(_Http2.default);
base.getTwo = _Http2.default.getTwo.bind(_Http2.default);
base.put = _Http2.default.put.bind(_Http2.default);
base.post = _Http2.default.post.bind(_Http2.default);
base.delete = _Http2.default.delete.bind(_Http2.default);
exports.default = base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiYmFzZSIsImJhc2VVcmwiLCJnZXQiLCJiaW5kIiwiZ2V0VHdvIiwicHV0IiwicG9zdCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxJOzs7O0FBQUFBLEksQ0FFWkMsTyxHQUFVLEU7QUFGRUQsSSxDQUdaRSxHLEdBQU0sZUFBS0EsR0FBTCxDQUFTQyxJQUFULGdCO0FBSE1ILEksQ0FJWkksTSxHQUFTLGVBQUtBLE1BQUwsQ0FBWUQsSUFBWixnQjtBQUpHSCxJLENBS1pLLEcsR0FBTSxlQUFLQSxHQUFMLENBQVNGLElBQVQsZ0I7QUFMTUgsSSxDQU1aTSxJLEdBQU8sZUFBS0EsSUFBTCxDQUFVSCxJQUFWLGdCO0FBTktILEksQ0FPWk8sTSxHQUFTLGVBQUtBLE1BQUwsQ0FBWUosSUFBWixnQjtrQkFQR0gsSSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBodHRwIGZyb20gJy4uL3V0aWwvSHR0cCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhc2Uge1xyXG4gIC8vIHN0YXRpYyBiYXNlVXJsID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5iYXNlVXJsO1xyXG4gIHN0YXRpYyBiYXNlVXJsID0gJyc7XHJcbiAgc3RhdGljIGdldCA9IGh0dHAuZ2V0LmJpbmQoaHR0cCk7XHJcbiAgc3RhdGljIGdldFR3byA9IGh0dHAuZ2V0VHdvLmJpbmQoaHR0cCk7XHJcbiAgc3RhdGljIHB1dCA9IGh0dHAucHV0LmJpbmQoaHR0cCk7XHJcbiAgc3RhdGljIHBvc3QgPSBodHRwLnBvc3QuYmluZChodHRwKTtcclxuICBzdGF0aWMgZGVsZXRlID0gaHR0cC5kZWxldGUuYmluZChodHRwKTtcclxufVxyXG4iXX0=