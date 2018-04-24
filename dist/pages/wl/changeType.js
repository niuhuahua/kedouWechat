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

var ChangeType = function (_wepy$page) {
  _inherits(ChangeType, _wepy$page);

  function ChangeType() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChangeType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChangeType.__proto__ || Object.getPrototypeOf(ChangeType)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      haveLogin: false,
      pandian: false,
      wuliu: false
    }, _this.methods = {
      changP: function changP() {
        if (this.haveLogin) {
          this.pandian = !this.pandian;
          this.$navigate('pMember');
          wx.setStorageSync('panType', true);
        } else {}
      },
      changW: function changW() {
        if (this.haveLogin) {
          this.wuliu = !this.wuliu;
          wx.setStorageSync('panType', false);
          this.$navigate('pMember');
        } else {}
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChangeType, [{
    key: 'onLoad',
    value: function onLoad() {
      var user = wx.getStorageSync('user');
      if (user) {
        this.haveLogin = true;
        this.$apply();
        var panType = wx.getStorageSync('panType');
        console.log(panType);
        if (panType == true || panType == false) {
          this.$navigate('pMember');
        } else {
          console.log("还没选择");
        }
      } else {
        this.haveLogin = false;
        this.$navigate('login');
        this.$apply();
      }
    }
  }]);

  return ChangeType;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ChangeType , 'pages/wl/changeType'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZVR5cGUuanMiXSwibmFtZXMiOlsiQ2hhbmdlVHlwZSIsImRhdGEiLCJoYXZlTG9naW4iLCJwYW5kaWFuIiwid3VsaXUiLCJtZXRob2RzIiwiY2hhbmdQIiwiJG5hdmlnYXRlIiwid3giLCJzZXRTdG9yYWdlU3luYyIsImNoYW5nVyIsInVzZXIiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsInBhblR5cGUiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxJLEdBQU87QUFDTEMsaUJBQVUsS0FETDtBQUVMQyxlQUFRLEtBRkg7QUFHTEMsYUFBTTtBQUhELEssUUFLUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0E7QUFDTixZQUFHLEtBQUtKLFNBQVIsRUFBa0I7QUFDYixlQUFLQyxPQUFMLEdBQWUsQ0FBQyxLQUFLQSxPQUFyQjtBQUNDLGVBQUtJLFNBQUwsQ0FBZSxTQUFmO0FBQ0FDLGFBQUdDLGNBQUgsQ0FBa0IsU0FBbEIsRUFBNkIsSUFBN0I7QUFDTCxTQUpELE1BSUssQ0FFSjtBQUVGLE9BVk87QUFXUkMsWUFYUSxvQkFXQTtBQUNOLFlBQUcsS0FBS1IsU0FBUixFQUFrQjtBQUNmLGVBQUtFLEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5CO0FBQ0RJLGFBQUdDLGNBQUgsQ0FBa0IsU0FBbEIsRUFBNkIsS0FBN0I7QUFDQSxlQUFLRixTQUFMLENBQWUsU0FBZjtBQUNELFNBSkQsTUFJSyxDQUVKO0FBQ0Y7QUFuQk8sSzs7Ozs7NkJBcUJGO0FBQ04sVUFBSUksT0FBT0gsR0FBR0ksY0FBSCxDQUFrQixNQUFsQixDQUFYO0FBQ0EsVUFBR0QsSUFBSCxFQUFRO0FBQ04sYUFBS1QsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtXLE1BQUw7QUFDQSxZQUFJQyxVQUFVTixHQUFHSSxjQUFILENBQWtCLFNBQWxCLENBQWQ7QUFDQUcsZ0JBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFlBQUdBLFdBQVMsSUFBVCxJQUFlQSxXQUFTLEtBQTNCLEVBQWlDO0FBQy9CLGVBQUtQLFNBQUwsQ0FBZSxTQUFmO0FBQ0QsU0FGRCxNQUVLO0FBQ0pRLGtCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0YsT0FWRCxNQVVLO0FBQ0YsYUFBS2QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUtLLFNBQUwsQ0FBZSxPQUFmO0FBQ0EsYUFBS00sTUFBTDtBQUNGO0FBQ0Y7Ozs7RUE1Q3FDLGVBQUtJLEk7O2tCQUF4QmpCLFUiLCJmaWxlIjoiY2hhbmdlVHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VUeXBlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgaGF2ZUxvZ2luOmZhbHNlLFxyXG4gICAgcGFuZGlhbjpmYWxzZSxcclxuICAgIHd1bGl1OmZhbHNlXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjaGFuZ1AoKXtcclxuICAgICAgaWYodGhpcy5oYXZlTG9naW4pe1xyXG4gICAgICAgICAgIHRoaXMucGFuZGlhbiA9ICF0aGlzLnBhbmRpYW47XHJcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKCdwTWVtYmVyJylcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3BhblR5cGUnLCB0cnVlKVxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgIH1cclxuICAgXHJcbiAgICB9LFxyXG4gICAgY2hhbmdXKCl7XHJcbiAgICAgIGlmKHRoaXMuaGF2ZUxvZ2luKXtcclxuICAgICAgICAgdGhpcy53dWxpdSA9ICF0aGlzLnd1bGl1O1xyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdwYW5UeXBlJywgZmFsc2UpXHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3BNZW1iZXInKVxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkKCl7XHJcbiAgICBsZXQgdXNlciA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VyJyk7XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgdGhpcy5oYXZlTG9naW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICBsZXQgcGFuVHlwZSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdwYW5UeXBlJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhblR5cGUpXHJcbiAgICAgIGlmKHBhblR5cGU9PXRydWV8fHBhblR5cGU9PWZhbHNlKXtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgncE1lbWJlcicpXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgY29uc29sZS5sb2coXCLov5jmsqHpgInmi6lcIilcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICB0aGlzLmhhdmVMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgdGhpcy4kbmF2aWdhdGUoJ2xvZ2luJylcclxuICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==