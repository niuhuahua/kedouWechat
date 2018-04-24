'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base2 = require('./base.js');

var _base3 = _interopRequireDefault(_base2);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var product = function (_base) {
    _inherits(product, _base);

    function product() {
        _classCallCheck(this, product);

        return _possibleConstructorReturn(this, (product.__proto__ || Object.getPrototypeOf(product)).apply(this, arguments));
    }

    _createClass(product, null, [{
        key: 'getGoodsType',

        /**
         * 获取商品类别
         */
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var parentid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0";
                var url, param;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                url = this.baseUrl + 'Goods1000/getGoodsType ';
                                param = { "parentid": parentid };
                                _context.next = 4;
                                return this.get(url, param);

                            case 4:
                                return _context.abrupt('return', _context.sent);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getGoodsType() {
                return _ref.apply(this, arguments);
            }

            return getGoodsType;
        }()
    }]);

    return product;
}(_base3.default);

exports.default = product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuanMiXSwibmFtZXMiOlsicHJvZHVjdCIsInBhcmVudGlkIiwidXJsIiwiYmFzZVVybCIsInBhcmFtIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7OztvQkFHMEJDLFEsdUVBQVMsRzs7Ozs7O0FBQ3pCQyxtQyxHQUFTLEtBQUtDLE87QUFDZEMscUMsR0FBUSxFQUFDLFlBQVdILFFBQVosRTs7dUNBQ0QsS0FBS0ksR0FBTCxDQUFTSCxHQUFULEVBQWFFLEtBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVBBSixPIiwiZmlsZSI6InByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UnXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9kdWN0IGV4dGVuZHMgYmFzZXtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZWG5ZOB57G75YirXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBnZXRHb29kc1R5cGUocGFyZW50aWQ9XCIwXCIpe1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH1Hb29kczEwMDAvZ2V0R29vZHNUeXBlIGA7XHJcbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XCJwYXJlbnRpZFwiOnBhcmVudGlkfTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXQodXJsLHBhcmFtKTtcclxuICAgIH1cclxuICBcclxufSJdfQ==