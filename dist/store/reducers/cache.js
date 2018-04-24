'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _cache = require('./../types/cache.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _cache.SAVE, function (state, action) {
  var _action$payload = action.payload,
      key = _action$payload.key,
      value = _action$payload.value;

  return _extends({}, state, _defineProperty({}, key, value));
}), {
  member: null,
  card: null,
  reduce: null,
  shop: null,
  status: null,
  notices: null,
  categories: null,
  limit: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhY2hlLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImtleSIsInZhbHVlIiwibWVtYmVyIiwiY2FyZCIsInJlZHVjZSIsInNob3AiLCJzdGF0dXMiLCJub3RpY2VzIiwiY2F0ZWdvcmllcyIsImxpbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7O2tCQUVlLDRFQUNMQSxLQURLLEVBQ0VDLE1BREYsRUFDVTtBQUFBLHdCQUNBQSxPQUFPQyxPQURQO0FBQUEsTUFDZEMsR0FEYyxtQkFDZEEsR0FEYztBQUFBLE1BQ1RDLEtBRFMsbUJBQ1RBLEtBRFM7O0FBRXJCLHNCQUNLSixLQURMLHNCQUVHRyxHQUZILEVBRVNDLEtBRlQ7QUFJRCxDQVBZLEdBUVo7QUFDREMsVUFBUSxJQURQO0FBRURDLFFBQU0sSUFGTDtBQUdEQyxVQUFRLElBSFA7QUFJREMsUUFBTSxJQUpMO0FBS0RDLFVBQVEsSUFMUDtBQU1EQyxXQUFTLElBTlI7QUFPREMsY0FBWSxJQVBYO0FBUURDLFNBQU87QUFSTixDQVJZLEMiLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuaW1wb3J0IHsgU0FWRSB9IGZyb20gJy4uL3R5cGVzL2NhY2hlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XHJcbiAgW1NBVkVdIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBjb25zdCB7a2V5LCB2YWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH1cclxuICB9XHJcbn0sIHtcclxuICBtZW1iZXI6IG51bGwsXHJcbiAgY2FyZDogbnVsbCxcclxuICByZWR1Y2U6IG51bGwsXHJcbiAgc2hvcDogbnVsbCxcclxuICBzdGF0dXM6IG51bGwsXHJcbiAgbm90aWNlczogbnVsbCxcclxuICBjYXRlZ29yaWVzOiBudWxsLFxyXG4gIGxpbWl0OiBudWxsXHJcbn0pXHJcbiJdfQ==