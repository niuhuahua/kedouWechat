'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addPandian = function (_wepy$page) {
    _inherits(addPandian, _wepy$page);

    function addPandian() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, addPandian);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = addPandian.__proto__ || Object.getPrototypeOf(addPandian)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            user: '',
            inventoryMsg: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(addPandian, [{
        key: 'onLoad',
        value: function onLoad() {
            var user = JSON.parse(wx.getStorageSync('user'));
            var inventoryMsg = JSON.parse(wx.getStorageSync('inventoryMsg'));
            this.user = user;
            this.inventoryMsg = inventoryMsg;
            console.log(inventoryMsg);
        }
    }]);

    return addPandian;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(addPandian , 'pages/wl/addPanProd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFBhblByb2QuanMiXSwibmFtZXMiOlsiYWRkUGFuZGlhbiIsImRhdGEiLCJ1c2VyIiwiaW52ZW50b3J5TXNnIiwiSlNPTiIsInBhcnNlIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEksR0FBTztBQUNIQyxrQkFBTSxFQURIO0FBRUhDLDBCQUFhO0FBRlYsUzs7Ozs7aUNBSUM7QUFDQSxnQkFBTUQsT0FBT0UsS0FBS0MsS0FBTCxDQUFXQyxHQUFHQyxjQUFILENBQWtCLE1BQWxCLENBQVgsQ0FBYjtBQUNBLGdCQUFNSixlQUFlQyxLQUFLQyxLQUFMLENBQVdDLEdBQUdDLGNBQUgsQ0FBa0IsY0FBbEIsQ0FBWCxDQUFyQjtBQUNBLGlCQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxpQkFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQUssb0JBQVFDLEdBQVIsQ0FBWU4sWUFBWjtBQUVQOzs7O0VBWnFDLGVBQUtPLEk7O2tCQUF4QlYsVSIsImZpbGUiOiJhZGRQYW5Qcm9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFkZFBhbmRpYW4gZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgZGF0YSA9IHtcclxuICAgICAgdXNlciA6JycsXHJcbiAgICAgIGludmVudG9yeU1zZzonJ1xyXG4gIH1cclxuICBvbkxvYWQoKXtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgID1KU09OLnBhcnNlKHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJykpO1xyXG4gICAgICAgICAgY29uc3QgaW52ZW50b3J5TXNnID0gSlNPTi5wYXJzZSh3eC5nZXRTdG9yYWdlU3luYygnaW52ZW50b3J5TXNnJykpXHJcbiAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgdGhpcy5pbnZlbnRvcnlNc2cgPSBpbnZlbnRvcnlNc2c7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnRvcnlNc2cpXHJcbiAgICAgICAgIFxyXG4gIH1cclxufVxyXG4iXX0=