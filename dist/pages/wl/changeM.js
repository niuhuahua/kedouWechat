'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pan = require('./../../api/wl/pan.js');

var _pan2 = _interopRequireDefault(_pan);

var _Tips = require('./../../util/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

var _sheetNum = require('./../../components/wl/sheetNum.js');

var _sheetNum2 = _interopRequireDefault(_sheetNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var changeM = function (_wepy$page) {
  _inherits(changeM, _wepy$page);

  function changeM() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, changeM);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = changeM.__proto__ || Object.getPrototypeOf(changeM)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '库存盘点'
    }, _this.data = {
      isFrist: false,
      invenMsg: ''
    }, _this.components = {
      SheetNum: _sheetNum2.default
    }, _this.methods = {
      openShu: function openShu() {
        this.$navigate('setMa');
      },
      endPan: function endPan() {
        //结束盘点
        var that = this;
        var param = { inventory_sn: that.invenMsg.inventory_sn, is_first: wx.getStorageSync('isFrist') };
        _pan2.default.getInvenEnd(param).then(function (res) {
          if (res.Head.code == "S0000") {
            wx.setStorageSync('isFrist', res.Body[0].is_first);
            that.$navigate('pMember');
          } else {
            _Tips2.default.error(res.Head.msg);
          }
        }).catch(function (err) {
          _Tips2.default.error(err.Head.msg);
        });
      },
      weiSao: function weiSao() {
        wx.scanCode({
          success: function success(res) {
            console.log(res);
          },
          fail: function (_fail) {
            function fail() {
              return _fail.apply(this, arguments);
            }

            fail.toString = function () {
              return _fail.toString();
            };

            return fail;
          }(function () {
            console.log(fail);
          })
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(changeM, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.isFrist = wx.getStorageSync('isFrist');
      var invenMsg = JSON.parse(wx.getStorageSync('inventoryMsg'));
      this.invenMsg = invenMsg;
      if (invenMsg) {
        if (invenMsg.status == "2" || invenMsg.status == "5") {
          this.isFrist = true;
        }
      }
      this.$apply();
    }
  }]);

  return changeM;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(changeM , 'pages/wl/changeM'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZU0uanMiXSwibmFtZXMiOlsiY2hhbmdlTSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaXNGcmlzdCIsImludmVuTXNnIiwiY29tcG9uZW50cyIsIlNoZWV0TnVtIiwibWV0aG9kcyIsIm9wZW5TaHUiLCIkbmF2aWdhdGUiLCJlbmRQYW4iLCJ0aGF0IiwicGFyYW0iLCJpbnZlbnRvcnlfc24iLCJpc19maXJzdCIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJnZXRJbnZlbkVuZCIsInRoZW4iLCJyZXMiLCJIZWFkIiwiY29kZSIsInNldFN0b3JhZ2VTeW5jIiwiQm9keSIsImVycm9yIiwibXNnIiwiY2F0Y2giLCJlcnIiLCJ3ZWlTYW8iLCJzY2FuQ29kZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNsQkMsTSxHQUFTO0FBQ05DLDhCQUF3QjtBQURsQixLLFFBR1ZDLEksR0FBTztBQUNMQyxlQUFRLEtBREg7QUFFTEMsZ0JBQVM7QUFGSixLLFFBSVBDLFUsR0FBVztBQUNUQztBQURTLEssUUFHWEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0M7QUFDUCxhQUFLQyxTQUFMLENBQWUsT0FBZjtBQUNELE9BSE87QUFJUkMsWUFKUSxvQkFJQTtBQUFDO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUSxFQUFHQyxjQUFhRixLQUFLUCxRQUFMLENBQWNTLFlBQTlCLEVBQTJDQyxVQUFTQyxHQUFHQyxjQUFILENBQWtCLFNBQWxCLENBQXBELEVBQVo7QUFDQyxzQkFBV0MsV0FBWCxDQUF1QkwsS0FBdkIsRUFBOEJNLElBQTlCLENBQW1DLGVBQUs7QUFDdEMsY0FBR0MsSUFBSUMsSUFBSixDQUFTQyxJQUFULElBQWUsT0FBbEIsRUFBMEI7QUFDeEJOLGVBQUdPLGNBQUgsQ0FBa0IsU0FBbEIsRUFBNEJILElBQUlJLElBQUosQ0FBUyxDQUFULEVBQVlULFFBQXhDO0FBQ0FILGlCQUFLRixTQUFMLENBQWUsU0FBZjtBQUNELFdBSEQsTUFHSztBQUNILDJCQUFLZSxLQUFMLENBQVdMLElBQUlDLElBQUosQ0FBU0ssR0FBcEI7QUFDRDtBQUNGLFNBUEQsRUFPR0MsS0FQSCxDQU9TLGVBQUs7QUFDWix5QkFBS0YsS0FBTCxDQUFXRyxJQUFJUCxJQUFKLENBQVNLLEdBQXBCO0FBQ0QsU0FURDtBQVVBLE9BakJPO0FBa0JSRyxZQWxCUSxvQkFrQkE7QUFDTmIsV0FBR2MsUUFBSCxDQUFZO0FBQ1ZDLG1CQUFTLGlCQUFTWCxHQUFULEVBQWE7QUFDcEJZLG9CQUFRQyxHQUFSLENBQVliLEdBQVo7QUFDRCxXQUhTO0FBSVZjO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBQU0sWUFBVztBQUNmRixvQkFBUUMsR0FBUixDQUFZQyxJQUFaO0FBQ0QsV0FGRDtBQUpVLFNBQVo7QUFRRDtBQTNCTyxLOzs7Ozs2QkE2QkE7QUFDUCxVQUFJdEIsT0FBTyxJQUFYO0FBQ0EsV0FBS1IsT0FBTCxHQUFlWSxHQUFHQyxjQUFILENBQWtCLFNBQWxCLENBQWY7QUFDQSxVQUFJWixXQUFXOEIsS0FBS0MsS0FBTCxDQUFXcEIsR0FBR0MsY0FBSCxDQUFrQixjQUFsQixDQUFYLENBQWY7QUFDQSxXQUFLWixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUdBLFFBQUgsRUFBWTtBQUNaLFlBQUdBLFNBQVNnQyxNQUFULElBQWlCLEdBQWpCLElBQXNCaEMsU0FBU2dDLE1BQVQsSUFBaUIsR0FBMUMsRUFBOEM7QUFDM0MsZUFBS2pDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7QUFDRjtBQUNELFdBQUtrQyxNQUFMO0FBQ0Q7Ozs7RUFuRGlDLGVBQUtDLEk7O2tCQUFyQnZDLE8iLCJmaWxlIjoiY2hhbmdlTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHBhblNlcnZpY2UgZnJvbSAnLi4vLi4vYXBpL3dsL3Bhbi5qcydcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi4vLi4vdXRpbC9UaXBzLmpzJ1xyXG5pbXBvcnQgU2hlZXROdW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy93bC9zaGVldE51bSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhbmdlTSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W6k+WtmOebmOeCuSdcclxuICAgIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGlzRnJpc3Q6ZmFsc2UsXHJcbiAgICBpbnZlbk1zZzonJ1xyXG4gIH1cclxuICBjb21wb25lbnRzPXtcclxuICAgIFNoZWV0TnVtOlNoZWV0TnVtXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvcGVuU2h1KCl7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCdzZXRNYScpXHJcbiAgICB9LFxyXG4gICAgZW5kUGFuKCl7Ly/nu5PmnZ/nm5jngrlcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBwYXJhbSA9IHsgIGludmVudG9yeV9zbjp0aGF0LmludmVuTXNnLmludmVudG9yeV9zbixpc19maXJzdDp3eC5nZXRTdG9yYWdlU3luYygnaXNGcmlzdCcpIH1cclxuICAgICBwYW5TZXJ2aWNlLmdldEludmVuRW5kKHBhcmFtKS50aGVuKHJlcz0+e1xyXG4gICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzRnJpc3QnLHJlcy5Cb2R5WzBdLmlzX2ZpcnN0KVxyXG4gICAgICAgICB0aGF0LiRuYXZpZ2F0ZSgncE1lbWJlcicpXHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgVGlwcy5lcnJvcihyZXMuSGVhZC5tc2cpXHJcbiAgICAgICB9XHJcbiAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICBUaXBzLmVycm9yKGVyci5IZWFkLm1zZylcclxuICAgICB9KVxyXG4gICAgfSxcclxuICAgIHdlaVNhbygpe1xyXG4gICAgICB3eC5zY2FuQ29kZSh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmFpbClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gICBvbkxvYWQoKSB7XHJcbiAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgIHRoaXMuaXNGcmlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc0ZyaXN0Jyk7XHJcbiAgICAgbGV0IGludmVuTXNnID0gSlNPTi5wYXJzZSh3eC5nZXRTdG9yYWdlU3luYygnaW52ZW50b3J5TXNnJykpO1xyXG4gICAgIHRoaXMuaW52ZW5Nc2cgPSBpbnZlbk1zZztcclxuICAgICBpZihpbnZlbk1zZyl7XHJcbiAgICAgaWYoaW52ZW5Nc2cuc3RhdHVzPT1cIjJcInx8aW52ZW5Nc2cuc3RhdHVzPT1cIjVcIil7XHJcbiAgICAgICAgdGhpcy5pc0ZyaXN0ID0gdHJ1ZTtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgfVxyXG4gIFxyXG59XHJcbiJdfQ==