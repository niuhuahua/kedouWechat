'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var peiPro = function (_wepy$component) {
  _inherits(peiPro, _wepy$component);

  function peiPro() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, peiPro);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = peiPro.__proto__ || Object.getPrototypeOf(peiPro)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      peiPro: [],
      showIS: [],
      indexPro: []
    }, _this.data = {}, _this.methods = {
      showThis: function showThis(orderId) {
        //   this.showOther = orderId;
      },
      closeShow: function closeShow() {
        this.showOther = '';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return peiPro;
}(_wepy2.default.component);

exports.default = peiPro;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlaVByby5qcyJdLCJuYW1lcyI6WyJwZWlQcm8iLCJwcm9wcyIsInNob3dJUyIsImluZGV4UHJvIiwiZGF0YSIsIm1ldGhvZHMiLCJzaG93VGhpcyIsIm9yZGVySWQiLCJjbG9zZVNob3ciLCJzaG93T3RoZXIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLEssR0FBTTtBQUNMRCxjQUFPLEVBREY7QUFFTEUsY0FBTyxFQUZGO0FBR0xDLGdCQUFTO0FBSEosSyxRQUtOQyxJLEdBQUssRSxRQUdMQyxPLEdBQVE7QUFDUEMsY0FETyxvQkFDRUMsT0FERixFQUNVO0FBQ2Q7QUFDRCxPQUhLO0FBSU5DLGVBSk0sdUJBSUs7QUFDTixhQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0o7QUFOSyxLOzs7O0VBVHdCLGVBQUtDLFM7O2tCQUFwQlYsTSIsImZpbGUiOiJwZWlQcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGVpUHJvIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHM9e1xyXG4gICAgIHBlaVBybzpbXSxcclxuICAgICBzaG93SVM6W10sXHJcbiAgICAgaW5kZXhQcm86W11cclxuICAgIH1cclxuICAgIGRhdGE9e1xyXG5cclxuICAgIH1cclxuICAgIG1ldGhvZHM9e1xyXG4gICAgIHNob3dUaGlzKG9yZGVySWQpe1xyXG4gICAgICAgIC8vICAgdGhpcy5zaG93T3RoZXIgPSBvcmRlcklkO1xyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZVNob3coKXtcclxuICAgICAgICAgICB0aGlzLnNob3dPdGhlciA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgXHJcbn1cclxuIl19