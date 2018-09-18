'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _implementation = require('./implementation');

var _deque2 = require('./_deque');

var _deque3 = _interopRequireDefault(_deque2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deque = (0, _deque3.default)(_implementation.UnboundedDeque, _implementation.BoundedDeque, _implementation.SingleElementDeque, _implementation.EmptyDeque);

exports.default = deque;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXF1ZS5qcyJdLCJuYW1lcyI6WyJkZXF1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBU0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsa0pBQWQ7O2tCQUVlQSxLIiwiZmlsZSI6ImRlcXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGVxdWUgLFxuXHRBcmJpdHJhcnlTaXplRGVxdWUgLFxuXHRVbmJvdW5kZWREZXF1ZSAsXG5cdEJvdW5kZWREZXF1ZSAsXG5cdFNpbmdsZUVsZW1lbnREZXF1ZSAsXG5cdEVtcHR5RGVxdWUgLFxufSBmcm9tICcuL2ltcGxlbWVudGF0aW9uJyA7XG5cbmltcG9ydCBfZGVxdWUgZnJvbSAnLi9fZGVxdWUnIDtcblxuY29uc3QgZGVxdWUgPSBfZGVxdWUoIFVuYm91bmRlZERlcXVlICwgQm91bmRlZERlcXVlICwgU2luZ2xlRWxlbWVudERlcXVlICwgRW1wdHlEZXF1ZSApIDtcblxuZXhwb3J0IGRlZmF1bHQgZGVxdWUgO1xuIl19