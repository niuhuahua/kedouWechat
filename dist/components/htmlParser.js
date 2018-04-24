'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../plugins/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLParser = function (_wepy$component) {
  _inherits(HTMLParser, _wepy$component);

  function HTMLParser() {
    var _ref;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, HTMLParser);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTMLParser.__proto__ || Object.getPrototypeOf(HTMLParser)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      parserName: {
        type: String,
        default: 'htmlParserName'
      },
      parserContent: {
        type: String,
        default: '<p style=\'font-size: 32rpx; padding: 30rpx 0; text-align: center;\'>没有任何内容</p>'
      },
      parserType: {
        type: String,
        default: 'html'
      },
      parserPadding: {
        type: Number,
        default: 0
      }
    }, _this.data = {
      htmlParserTpl: {},
      bindData: {}
    }, _this.events = {
      'htmlParser-broadcast': function htmlParserBroadcast($event) {}
    }, _this.methods = {
      htmlParserNotice: function htmlParserNotice() {
        this.htmlParse();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTMLParser, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.htmlParse();

              case 1:
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
  }, {
    key: 'wxParseImgLoad',
    value: function wxParseImgLoad(image) {
      var imgInfo = image.detail;
    }
  }, {
    key: 'htmlParse',
    value: function htmlParse() {
      /**
       * WxParse.wxParse(bindName , type, data, target,imagePadding)
       * 1.bindName绑定的数据名(必填)
       * 2.type可以为html或者md(必填)
       * 3.data为传入的具体数据(必填)
       * 4.target为Page对象,一般为this(必填)
       * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
       */
      try {
        var htmlContent = _wxParse2.default.wxParse(this.parserName, this.parserType, this.parserContent || this.props.parserContent.default, this, this.parserPadding);
        //       this.htmlParserTpl = this[this.parserName];
        this.htmlParserTpl = htmlContent[this.parserName];
        this.$apply();
      } catch (e) {
        console.warn('kinerHtmlParser:', '没有任何内容需要转换', e);
      }
    }
  }, {
    key: 'wxParseImgTap',
    value: function wxParseImgTap(e) {
      _wxParse2.default.wxParseImgTap(e, this.bindData);
    }
  }]);

  return HTMLParser;
}(_wepy2.default.component);

exports.default = HTMLParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxQYXJzZXIuanMiXSwibmFtZXMiOlsiSFRNTFBhcnNlciIsInByb3BzIiwicGFyc2VyTmFtZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGFyc2VyQ29udGVudCIsInBhcnNlclR5cGUiLCJwYXJzZXJQYWRkaW5nIiwiTnVtYmVyIiwiZGF0YSIsImh0bWxQYXJzZXJUcGwiLCJiaW5kRGF0YSIsImV2ZW50cyIsIiRldmVudCIsIm1ldGhvZHMiLCJodG1sUGFyc2VyTm90aWNlIiwiaHRtbFBhcnNlIiwiaW1hZ2UiLCJpbWdJbmZvIiwiZGV0YWlsIiwiaHRtbENvbnRlbnQiLCJ3eFBhcnNlIiwiJGFwcGx5IiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwid3hQYXJzZUltZ1RhcCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQUROO0FBS05DLHFCQUFlO0FBQ2JILGNBQU1DLE1BRE87QUFFYkMsaUJBQVM7QUFGSSxPQUxUO0FBU05FLGtCQUFZO0FBQ1ZKLGNBQU1DLE1BREk7QUFFVkMsaUJBQVM7QUFGQyxPQVROO0FBYU5HLHFCQUFlO0FBQ2JMLGNBQU1NLE1BRE87QUFFYkosaUJBQVM7QUFGSTtBQWJULEssUUFtQlJLLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUtQQyxNLEdBQVM7QUFDUCw4QkFBd0IsNkJBQUNDLE1BQUQsRUFBcUIsQ0FDNUM7QUFGTSxLLFFBS1RDLE8sR0FBVTtBQUNSQyxzQkFEUSw4QkFDWTtBQUNsQixhQUFLQyxTQUFMO0FBQ0Q7QUFITyxLOzs7Ozs7Ozs7OztBQU9SLHFCQUFLQSxTQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR2NDLEssRUFBTztBQUNyQixVQUFJQyxVQUFVRCxNQUFNRSxNQUFwQjtBQUNEOzs7Z0NBRVk7QUFDWDs7Ozs7Ozs7QUFRQSxVQUFJO0FBQ0YsWUFBSUMsY0FBYyxrQkFBUUMsT0FBUixDQUFnQixLQUFLcEIsVUFBckIsRUFBaUMsS0FBS0ssVUFBdEMsRUFBa0QsS0FBS0QsYUFBTCxJQUFzQixLQUFLTCxLQUFMLENBQVdLLGFBQVgsQ0FBeUJELE9BQWpHLEVBQTBHLElBQTFHLEVBQWdILEtBQUtHLGFBQXJILENBQWxCO0FBQ1I7QUFDUSxhQUFLRyxhQUFMLEdBQXFCVSxZQUFZLEtBQUtuQixVQUFqQixDQUFyQjtBQUNBLGFBQUtxQixNQUFMO0FBQ0QsT0FMRCxDQUtFLE9BQU9DLENBQVAsRUFBVTtBQUNWQyxnQkFBUUMsSUFBUixDQUFhLGtCQUFiLEVBQWlDLFlBQWpDLEVBQStDRixDQUEvQztBQUNEO0FBQ0Y7OztrQ0FFY0EsQyxFQUFHO0FBQ2hCLHdCQUFRRyxhQUFSLENBQXNCSCxDQUF0QixFQUF5QixLQUFLWixRQUE5QjtBQUNEOzs7O0VBakVxQyxlQUFLZ0IsUzs7a0JBQXhCNUIsVSIsImZpbGUiOiJodG1sUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgV3hQYXJzZSBmcm9tICcuLi9wbHVnaW5zL3d4UGFyc2Uvd3hQYXJzZS5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTFBhcnNlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBwYXJzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdodG1sUGFyc2VyTmFtZSdcclxuICAgICAgfSxcclxuICAgICAgcGFyc2VyQ29udGVudDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnPHAgc3R5bGU9XFwnZm9udC1zaXplOiAzMnJweDsgcGFkZGluZzogMzBycHggMDsgdGV4dC1hbGlnbjogY2VudGVyO1xcJz7msqHmnInku7vkvZXlhoXlrrk8L3A+J1xyXG4gICAgICB9LFxyXG4gICAgICBwYXJzZXJUeXBlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdodG1sJ1xyXG4gICAgICB9LFxyXG4gICAgICBwYXJzZXJQYWRkaW5nOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGh0bWxQYXJzZXJUcGw6IHt9LFxyXG4gICAgICBiaW5kRGF0YToge31cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICdodG1sUGFyc2VyLWJyb2FkY2FzdCc6ICgkZXZlbnQsIC4uLmFyZ3MpID0+IHtcclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBodG1sUGFyc2VyTm90aWNlICgpIHtcclxuICAgICAgICB0aGlzLmh0bWxQYXJzZSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkxvYWQgKCkge1xyXG4gICAgICB0aGlzLmh0bWxQYXJzZSgpXHJcbiAgICB9O1xyXG5cclxuICAgIHd4UGFyc2VJbWdMb2FkIChpbWFnZSkge1xyXG4gICAgICBsZXQgaW1nSW5mbyA9IGltYWdlLmRldGFpbFxyXG4gICAgfTtcclxuXHJcbiAgICBodG1sUGFyc2UgKCkge1xyXG4gICAgICAvKipcclxuICAgICAgICogV3hQYXJzZS53eFBhcnNlKGJpbmROYW1lICwgdHlwZSwgZGF0YSwgdGFyZ2V0LGltYWdlUGFkZGluZylcclxuICAgICAgICogMS5iaW5kTmFtZee7keWumueahOaVsOaNruWQjSjlv4XloaspXHJcbiAgICAgICAqIDIudHlwZeWPr+S7peS4umh0bWzmiJbogIVtZCjlv4XloaspXHJcbiAgICAgICAqIDMuZGF0YeS4uuS8oOWFpeeahOWFt+S9k+aVsOaNrijlv4XloaspXHJcbiAgICAgICAqIDQudGFyZ2V05Li6UGFnZeWvueixoSzkuIDoiKzkuLp0aGlzKOW/heWhqylcclxuICAgICAgICogNS5pbWFnZVBhZGRpbmfkuLrlvZPlm77niYfoh6rpgILlupTmmK/lt6blj7PnmoTljZXkuIBwYWRkaW5nKOm7mOiupOS4ujAs5Y+v6YCJKVxyXG4gICAgICAgKi9cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgaHRtbENvbnRlbnQgPSBXeFBhcnNlLnd4UGFyc2UodGhpcy5wYXJzZXJOYW1lLCB0aGlzLnBhcnNlclR5cGUsIHRoaXMucGFyc2VyQ29udGVudCB8fCB0aGlzLnByb3BzLnBhcnNlckNvbnRlbnQuZGVmYXVsdCwgdGhpcywgdGhpcy5wYXJzZXJQYWRkaW5nKVxyXG4vLyAgICAgICB0aGlzLmh0bWxQYXJzZXJUcGwgPSB0aGlzW3RoaXMucGFyc2VyTmFtZV07XHJcbiAgICAgICAgdGhpcy5odG1sUGFyc2VyVHBsID0gaHRtbENvbnRlbnRbdGhpcy5wYXJzZXJOYW1lXVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybigna2luZXJIdG1sUGFyc2VyOicsICfmsqHmnInku7vkvZXlhoXlrrnpnIDopoHovazmjaInLCBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3hQYXJzZUltZ1RhcCAoZSkge1xyXG4gICAgICBXeFBhcnNlLnd4UGFyc2VJbWdUYXAoZSwgdGhpcy5iaW5kRGF0YSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0=