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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pKu = function (_wepy$page) {
  _inherits(pKu, _wepy$page);

  function pKu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pKu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pKu.__proto__ || Object.getPrototypeOf(pKu)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '库存盘点'
    }, _this.data = {
      quji: false,
      zhenji: false,
      cunji: false,
      cunCode: '',
      zhenCode: '',
      areaNameCode: '',
      zhenNameCode: '',
      cunNameCode: '',
      areaCode: '',
      arrayQu: [],
      arrayZhen: [],
      arrayCun: [],
      index: 0,
      indexZhen: 0,
      indexCun: 0,
      res: '',
      level: ''
    }, _this.methods = {
      bindZhen: function bindZhen() {
        _Tips2.default.error("请先选择区级库");
      },
      bindCun: function bindCun() {
        _Tips2.default.error("请先选择镇级库");
      },
      bindQuChange: function bindQuChange(e) {
        var that = this;
        this.index = e.detail.value;
        this.areaCode = this.arrayQu[e.detail.value].ware_id;
        this.areaNameCode = this.arrayQu[e.detail.value].ware_name;
        this.level = this.arrayQu[e.detail.value].level;
        this.quji = true;
        var parm = { parent_id: this.areaCode };
        _pan2.default.getCityList(parm).then(function (res) {
          if (res.Head.code == "S0000") {
            that.arrayZhen = res.Body;
            if (that.zhenji) {
              that.zhenNameCode = res.Body[0].ware_name;
              that.zhenCode = res.Body[0].ware_id;
              that.level = res.Body[0].level;
            }
            that.$apply();
            if (that.cunji) {
              var _parm = { parent_id: that.zhenCode };
              _pan2.default.getCityList(_parm).then(function (res) {
                if (res.Head.code == "S0000") {
                  that.arrayCun = res.Body;
                  if (that.cunji) {
                    that.cunNameCode = that.arrayCun[0].ware_name;
                    that.cunCode = that.arrayCun[0].ware_id;
                    that.level = that.arrayCun[0].level;
                  }
                  that.$apply();
                }
              }).catch(function (err) {
                console.log("获取村失败", err);
              });
            }
          }
        }).catch(function (err) {
          console.log("获取镇失败", err);
        });
      },
      bindZhenChange: function bindZhenChange(e) {
        if (this.quji) {
          this.indexZhen = e.detail.value;
          this.zhenCode = this.arrayZhen[e.detail.value].ware_id;
          this.zhenNameCode = this.arrayZhen[e.detail.value].ware_name;
          this.level = this.arrayZhen[e.detail.value].level;
          this.zhenji = true;
          var parm = { parent_id: this.zhenCode };
          var that = this;
          _pan2.default.getCityList(parm).then(function (res) {
            if (res.Head.code == "S0000") {
              that.arrayCun = res.Body;
              if (that.cunji) {
                that.cunNameCode = res.Body[0].ware_name;
                that.cunCode = res.Body[0].ware_id;
                that.level = res.Body[0].level;
              }
              that.$apply();
            }
          }).catch(function (err) {
            console.log("获取村失败", err);
          });
        } else {
          _Tips2.default.error("请先选择区级库");
        }
      },
      bindCunChange: function bindCunChange(e) {
        if (this.zhenji) {
          this.indexCun = e.detail.value;
          this.cunCode = this.arrayCun[e.detail.value].ware_id;
          this.cunNameCode = this.arrayCun[e.detail.value].ware_name;
          this.level = this.arrayCun[e.detail.value].level;
          this.cunji = true;
        } else {
          _Tips2.default.error("请先选择镇级库");
        }
      },
      toPandian: function toPandian() {
        var ware_id = '';
        var that = this;
        if (this.areaCode) {
          ware_id = this.areaCode;
          if (this.zhenCode) {
            ware_id = this.zhenCode;
            if (this.cunCode) {
              ware_id = this.cunCode;
            }
          }
        }
        var kuLoact = '';
        if (that.areaNameCode) {
          kuLoact = '\u5C71\u4E1C\u7701' + that.areaNameCode;
          if (that.zhenNameCode) {
            kuLoact = '\u5C71\u4E1C\u7701' + that.areaNameCode + that.zhenNameCode;
            if (that.cunNameCode) {
              kuLoact = '\u5C71\u4E1C\u7701' + that.areaNameCode + that.zhenNameCode + that.cunNameCode;
              //   wx.setStorageSync('kuLoact', kuLoact)
            } else {
                //   wx.setStorageSync('kuLoact', kuLoact)
              }
          } else {
              //  wx.setStorageSync('kuLoact', kuLoact)
            }
        }
        var param = { ware_id: ware_id, level: this.level };
        _pan2.default.getStorageLocation(param).then(function (res) {
          if (res.Head.code == "S0000") {
            var paramS = { bin_ware_id: res.Body[0].bin_ware_id, bin_id: res.Body[0].bin_id, fullname: kuLoact };
            _pan2.default.getPanStart(paramS).then(function (resT) {
              if (resT.Head.code == "S0000") {
                wx.setStorageSync('inventoryMsg', JSON.stringify(resT.Body[0]));
                that.$navigate('changeM');
              } else {
                _Tips2.default.error(resT.Head.msg);
              }
            }).catch(function (errT) {
              _Tips2.default.error(errT.Head.msg);
            });
          } else {
            _Tips2.default.error(res.Head.msg);
          }
        }).catch(function (err) {
          _Tips2.default.error(err.Head.msg);
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pKu, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                _pan2.default.getAreaList().then(function (res) {
                  if (res.Head.code == "S0000") {
                    that.arrayQu = res.Body;
                    that.$apply();
                    wx.hideLoading();
                  }
                }).catch(function (err) {
                  console.log(err);
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return pKu;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(pKu , 'pages/wl/pkucun'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBrdWN1bi5qcyJdLCJuYW1lcyI6WyJwS3UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInF1amkiLCJ6aGVuamkiLCJjdW5qaSIsImN1bkNvZGUiLCJ6aGVuQ29kZSIsImFyZWFOYW1lQ29kZSIsInpoZW5OYW1lQ29kZSIsImN1bk5hbWVDb2RlIiwiYXJlYUNvZGUiLCJhcnJheVF1IiwiYXJyYXlaaGVuIiwiYXJyYXlDdW4iLCJpbmRleCIsImluZGV4WmhlbiIsImluZGV4Q3VuIiwicmVzIiwibGV2ZWwiLCJtZXRob2RzIiwiYmluZFpoZW4iLCJlcnJvciIsImJpbmRDdW4iLCJiaW5kUXVDaGFuZ2UiLCJlIiwidGhhdCIsImRldGFpbCIsInZhbHVlIiwid2FyZV9pZCIsIndhcmVfbmFtZSIsInBhcm0iLCJwYXJlbnRfaWQiLCJnZXRDaXR5TGlzdCIsInRoZW4iLCJIZWFkIiwiY29kZSIsIkJvZHkiLCIkYXBwbHkiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJiaW5kWmhlbkNoYW5nZSIsImJpbmRDdW5DaGFuZ2UiLCJ0b1BhbmRpYW4iLCJrdUxvYWN0IiwicGFyYW0iLCJnZXRTdG9yYWdlTG9jYXRpb24iLCJwYXJhbVMiLCJiaW5fd2FyZV9pZCIsImJpbl9pZCIsImZ1bGxuYW1lIiwiZ2V0UGFuU3RhcnQiLCJyZXNUIiwid3giLCJzZXRTdG9yYWdlU3luYyIsIkpTT04iLCJzdHJpbmdpZnkiLCIkbmF2aWdhdGUiLCJtc2ciLCJlcnJUIiwiZ2V0QXJlYUxpc3QiLCJoaWRlTG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNoQkMsTSxHQUFTO0FBQ1JDLDhCQUF3QjtBQURoQixLLFFBR1ZDLEksR0FBTztBQUNQQyxZQUFLLEtBREU7QUFFUEMsY0FBTyxLQUZBO0FBR1BDLGFBQU0sS0FIQztB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RCxFQWdCR3JCLEtBaEJILENBZ0JTLGVBQUs7QUFDVix5QkFBS2pCLEtBQUwsQ0FBV29CLElBQUlQLElBQUosQ0FBU3lCLEdBQXBCO0FBQ0gsU0FsQkQ7QUFtQkY7QUFuSU0sSzs7Ozs7Ozs7Ozs7O0FBdUlGbEMsb0IsR0FBTyxJOztBQUNYLDhCQUFlb0MsV0FBZixHQUE2QjVCLElBQTdCLENBQWtDLGVBQUs7QUFDbkMsc0JBQUdoQixJQUFJaUIsSUFBSixDQUFTQyxJQUFULElBQWUsT0FBbEIsRUFBMEI7QUFDeEJWLHlCQUFLZCxPQUFMLEdBQWVNLElBQUltQixJQUFuQjtBQUNBWCx5QkFBS1ksTUFBTDtBQUNDaUIsdUJBQUdRLFdBQUg7QUFDRjtBQUNKLGlCQU5ELEVBTUd4QixLQU5ILENBTVMsZUFBSztBQUNWQywwQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0gsaUJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvSjZCLGVBQUtzQixJOztrQkFBakJqRSxHIiwiZmlsZSI6InBrdWN1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xyXG5pbXBvcnQgcGFuRGlhblNyZXZpY2UgZnJvbSAnLi4vLi4vYXBpL3dsL3Bhbi5qcydcclxuaW1wb3J0IFRpcHMgZnJvbSAnLi4vLi4vdXRpbC9UaXBzLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwS3UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W6k+WtmOebmOeCuSdcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgcXVqaTpmYWxzZSxcclxuICAgIHpoZW5qaTpmYWxzZSxcclxuICAgIGN1bmppOmZhbHNlLFxyXG4gICAgY3VuQ29kZTogJycsXHJcbiAgICB6aGVuQ29kZTogJycsXHJcbiAgICBhcmVhTmFtZUNvZGU6JycsXHJcbiAgICB6aGVuTmFtZUNvZGU6JycsXHJcbiAgICBjdW5OYW1lQ29kZTonJyxcclxuICAgIGFyZWFDb2RlOiAnJyxcclxuICAgIGFycmF5UXU6W10sXHJcbiAgICBhcnJheVpoZW46W10sXHJcbiAgICBhcnJheUN1bjpbXSxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgaW5kZXhaaGVuOiAwLFxyXG4gICAgaW5kZXhDdW46IDAsXHJcbiAgICByZXM6JycsXHJcbiAgICBsZXZlbDonJ1xyXG4gIH1cclxuICBtZXRob2RzPXtcclxuICAgICAgYmluZFpoZW4oKXtcclxuICAgICAgICAgIFRpcHMuZXJyb3IoXCLor7flhYjpgInmi6nljLrnuqflupNcIilcclxuICAgICAgfSxcclxuICAgICAgYmluZEN1bigpe1xyXG4gICAgICAgICAgICBUaXBzLmVycm9yKFwi6K+35YWI6YCJ5oup6ZWH57qn5bqTXCIpXHJcbiAgICAgIH0sXHJcbiAgICAgYmluZFF1Q2hhbmdlIChlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhQ29kZSA9IHRoaXMuYXJyYXlRdVtlLmRldGFpbC52YWx1ZV0ud2FyZV9pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWVDb2RlID0gdGhpcy5hcnJheVF1W2UuZGV0YWlsLnZhbHVlXS53YXJlX25hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5hcnJheVF1W2UuZGV0YWlsLnZhbHVlXS5sZXZlbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWppID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICBsZXQgcGFybSAgPSB7cGFyZW50X2lkOnRoaXMuYXJlYUNvZGV9XHJcbiAgICAgICAgICAgICAgICBwYW5EaWFuU3JldmljZS5nZXRDaXR5TGlzdChwYXJtKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgIGlmKHJlcy5IZWFkLmNvZGU9PVwiUzAwMDBcIil7XHJcbiAgICAgICAgICAgICAgICAgICB0aGF0LmFycmF5WmhlbiA9IHJlcy5Cb2R5O1xyXG4gICAgICAgICAgICAgICAgICAgaWYodGhhdC56aGVuamkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuemhlbk5hbWVDb2RlID0gcmVzLkJvZHlbMF0ud2FyZV9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuemhlbkNvZGUgPXJlcy5Cb2R5WzBdLndhcmVfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sZXZlbCA9IHJlcy5Cb2R5WzBdLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoYXQuY3Vuamkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJtICA9IHtwYXJlbnRfaWQ6ICB0aGF0LnpoZW5Db2RlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhbkRpYW5TcmV2aWNlLmdldENpdHlMaXN0KHBhcm0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmFycmF5Q3VuID0gcmVzLkJvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5jdW5qaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmN1bk5hbWVDb2RlID0gIHRoYXQuYXJyYXlDdW5bMF0ud2FyZV9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jdW5Db2RlID0gdGhhdC5hcnJheUN1blswXS53YXJlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sZXZlbCA9IHRoYXQuYXJyYXlDdW5bMF0ubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W5p2R5aSx6LSlXCIsZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pICBcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPlumVh+Wksei0pVwiLGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYmluZFpoZW5DaGFuZ2UoZSl7XHJcbiAgICAgICAgaWYodGhpcy5xdWppKXtcclxuICAgICAgICAgIHRoaXMuaW5kZXhaaGVuID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnpoZW5Db2RlID0gdGhpcy5hcnJheVpoZW5bZS5kZXRhaWwudmFsdWVdLndhcmVfaWQ7XHJcbiAgICAgICAgICB0aGlzLnpoZW5OYW1lQ29kZSA9IHRoaXMuYXJyYXlaaGVuW2UuZGV0YWlsLnZhbHVlXS53YXJlX25hbWU7XHJcbiAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5hcnJheVpoZW5bZS5kZXRhaWwudmFsdWVdLmxldmVsXHJcbiAgICAgICAgICB0aGlzLnpoZW5qaSA9IHRydWU7XHJcbiAgICAgICAgICAgbGV0IHBhcm0gID0ge3BhcmVudF9pZDp0aGlzLnpoZW5Db2RlfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgICAgIHBhbkRpYW5TcmV2aWNlLmdldENpdHlMaXN0KHBhcm0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgICAgICAgIHRoYXQuYXJyYXlDdW4gPSByZXMuQm9keTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoYXQuY3Vuamkpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGF0LmN1bk5hbWVDb2RlID0gcmVzLkJvZHlbMF0ud2FyZV9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGF0LmN1bkNvZGUgPSByZXMuQm9keVswXS53YXJlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGF0LmxldmVsID0gIHJlcy5Cb2R5WzBdLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W5p2R5aSx6LSlXCIsZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgVGlwcy5lcnJvcihcIuivt+WFiOmAieaLqeWMuue6p+W6k1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgfSxcclxuICAgICBiaW5kQ3VuQ2hhbmdlKGUpe1xyXG4gICAgICAgICAgaWYodGhpcy56aGVuamkpe1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Q3VuID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VuQ29kZSA9IHRoaXMuYXJyYXlDdW5bZS5kZXRhaWwudmFsdWVdLndhcmVfaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3VuTmFtZUNvZGUgPSB0aGlzLmFycmF5Q3VuW2UuZGV0YWlsLnZhbHVlXS53YXJlX25hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmFycmF5Q3VuW2UuZGV0YWlsLnZhbHVlXS5sZXZlbFxyXG4gICAgICAgICAgICB0aGlzLmN1bmppID0gdHJ1ZTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgVGlwcy5lcnJvcihcIuivt+WFiOmAieaLqemVh+e6p+W6k1wiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgfSxcclxuICAgdG9QYW5kaWFuKCl7XHJcbiAgICAgICBsZXQgd2FyZV9pZCA9ICcnO1xyXG4gICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgaWYodGhpcy5hcmVhQ29kZSl7XHJcbiAgICAgICAgICAgd2FyZV9pZCA9IHRoaXMuYXJlYUNvZGVcclxuICAgICAgICAgaWYodGhpcy56aGVuQ29kZSl7XHJcbiAgICAgICAgICAgIHdhcmVfaWQgPSB0aGlzLnpoZW5Db2RlXHJcbiAgICAgICAgICAgaWYodGhpcy5jdW5Db2RlKXtcclxuICAgICAgICAgICAgIHdhcmVfaWQgPSB0aGlzLmN1bkNvZGVcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgIGxldCBrdUxvYWN0ID0gJyc7XHJcbiAgICAgICBpZih0aGF0LmFyZWFOYW1lQ29kZSl7XHJcbiAgICAgICAga3VMb2FjdCA9IGDlsbHkuJznnIEke3RoYXQuYXJlYU5hbWVDb2RlfWA7XHJcbiAgICAgICAgIGlmKHRoYXQuemhlbk5hbWVDb2RlKXtcclxuICAgICAgICAgICAgIGt1TG9hY3QgPSBg5bGx5Lic55yBJHt0aGF0LmFyZWFOYW1lQ29kZX0ke3RoYXQuemhlbk5hbWVDb2RlfWA7XHJcbiAgICAgICAgICAgIGlmKHRoYXQuY3VuTmFtZUNvZGUpe1xyXG4gICAgICAgICAgICAga3VMb2FjdCAgPSBg5bGx5Lic55yBJHt0aGF0LmFyZWFOYW1lQ29kZX0ke3RoYXQuemhlbk5hbWVDb2RlfSR7dGhhdC5jdW5OYW1lQ29kZX1gO1xyXG4gICAgICAgICAgICAvLyAgIHd4LnNldFN0b3JhZ2VTeW5jKCdrdUxvYWN0Jywga3VMb2FjdClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgd3guc2V0U3RvcmFnZVN5bmMoJ2t1TG9hY3QnLCBrdUxvYWN0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgd3guc2V0U3RvcmFnZVN5bmMoJ2t1TG9hY3QnLCBrdUxvYWN0KVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIGxldCBwYXJhbSAgPSB7IHdhcmVfaWQ6d2FyZV9pZCxsZXZlbDp0aGlzLmxldmVsIH1cclxuICAgICAgcGFuRGlhblNyZXZpY2UuZ2V0U3RvcmFnZUxvY2F0aW9uKHBhcmFtKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgaWYocmVzLkhlYWQuY29kZT09XCJTMDAwMFwiKXtcclxuICAgICAgICAgICAgIGxldCBwYXJhbVMgPSB7YmluX3dhcmVfaWQ6cmVzLkJvZHlbMF0uYmluX3dhcmVfaWQsYmluX2lkOnJlcy5Cb2R5WzBdLmJpbl9pZCxmdWxsbmFtZTprdUxvYWN0IH1cclxuICAgICAgICAgICAgICBwYW5EaWFuU3JldmljZS5nZXRQYW5TdGFydChwYXJhbVMpLnRoZW4ocmVzVD0+e1xyXG4gICAgICAgICAgICAgIGlmKHJlc1QuSGVhZC5jb2RlPT1cIlMwMDAwXCIpe1xyXG4gICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaW52ZW50b3J5TXNnJyxKU09OLnN0cmluZ2lmeShyZXNULkJvZHlbMF0pKVxyXG4gICAgICAgICAgICAgICAgICB0aGF0LiRuYXZpZ2F0ZSgnY2hhbmdlTScpXHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgVGlwcy5lcnJvcihyZXNULkhlYWQubXNnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyVD0+e1xyXG4gICAgICAgICAgICAgIFRpcHMuZXJyb3IoZXJyVC5IZWFkLm1zZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgIFRpcHMuZXJyb3IocmVzLkhlYWQubXNnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgIFRpcHMuZXJyb3IoZXJyLkhlYWQubXNnKVxyXG4gICAgICB9KVxyXG4gICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxvYWQoKXtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHBhbkRpYW5TcmV2aWNlLmdldEFyZWFMaXN0KCkudGhlbihyZXM9PntcclxuICAgICAgICBpZihyZXMuSGVhZC5jb2RlPT1cIlMwMDAwXCIpe1xyXG4gICAgICAgICAgdGhhdC5hcnJheVF1ID0gcmVzLkJvZHk7XHJcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19