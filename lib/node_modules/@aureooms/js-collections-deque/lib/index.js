'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EmptyDeque = exports.SingleElementDeque = exports.BoundedDeque = exports.UnboundedDeque = exports.ArbitrarySizeDeque = exports.Deque = exports._deque = exports.deque = undefined;

var _deque2 = require('./deque');

var _deque3 = _interopRequireDefault(_deque2);

var _deque4 = require('./_deque');

var _deque5 = _interopRequireDefault(_deque4);

var _implementation = require('./implementation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _deque3.default;
exports.deque = _deque3.default;
exports._deque = _deque5.default;
exports.Deque = _implementation.Deque;
exports.ArbitrarySizeDeque = _implementation.ArbitrarySizeDeque;
exports.UnboundedDeque = _implementation.UnboundedDeque;
exports.BoundedDeque = _implementation.BoundedDeque;
exports.SingleElementDeque = _implementation.SingleElementDeque;
exports.EmptyDeque = _implementation.EmptyDeque;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXF1ZSIsIl9kZXF1ZSIsIkRlcXVlIiwiQXJiaXRyYXJ5U2l6ZURlcXVlIiwiVW5ib3VuZGVkRGVxdWUiLCJCb3VuZGVkRGVxdWUiLCJTaW5nbGVFbGVtZW50RGVxdWUiLCJFbXB0eURlcXVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7OztRQVlDQSxLO1FBQ0FDLE07UUFDQUMsSztRQUNBQyxrQjtRQUNBQyxjO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZXF1ZSBmcm9tICcuL2RlcXVlJyA7XG5pbXBvcnQgX2RlcXVlIGZyb20gJy4vX2RlcXVlJyA7XG5pbXBvcnQge1xuXHREZXF1ZSAsXG5cdEFyYml0cmFyeVNpemVEZXF1ZSAsXG5cdFVuYm91bmRlZERlcXVlICxcblx0Qm91bmRlZERlcXVlICxcblx0U2luZ2xlRWxlbWVudERlcXVlICxcblx0RW1wdHlEZXF1ZSAsXG59IGZyb20gJy4vaW1wbGVtZW50YXRpb24nIDtcblxuZXhwb3J0IGRlZmF1bHQgZGVxdWUgO1xuXG5leHBvcnQge1xuXHRkZXF1ZSAsXG5cdF9kZXF1ZSAsXG5cdERlcXVlICxcblx0QXJiaXRyYXJ5U2l6ZURlcXVlICxcblx0VW5ib3VuZGVkRGVxdWUgLFxuXHRCb3VuZGVkRGVxdWUgLFxuXHRTaW5nbGVFbGVtZW50RGVxdWUgLFxuXHRFbXB0eURlcXVlICxcbn0gO1xuIl19