'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pan = require('./../../api/wl/pan.js');

var _pan2 = _interopRequireDefault(_pan);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SheetNum = function (_wepy$component) {
  _inherits(SheetNum, _wepy$component);

  function SheetNum() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SheetNum);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SheetNum.__proto__ || Object.getPrototypeOf(SheetNum)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      numSheet: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SheetNum, [{
    key: 'getInvenNum',
    value: function getInvenNum() {
      var that = this;
      var param = { inventory_sn: JSON.parse(wx.getStorageSync('inventoryMsg')).inventory_sn, is_first: ' ' + JSON.parse(wx.getStorageSync('isFrist')) };
      _pan2.default.getInvenNum(param).then(function (res) {
        if (res.Head.code == "S0000") {
          that.numSheet = res.Body[0].count;
          that.$apply();
          console.log("获取盘点数量==》", res);
        } else {
          _Tips2.default.error(res.Head.msg);
        }
      }).catch(function (err) {
        _Tips2.default.error(err.Head.msg);
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getInvenNum();
    }
  }]);

  return SheetNum;
}(_wepy2.default.component);

exports.default = SheetNum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWV0TnVtLmpzIl0sIm5hbWVzIjpbIlNoZWV0TnVtIiwiZGF0YSIsIm51bVNoZWV0IiwibWV0aG9kcyIsInRoYXQiLCJwYXJhbSIsImludmVudG9yeV9zbiIsIkpTT04iLCJwYXJzZSIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJpc19maXJzdCIsImdldEludmVuTnVtIiwidGhlbiIsInJlcyIsIkhlYWQiLCJjb2RlIiwiQm9keSIsImNvdW50IiwiJGFwcGx5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibXNnIiwiY2F0Y2giLCJlcnIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEksR0FBSztBQUNIQyxnQkFBUztBQUROLEssUUFHTEMsTyxHQUFRLEU7Ozs7O2tDQUdLO0FBQ1QsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsUUFBUSxFQUFDQyxjQUFhQyxLQUFLQyxLQUFMLENBQVdDLEdBQUdDLGNBQUgsQ0FBa0IsY0FBbEIsQ0FBWCxFQUE4Q0osWUFBNUQsRUFBeUVLLFVBQVMsTUFBSUosS0FBS0MsS0FBTCxDQUFXQyxHQUFHQyxjQUFILENBQWtCLFNBQWxCLENBQVgsQ0FBdEYsRUFBWjtBQUNDLG9CQUFXRSxXQUFYLENBQXVCUCxLQUF2QixFQUE4QlEsSUFBOUIsQ0FBbUMsZUFBSztBQUMxQyxZQUFHQyxJQUFJQyxJQUFKLENBQVNDLElBQVQsSUFBZSxPQUFsQixFQUEwQjtBQUN2QlosZUFBS0YsUUFBTCxHQUFnQlksSUFBSUcsSUFBSixDQUFTLENBQVQsRUFBWUMsS0FBNUI7QUFDQWQsZUFBS2UsTUFBTDtBQUNBQyxrQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBd0JQLEdBQXhCO0FBQ0YsU0FKRCxNQUlLO0FBQ0YseUJBQUtRLEtBQUwsQ0FBV1IsSUFBSUMsSUFBSixDQUFTUSxHQUFwQjtBQUNGO0FBQ0YsT0FSRyxFQVFEQyxLQVJDLENBUUssZUFBSztBQUNYLHVCQUFLRixLQUFMLENBQVdHLElBQUlWLElBQUosQ0FBU1EsR0FBcEI7QUFDRixPQVZHO0FBV0o7Ozs2QkFDTztBQUNOLFdBQUtYLFdBQUw7QUFDRDs7OztFQXhCbUMsZUFBS2MsUzs7a0JBQXRCMUIsUSIsImZpbGUiOiJzaGVldE51bS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgcGFuU2VydmljZSBmcm9tICcuLi8uLi9hcGkvd2wvcGFuLmpzJ1xyXG5pbXBvcnQgVGlwcyBmcm9tICcuLi8uLi91dGlsL1RpcHMuanMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWV0TnVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGRhdGE9e1xyXG4gICAgbnVtU2hlZXQ6JydcclxuICB9XHJcbiAgbWV0aG9kcz17XHJcblxyXG4gIH1cclxuICBnZXRJbnZlbk51bSgpe1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCBwYXJhbSA9IHtpbnZlbnRvcnlfc246SlNPTi5wYXJzZSh3eC5nZXRTdG9yYWdlU3luYygnaW52ZW50b3J5TXNnJykpLmludmVudG9yeV9zbixpc19maXJzdDonICcrSlNPTi5wYXJzZSh3eC5nZXRTdG9yYWdlU3luYygnaXNGcmlzdCcpKSB9XHJcbiAgICAgICBwYW5TZXJ2aWNlLmdldEludmVuTnVtKHBhcmFtKS50aGVuKHJlcz0+e1xyXG4gICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgdGhhdC5udW1TaGVldCA9IHJlcy5Cb2R5WzBdLmNvdW50O1xyXG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLojrflj5bnm5jngrnmlbDph489PeOAi1wiLHJlcylcclxuICAgICB9ZWxzZXtcclxuICAgICAgICBUaXBzLmVycm9yKHJlcy5IZWFkLm1zZylcclxuICAgICB9XHJcbiAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICBUaXBzLmVycm9yKGVyci5IZWFkLm1zZylcclxuICAgfSlcclxuICB9XHJcbiAgb25Mb2FkKCl7XHJcbiAgICB0aGlzLmdldEludmVuTnVtKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==