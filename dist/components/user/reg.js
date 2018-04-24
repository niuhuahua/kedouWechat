'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _comReg = require('./comReg.js');

var _comReg2 = _interopRequireDefault(_comReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reg = function (_wepy$component) {
  _inherits(Reg, _wepy$component);

  function Reg() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Reg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Reg.__proto__ || Object.getPrototypeOf(Reg)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      comReg: _comReg2.default
    }, _this.data = {
      showDialog: false
    }, _this.props = {}, _this.methods = {
      showDig: function showDig() {
        this.showDialog = true;
      },
      closeDig: function closeDig() {
        this.showDialog = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Reg;
}(_wepy2.default.component);

exports.default = Reg;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZy5qcyJdLCJuYW1lcyI6WyJSZWciLCJjb21wb25lbnRzIiwiY29tUmVnIiwiZGF0YSIsInNob3dEaWFsb2ciLCJwcm9wcyIsIm1ldGhvZHMiLCJzaG93RGlnIiwiY2xvc2VEaWciLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsVSxHQUFXO0FBQ1RDO0FBRFMsSyxRQUdYQyxJLEdBQUs7QUFDSEMsa0JBQVc7QUFEUixLLFFBR0xDLEssR0FBTSxFLFFBQ05DLE8sR0FBUTtBQUNOQyxhQURNLHFCQUNHO0FBQ1AsYUFBS0gsVUFBTCxHQUFrQixJQUFsQjtBQUNGLE9BSE07QUFJUEksY0FKTyxzQkFJRztBQUNQLGFBQUtKLFVBQUwsR0FBa0IsS0FBbEI7QUFDRjtBQU5NLEssUUFTUkssTSxHQUFPLEU7Ozs7RUFqQndCLGVBQUtDLFM7O2tCQUFqQlYsRyIsImZpbGUiOiJyZWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGNvbVJlZyBmcm9tICcuLi91c2VyL2NvbVJlZydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGNvbXBvbmVudHM9e1xyXG4gICAgY29tUmVnOmNvbVJlZ1xyXG4gIH1cclxuICBkYXRhPXtcclxuICAgIHNob3dEaWFsb2c6ZmFsc2VcclxuICB9XHJcbiAgcHJvcHM9e31cclxuICBtZXRob2RzPXtcclxuICAgIHNob3dEaWcoKXtcclxuICAgICAgdGhpcy5zaG93RGlhbG9nID0gdHJ1ZTtcclxuICAgfSxcclxuICAgY2xvc2VEaWcoKXtcclxuICAgICAgdGhpcy5zaG93RGlhbG9nID0gZmFsc2U7XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXZlbnRzPXt9XHJcbiAgXHJcbn1cclxuIl19