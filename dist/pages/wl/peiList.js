'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _peiPro = require('./../../components/wl/peiPro.js');

var _peiPro2 = _interopRequireDefault(_peiPro);

var _pan = require('./../../api/wl/pan.js');

var _pan2 = _interopRequireDefault(_pan);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var peiList = function (_wepy$page) {
  _inherits(peiList, _wepy$page);

  function peiList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, peiList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = peiList.__proto__ || Object.getPrototypeOf(peiList)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "mainData": { "com": "PriProd", "props": "peiPro.sync" } }, _this.$props = { "PriProd": { "xmlns:v-bind": { "value": "", "for": "mainData", "item": "item", "index": "index", "key": "index" }, "v-bind:peiPro.sync": { "value": "item", "type": "item", "for": "mainData", "item": "item", "index": "index", "key": "index" }, "v-bind:showIS.sync": { "value": "showArry", "for": "mainData", "item": "item", "index": "index", "key": "index" }, "v-bind:indexPro.sync": { "value": "index", "type": "index", "for": "mainData", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      PriProd: _peiPro2.default
    }, _this.data = {
      height: 200,
      mainData: [],
      oneData: [],
      twoData: [],
      from_name: '全部',
      to_name: '全部',
      from_ware_id: 0,
      to_ware_id: 0,
      page: 1,
      Page: '',
      onShow: false,
      twoShow: false,
      showArry: [false, false, false, false, false, false, false, false, false, false, false]
    }, _this.methods = {
      showThis: function showThis(index) {
        this.showArry[index] = true;
      },
      closeShow: function closeShow(index) {
        this.showArry[index] = false;
      },
      getWare: function getWare(num) {
        var param = { keytype: num };
        var that = this;
        _pan2.default.getWareList(param).then(function (res) {
          if (res.Head.code == "S0000") {
            if (num == 1) {
              that.oneData = res.Body;
              that.height = 200;
              that.onShow = true;
              that.twoShow = false;
              that.$apply();
            } else {
              that.twoData = res.Body;
              that.height = 300;
              that.twoShow = true;
              that.onShow = false;
              that.$apply();
            }
          } else {
            _Tips2.default.error(res.Head.msg);
          }
        }).catch(function (err) {
          _Tips2.default.error(err.Head.msg);
        });
      },
      oneClick: function oneClick(item) {
        if (item != 0) {
          this.from_ware_id = item.ware_id;
          this.from_name = item.ware_name;
        } else {
          this.from_ware_id = 0;
          this.from_name = "全部";
        }
        this.onShow = false;
        this.$apply();
        this.getAllOrerList(1, this.from_ware_id, this.to_ware_id);
      },
      twoClick: function twoClick(item) {
        if (item != 0) {
          this.to_ware_id = item.ware_id;
          this.to_name = item.ware_name;
        } else {
          this.to_ware_id = 0;
          this.to_name = "全部";
        }
        this.twoShow = false;
        this.$apply();
        this.getAllOrerList(1, this.from_ware_id, this.to_ware_id);
      },
      clearBoolean: function clearBoolean() {
        this.onShow = false;
        this.twoShow = false;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(peiList, [{
    key: 'getAllOrerList',
    value: function getAllOrerList(page, from_ware_id, to_ware_id) {
      var param = {
        keytype: 1,
        from_ware_id: from_ware_id,
        to_ware_id: to_ware_id,
        page: page
      };
      var that = this;
      _pan2.default.getAllocationOrderList(param).then(function (res) {
        if (res.Head.code == "S0000") {
          wx.hideLoading();
          that.mainData = res.Body;
          that.Page = res.Page;
          that.page = res.Page.pagenum;
          console.log(res.Page);
          that.showArry.length = res.Body.length;
          that.$apply();
          console.log(res);
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
      this.getAllOrerList(1, 0, 0);
    }
    /**
    加载下一页
     */

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log(this.Page);
      var totalpage = this.Page.totalpage;
      if (totalpage == this.page) {
        console.log("没有更多数据展示");
      }
    }
  }]);

  return peiList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(peiList , 'pages/wl/peiList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlaUxpc3QuanMiXSwibmFtZXMiOlsicGVpTGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlByaVByb2QiLCJkYXRhIiwiaGVpZ2h0IiwibWFpbkRhdGEiLCJvbmVEYXRhIiwidHdvRGF0YSIsImZyb21fbmFtZSIsInRvX25hbWUiLCJmcm9tX3dhcmVfaWQiLCJ0b193YXJlX2lkIiwicGFnZSIsIlBhZ2UiLCJvblNob3ciLCJ0d29TaG93Iiwic2hvd0FycnkiLCJtZXRob2RzIiwic2hvd1RoaXMiLCJpbmRleCIsImNsb3NlU2hvdyIsImdldFdhcmUiLCJudW0iLCJwYXJhbSIsImtleXR5cGUiLCJ0aGF0IiwiZ2V0V2FyZUxpc3QiLCJ0aGVuIiwicmVzIiwiSGVhZCIsImNvZGUiLCJCb2R5IiwiJGFwcGx5IiwiZXJyb3IiLCJtc2ciLCJjYXRjaCIsImVyciIsIm9uZUNsaWNrIiwiaXRlbSIsIndhcmVfaWQiLCJ3YXJlX25hbWUiLCJnZXRBbGxPcmVyTGlzdCIsInR3b0NsaWNrIiwiY2xlYXJCb29sZWFuIiwiZ2V0QWxsb2NhdGlvbk9yZGVyTGlzdCIsInd4IiwiaGlkZUxvYWRpbmciLCJwYWdlbnVtIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInRvdGFscGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ3BCQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxTQUFQLEVBQWlCLFNBQVEsYUFBekIsRUFBWixFLFFBQ1hDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sVUFBbEIsRUFBNkIsUUFBTyxNQUFwQyxFQUEyQyxTQUFRLE9BQW5ELEVBQTJELE9BQU0sT0FBakUsRUFBaEIsRUFBMEYsc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8s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QUlmLElBQUosQ0FBU2tDLE9BQXJCO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVlyQixJQUFJZixJQUFoQjtBQUNBWSxlQUFLVCxRQUFMLENBQWNrQyxNQUFkLEdBQXVCdEIsSUFBSUcsSUFBSixDQUFTbUIsTUFBaEM7QUFDQXpCLGVBQUtPLE1BQUw7QUFDQWdCLGtCQUFRQyxHQUFSLENBQVlyQixHQUFaO0FBQ0QsU0FURCxNQVNLO0FBQ0gseUJBQUtLLEtBQUwsQ0FBV0wsSUFBSUMsSUFBSixDQUFTSyxHQUFwQjtBQUNEO0FBQ0QsT0FiRCxFQWFHQyxLQWJILENBYVMsZUFBSztBQUNaLHVCQUFLRixLQUFMLENBQVdHLElBQUlQLElBQUosQ0FBU0ssR0FBcEI7QUFDQSxPQWZGO0FBZ0JBOzs7NkJBQ087QUFDTixXQUFLTyxjQUFMLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCO0FBQ0Q7QUFDRDs7Ozs7O29DQUdlO0FBQ2JPLGNBQVFDLEdBQVIsQ0FBWSxLQUFLcEMsSUFBakI7QUFDQSxVQUFJc0MsWUFBWSxLQUFLdEMsSUFBTCxDQUFVc0MsU0FBMUI7QUFDQSxVQUFHQSxhQUFXLEtBQUt2QyxJQUFuQixFQUF3QjtBQUN2Qm9DLGdCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBO0FBQ0Y7Ozs7RUExSGtDLGVBQUtyQyxJOztrQkFBckJmLE8iLCJmaWxlIjoicGVpTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgUHJpUHJvZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dsL3BlaVBybydcclxuaW1wb3J0IHBhblNlcnZpY2UgZnJvbSAnLi4vLi4vYXBpL3dsL3Bhbi5qcydcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi4vLi4vdXRpbC9UaXBzLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZWlMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICRyZXBlYXQgPSB7XCJtYWluRGF0YVwiOntcImNvbVwiOlwiUHJpUHJvZFwiLFwicHJvcHNcIjpcInBlaVByby5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiUHJpUHJvZFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwibWFpbkRhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDpwZWlQcm8uc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcIm1haW5EYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6c2hvd0lTLnN5bmNcIjp7XCJ2YWx1ZVwiOlwic2hvd0FycnlcIixcImZvclwiOlwibWFpbkRhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleFByby5zeW5jXCI6e1widmFsdWVcIjpcImluZGV4XCIsXCJ0eXBlXCI6XCJpbmRleFwiLFwiZm9yXCI6XCJtYWluRGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xyXG4gICAgICBQcmlQcm9kOlByaVByb2RcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGhlaWdodDoyMDAsXHJcbiAgICBtYWluRGF0YTpbXSxcclxuICAgIG9uZURhdGE6W10sXHJcbiAgICB0d29EYXRhOltdLFxyXG4gICAgZnJvbV9uYW1lOiflhajpg6gnLFxyXG4gICAgdG9fbmFtZTon5YWo6YOoJyxcclxuICAgIGZyb21fd2FyZV9pZDowLFxyXG4gICAgdG9fd2FyZV9pZDowLFxyXG4gICAgcGFnZToxLFxyXG4gICAgUGFnZTonJyxcclxuICAgIG9uU2hvdzpmYWxzZSxcclxuICAgIHR3b1Nob3c6ZmFsc2UsXHJcbiAgICBzaG93QXJyeTpbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBzaG93VGhpcyhpbmRleCl7XHJcbiAgICAgIHRoaXMuc2hvd0FycnlbaW5kZXhdID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZVNob3coaW5kZXgpe1xyXG4gICAgICB0aGlzLnNob3dBcnJ5W2luZGV4XSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdldFdhcmUobnVtKXtcclxuICAgICAgbGV0IHBhcmFtID0ge2tleXR5cGU6bnVtfVxyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcGFuU2VydmljZS5nZXRXYXJlTGlzdChwYXJhbSkudGhlbihyZXM9PntcclxuICAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgICAgIGlmKG51bT09MSl7XHJcbiAgICAgICAgICAgICB0aGF0Lm9uZURhdGEgPSByZXMuQm9keTtcclxuICAgICAgICAgICAgIHRoYXQuaGVpZ2h0ID0gMjAwO1xyXG4gICAgICAgICAgICAgdGhhdC5vblNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgdGhhdC50d29TaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHRoYXQudHdvRGF0YSA9IHJlcy5Cb2R5O1xyXG4gICAgICAgICAgICAgIHRoYXQuaGVpZ2h0ID0gMzAwO1xyXG4gICAgICAgICAgICAgIHRoYXQudHdvU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhhdC5vblNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgVGlwcy5lcnJvcihyZXMuSGVhZC5tc2cpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICBUaXBzLmVycm9yKGVyci5IZWFkLm1zZylcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uZUNsaWNrKGl0ZW0pe1xyXG4gICAgICBpZihpdGVtICE9IDApe1xyXG4gICAgICAgICAgIHRoaXMuZnJvbV93YXJlX2lkID0gaXRlbS53YXJlX2lkO1xyXG4gICAgICAgICAgIHRoaXMuZnJvbV9uYW1lID0gaXRlbS53YXJlX25hbWU7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5mcm9tX3dhcmVfaWQgPSAwO1xyXG4gICAgICAgICAgdGhpcy5mcm9tX25hbWUgPSBcIuWFqOmDqFwiO1xyXG4gICAgICB9XHJcbiAgICAgICB0aGlzLm9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgIHRoaXMuZ2V0QWxsT3Jlckxpc3QoMSwgdGhpcy5mcm9tX3dhcmVfaWQsdGhpcy50b193YXJlX2lkKTtcclxuICAgIH0sXHJcbiAgICB0d29DbGljayhpdGVtKXtcclxuICAgICAgaWYoaXRlbSAhPSAwKXtcclxuICAgICAgICAgdGhpcy50b193YXJlX2lkID0gaXRlbS53YXJlX2lkO1xyXG4gICAgICAgICB0aGlzLnRvX25hbWUgPSBpdGVtLndhcmVfbmFtZTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgIHRoaXMudG9fd2FyZV9pZCA9IDA7XHJcbiAgICAgICAgICB0aGlzLnRvX25hbWUgPSBcIuWFqOmDqFwiO1xyXG4gICAgICB9XHJcbiAgICAgICB0aGlzLnR3b1Nob3c9IGZhbHNlO1xyXG4gICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgIHRoaXMuZ2V0QWxsT3Jlckxpc3QoMSx0aGlzLmZyb21fd2FyZV9pZCx0aGlzLnRvX3dhcmVfaWQpO1xyXG4gICAgfSxcclxuICAgIGNsZWFyQm9vbGVhbigpe1xyXG4gICAgICB0aGlzLm9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnR3b1Nob3cgPSBmYWxzZTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGdldEFsbE9yZXJMaXN0KHBhZ2UsZnJvbV93YXJlX2lkLHRvX3dhcmVfaWQpe1xyXG4gICAgbGV0IHBhcmFtID0geyBcclxuICAgICAga2V5dHlwZToxLFxyXG4gICAgICBmcm9tX3dhcmVfaWQ6ZnJvbV93YXJlX2lkLFxyXG4gICAgICB0b193YXJlX2lkOnRvX3dhcmVfaWQsXHJcbiAgICAgIHBhZ2U6cGFnZVxyXG4gICAgfVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICBwYW5TZXJ2aWNlLmdldEFsbG9jYXRpb25PcmRlckxpc3QocGFyYW0pLnRoZW4ocmVzPT57XHJcbiAgICBpZihyZXMuSGVhZC5jb2RlPT1cIlMwMDAwXCIpe1xyXG4gICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICB0aGF0Lm1haW5EYXRhID0gcmVzLkJvZHk7XHJcbiAgICAgIHRoYXQuUGFnZSA9IHJlcy5QYWdlO1xyXG4gICAgICB0aGF0LnBhZ2UgPSByZXMuUGFnZS5wYWdlbnVtO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuUGFnZSlcclxuICAgICAgdGhhdC5zaG93QXJyeS5sZW5ndGggPSByZXMuQm9keS5sZW5ndGg7XHJcbiAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH1lbHNle1xyXG4gICAgICBUaXBzLmVycm9yKHJlcy5IZWFkLm1zZylcclxuICAgIH1cclxuICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgVGlwcy5lcnJvcihlcnIuSGVhZC5tc2cpXHJcbiAgICB9KVxyXG4gIH1cclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuZ2V0QWxsT3Jlckxpc3QoMSwwLDApO1xyXG4gIH1cclxuICAvKipcclxuICDliqDovb3kuIvkuIDpobVcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCl7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLlBhZ2UpXHJcbiAgICBsZXQgdG90YWxwYWdlID0gdGhpcy5QYWdlLnRvdGFscGFnZTtcclxuICAgIGlmKHRvdGFscGFnZT09dGhpcy5wYWdlKXtcclxuICAgICBjb25zb2xlLmxvZyhcIuayoeacieabtOWkmuaVsOaNruWxleekulwiKVxyXG4gICAgfVxyXG4gIH0gXHJcblxyXG59XHJcbiJdfQ==