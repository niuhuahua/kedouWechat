"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_wepy$component) {
  _inherits(Filter, _wepy$component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      currentTab: {
        default: 0
      },
      tabList: {
        type: Object
      },
      showSort: {
        default: true
      },
      SortList: {
        default: []
      },
      activeIndex: {
        default: 0
      }
    }, _this.data = {
      sortData: "sortData"
    }, _this.methods = {
      /**
       * 点击tab切换
       */
      swichNav: function swichNav(e) {
        var that = this;
        if (this.data.currentTab == e.target.dataset.current) {
          return false;
        } else {
          that.currentTab = e.target.dataset.current;
          that.$apply();
          console.log("that===>", that.currentTab);
        }
        this.$emit("currentTab", that.currentTab);
      },

      /**
       * 头部红点标识
       * @param  {[type]} dotList [description]
       * @return {[type]}         [description]
       */
      changeList: function changeList(dotList) {
        this.tabList = dotList;
      },
      showSrotF: function showSrotF() {
        var that = this;
        that.showSort = !that.showSort;
        console.log("showSort===>", this.showSort);
        console.log("sortData===>", this.sortData);
        console.log("执行了");
      },

      // 点击选中
      changeActive: function changeActive(e) {
        var that = this;
        if (this.data.activeIndex == e.target.dataset.active) {
          return false;
        } else {
          that.activeIndex = e.target.dataset.active;
          that.showSort = !that.showSort;
          that.$apply();
          console.log("that===>", that.activeIndex);
        }
      }
    }, _this.watch = {
      currentTab: function currentTab(newValue, oldValue) {
        console.log("currentTab value: " + oldValue + " -> " + newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: "onLoad",
    value: function onLoad() {
      var that = this;
      console.log("这是加载了组件");
    }
  }]);

  return Filter;
}(_wepy2.default.component);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVfdG9wLmpzIl0sIm5hbWVzIjpbIkZpbHRlciIsInByb3BzIiwiY3VycmVudFRhYiIsImRlZmF1bHQiLCJ0YWJMaXN0IiwidHlwZSIsIk9iamVjdCIsInNob3dTb3J0IiwiU29ydExpc3QiLCJhY3RpdmVJbmRleCIsImRhdGEiLCJzb3J0RGF0YSIsIm1ldGhvZHMiLCJzd2ljaE5hdiIsImUiLCJ0aGF0IiwidGFyZ2V0IiwiZGF0YXNldCIsImN1cnJlbnQiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJjaGFuZ2VMaXN0IiwiZG90TGlzdCIsInNob3dTcm90RiIsImNoYW5nZUFjdGl2ZSIsImFjdGl2ZSIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsaUJBQVM7QUFEQyxPQUROO0FBSU5DLGVBQVM7QUFDUEMsY0FBTUM7QUFEQyxPQUpIO0FBT05DLGdCQUFTO0FBQ05KLGlCQUFRO0FBREYsT0FQSDtBQVVMSyxnQkFBUztBQUNQTCxpQkFBVTtBQURILE9BVko7QUFhSk0sbUJBQVk7QUFDVE4saUJBQVM7QUFEQTtBQWJSLEssUUFpQlJPLEksR0FBSztBQUNIQyxnQkFBUztBQUROLEssUUFJTEMsTyxHQUFVO0FBQ1I7OztBQUdBQyxjQUpRLG9CQUlDQyxDQUpELEVBSUk7QUFDVixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJLEtBQUtMLElBQUwsQ0FBVVIsVUFBVixJQUF3QlksRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUE3QyxFQUFzRDtBQUNwRCxpQkFBTyxLQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0xILGVBQUtiLFVBQUwsR0FBa0JZLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBbkM7QUFDQUgsZUFBS0ksTUFBTDtBQUNBQyxrQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBdUJOLEtBQUtiLFVBQTVCO0FBQ0Q7QUFDRCxhQUFLb0IsS0FBTCxDQUFXLFlBQVgsRUFBeUJQLEtBQUtiLFVBQTlCO0FBQ0QsT0FkTzs7QUFlUjs7Ozs7QUFLQXFCLGdCQXBCUSxzQkFvQkdDLE9BcEJILEVBb0JZO0FBQ2xCLGFBQUtwQixPQUFMLEdBQWVvQixPQUFmO0FBQ0QsT0F0Qk87QUF1QlJDLGVBdkJRLHVCQXVCRztBQUNULFlBQUlWLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixRQUFMLEdBQWdCLENBQUNRLEtBQUtSLFFBQXRCO0FBQ0FhLGdCQUFRQyxHQUFSLENBQVksY0FBWixFQUEyQixLQUFLZCxRQUFoQztBQUNBYSxnQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBMkIsS0FBS1YsUUFBaEM7QUFDQVMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsT0E3Qk87O0FBOEJSO0FBQ0FLLGtCQS9CUSx3QkErQktaLENBL0JMLEVBK0JPO0FBQ1gsWUFBSUMsT0FBTyxJQUFYO0FBQ0YsWUFBSSxLQUFLTCxJQUFMLENBQVVELFdBQVYsSUFBeUJLLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQlUsTUFBOUMsRUFBc0Q7QUFDcEQsaUJBQU8sS0FBUDtBQUNELFNBRkQsTUFFTztBQUNMWixlQUFLTixXQUFMLEdBQW1CSyxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJVLE1BQXBDO0FBQ0FaLGVBQUtSLFFBQUwsR0FBZ0IsQ0FBQ1EsS0FBS1IsUUFBdEI7QUFDQVEsZUFBS0ksTUFBTDtBQUNBQyxrQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBdUJOLEtBQUtOLFdBQTVCO0FBQ0Q7QUFDRjtBQXpDTyxLLFFBa0RWbUIsSyxHQUFRO0FBQ04xQixnQkFETSxzQkFDSzJCLFFBREwsRUFDZUMsUUFEZixFQUN5QjtBQUM3QlYsZ0JBQVFDLEdBQVIsd0JBQWlDUyxRQUFqQyxZQUFnREQsUUFBaEQ7QUFDRDtBQUhLLEs7Ozs7OzZCQUxDO0FBQ1AsVUFBSWQsT0FBTyxJQUFYO0FBQ0FLLGNBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBRUQ7Ozs7RUF2RWlDLGVBQUtVLFM7O2tCQUFwQi9CLE0iLCJmaWxlIjoiaG9tZV90b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGN1cnJlbnRUYWI6IHtcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIHRhYkxpc3Q6IHtcclxuICAgICAgdHlwZTogT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgc2hvd1NvcnQ6e1xyXG4gICAgICAgZGVmYXVsdDp0cnVlXHJcbiAgICAgfSxcclxuICAgICBTb3J0TGlzdDp7XHJcbiAgICAgICBkZWZhdWx0IDogW11cclxuICAgICB9LFxyXG4gICAgICBhY3RpdmVJbmRleDp7XHJcbiAgICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgfVxyXG4gIH1cclxuICBkYXRhPXtcclxuICAgIHNvcnREYXRhOlwic29ydERhdGFcIlxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICog54K55Ye7dGFi5YiH5o2iXHJcbiAgICAgKi9cclxuICAgIHN3aWNoTmF2KGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmN1cnJlbnRUYWIgPT0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhhdD09PT5cIix0aGF0LmN1cnJlbnRUYWIpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kZW1pdChcImN1cnJlbnRUYWJcIiwgdGhhdC5jdXJyZW50VGFiKVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5aS06YOo57qi54K55qCH6K+GXHJcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19IGRvdExpc3QgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgY2hhbmdlTGlzdChkb3RMaXN0KSB7XHJcbiAgICAgIHRoaXMudGFiTGlzdCA9IGRvdExpc3Q7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nyb3RGKCl7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5zaG93U29ydCA9ICF0aGF0LnNob3dTb3J0O1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNob3dTb3J0PT09PlwiLHRoaXMuc2hvd1NvcnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic29ydERhdGE9PT0+XCIsdGhpcy5zb3J0RGF0YSlcclxuICAgICAgY29uc29sZS5sb2coXCLmiafooYzkuoZcIilcclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vpgInkuK1cclxuICAgIGNoYW5nZUFjdGl2ZShlKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuYWN0aXZlSW5kZXggPT0gZS50YXJnZXQuZGF0YXNldC5hY3RpdmUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhhdC5hY3RpdmVJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuYWN0aXZlO1xyXG4gICAgICAgIHRoYXQuc2hvd1NvcnQgPSAhdGhhdC5zaG93U29ydDtcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhhdD09PT5cIix0aGF0LmFjdGl2ZUluZGV4KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coXCLov5nmmK/liqDovb3kuobnu4Tku7ZcIilcclxuXHJcbiAgfVxyXG4gIHdhdGNoID0ge1xyXG4gICAgY3VycmVudFRhYihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgY29uc29sZS5sb2coYGN1cnJlbnRUYWIgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==