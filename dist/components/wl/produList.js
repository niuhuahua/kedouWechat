'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var produList = function (_wepy$component) {
    _inherits(produList, _wepy$component);

    function produList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, produList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = produList.__proto__ || Object.getPrototypeOf(produList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            goods: {}
        }, _this.data = {
            imgSrc: ''
        }, _this.methods = {
            imgSrc: function imgSrc(src, e) {
                // this.imgSrc = "http://oi7fjcrqu.bkt.clouddn.com/img_nopic.png";
                // this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(produList, [{
        key: 'onLoad',
        value: function onLoad() {
            this.imgSrc = '';
            this.$apply();
        }
    }]);

    return produList;
}(_wepy2.default.component);

exports.default = produList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1TGlzdC5qcyJdLCJuYW1lcyI6WyJwcm9kdUxpc3QiLCJwcm9wcyIsImdvb2RzIiwiZGF0YSIsImltZ1NyYyIsIm1ldGhvZHMiLCJzcmMiLCJlIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBTztBQUNIQyxtQkFBTTtBQURILFMsUUFHUEMsSSxHQUFNO0FBQ0ZDLG9CQUFPO0FBREwsUyxRQUdOQyxPLEdBQVE7QUFDSkQsa0JBREksa0JBQ0dFLEdBREgsRUFDT0MsQ0FEUCxFQUNTO0FBQ1g7QUFDQTtBQUNEO0FBSkcsUzs7Ozs7aUNBTUE7QUFDSixpQkFBS0gsTUFBTCxHQUFjLEVBQWQ7QUFDQSxpQkFBS0ksTUFBTDtBQUNIOzs7O0VBaEJvQyxlQUFLQyxTOztrQkFBdkJULFMiLCJmaWxlIjoicHJvZHVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5ICBmcm9tIFwid2VweVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9kdUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHM9IHtcclxuICAgICAgZ29vZHM6e31cclxuICB9XHJcbiAgZGF0YT0ge1xyXG4gICAgICBpbWdTcmM6JydcclxuICB9XHJcbiAgbWV0aG9kcz17XHJcbiAgICAgIGltZ1NyYyhzcmMsZSl7XHJcbiAgICAgICAgLy8gdGhpcy5pbWdTcmMgPSBcImh0dHA6Ly9vaTdmamNycXUuYmt0LmNsb3VkZG4uY29tL2ltZ19ub3BpYy5wbmdcIjtcclxuICAgICAgICAvLyB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIG9uTG9hZCgpe1xyXG4gICAgICB0aGlzLmltZ1NyYyA9ICcnO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxufVxyXG4iXX0=