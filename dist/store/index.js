'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require('./../npm/redux/lib/index.js');

var _reduxPromise = require('./../npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configStore() {
  return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZ1N0b3JlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLFc7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFdBQVQsR0FBd0I7QUFDckMsU0FBTyw0Q0FBeUIsbURBQXpCLENBQVA7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHByb21pc2VNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXByb21pc2UnXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlnU3RvcmUgKCkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHByb21pc2VNaWRkbGV3YXJlKSlcclxufVxyXG4iXX0=