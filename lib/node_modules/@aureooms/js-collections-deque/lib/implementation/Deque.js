"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Deque;

var _jsError = require("@aureooms/js-error");

function Deque() {}

Deque.prototype.len = function () {

	throw new _jsError.NotImplementedError("len");
};

Deque.prototype.capacity = function () {

	throw new _jsError.NotImplementedError("capcity");
};

Deque.prototype.empty = function () {

	return this.len() === 0;
};

Deque.prototype[Symbol.iterator] = function () {

	return this.values();
};

Deque.prototype.values = function () {

	throw new _jsError.NotImplementedError("values");
};

Deque.prototype.append = function (x) {

	throw new _jsError.NotImplementedError("append");
};

Deque.prototype.appendleft = function (x) {

	throw new _jsError.NotImplementedError("appendleft");
};

Deque.prototype.clear = function () {

	throw new _jsError.NotImplementedError("clear");
};

Deque.prototype.copy = function () {

	throw new _jsError.NotImplementedError("copy");
};

Deque.prototype.count = function (x) {

	var c = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var element = _step.value;
			if (element === x) ++c;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return c;
};

Deque.prototype.extend = function (iterable) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {

		for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var x = _step2.value;
			this.append(x);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return this;
};

Deque.prototype.extendleft = function (iterable) {
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {

		for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var x = _step3.value;
			this.appendleft(x);
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	return this;
};

Deque.prototype._checkbounds = function (i) {

	if (i < 0 || i >= this.len()) throw new _jsError.IndexError(i);
};

Deque.prototype._where = function (i) {

	throw new _jsError.NotImplementedError("_where");
};

Deque.prototype.get = function (i) {
	var _where = this._where(i),
	    _where2 = _slicedToArray(_where, 2),
	    container = _where2[0],
	    index = _where2[1];

	return container[index];
};

Deque.prototype.set = function (i, value) {
	var _where3 = this._where(i),
	    _where4 = _slicedToArray(_where3, 2),
	    container = _where4[0],
	    index = _where4[1];

	container[index] = value;

	return this;
};

Deque.prototype._range = regeneratorRuntime.mark(function _callee(start, stop) {
	var i;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					i = start;

				case 1:
					if (!(i < stop)) {
						_context.next = 7;
						break;
					}

					_context.next = 4;
					return [i, this.get(i)];

				case 4:
					++i;
					_context.next = 1;
					break;

				case 7:
				case "end":
					return _context.stop();
			}
		}
	}, _callee, this);
});

Deque.prototype.index = function (x) {
	var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.len();
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {

		for (var _iterator4 = this._range(start, stop)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var _step4$value = _slicedToArray(_step4.value, 2),
			    i = _step4$value[0],
			    element = _step4$value[1];

			if (element === x) return i;
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	throw new _jsError.ValueError("not found");
};

Deque.prototype.pop = function () {

	throw new _jsError.NotImplementedError("pop");
};

Deque.prototype.popleft = function () {

	throw new _jsError.NotImplementedError("popleft");
};

Deque.prototype.insert = function (i, x) {

	this._checkbounds(i);

	this.append(x);

	var j = this.len() - 1;

	for (; i < j; --j) {

		var a = this.get(j);
		this.set(j, this.get(j - 1));
		this.set(j - 1, a);
	}

	return this;
};

Deque.prototype.delete = function (i) {

	this._checkbounds(i);

	var len = this.len() - 1;

	for (; i < len; ++i) {
		this.set(i, this.get(i + 1));
	}this.pop();

	return this;
};

Deque.prototype.remove = function (value) {

	var i = this.index(value);

	this.delete(i);

	return this;
};

Deque.prototype.reverse = function () {

	for (var i = 0, j = this.len(); i < --j; ++i) {

		var a = this.get(i);
		var b = this.get(j);
		this.set(i, b);
		this.set(j, a);
	}

	return this;
};

Deque.prototype.rotate = function (n) {

	if (n > 0) {

		while (n-- > 0) {
			this.appendleft(this.pop());
		}
	} else if (n < 0) {

		while (n++ < 0) {
			this.append(this.popleft());
		}
	}

	return this;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbXBsZW1lbnRhdGlvbi9EZXF1ZS5qcyJdLCJuYW1lcyI6WyJEZXF1ZSIsInByb3RvdHlwZSIsImxlbiIsImNhcGFjaXR5IiwiZW1wdHkiLCJTeW1ib2wiLCJpdGVyYXRvciIsInZhbHVlcyIsImFwcGVuZCIsIngiLCJhcHBlbmRsZWZ0IiwiY2xlYXIiLCJjb3B5IiwiY291bnQiLCJjIiwiZWxlbWVudCIsImV4dGVuZCIsIml0ZXJhYmxlIiwiZXh0ZW5kbGVmdCIsIl9jaGVja2JvdW5kcyIsImkiLCJfd2hlcmUiLCJnZXQiLCJjb250YWluZXIiLCJpbmRleCIsInNldCIsInZhbHVlIiwiX3JhbmdlIiwic3RhcnQiLCJzdG9wIiwicG9wIiwicG9wbGVmdCIsImluc2VydCIsImoiLCJhIiwiZGVsZXRlIiwicmVtb3ZlIiwicmV2ZXJzZSIsImIiLCJyb3RhdGUiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFFd0JBLEs7O0FBRnhCOztBQUVlLFNBQVNBLEtBQVQsR0FBbUIsQ0FBRzs7QUFFckNBLE1BQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLEdBQXNCLFlBQWE7O0FBRWxDLE9BQU0saUNBQXlCLEtBQXpCLENBQU47QUFFQSxDQUpEOztBQU1BRixNQUFNQyxTQUFOLENBQWdCRSxRQUFoQixHQUEyQixZQUFhOztBQUV2QyxPQUFNLGlDQUF5QixTQUF6QixDQUFOO0FBRUEsQ0FKRDs7QUFNQUgsTUFBTUMsU0FBTixDQUFnQkcsS0FBaEIsR0FBd0IsWUFBYTs7QUFFcEMsUUFBTyxLQUFLRixHQUFMLE9BQWdCLENBQXZCO0FBRUEsQ0FKRDs7QUFNQUYsTUFBTUMsU0FBTixDQUFnQkksT0FBT0MsUUFBdkIsSUFBbUMsWUFBYTs7QUFFL0MsUUFBTyxLQUFLQyxNQUFMLEVBQVA7QUFFQSxDQUpEOztBQU1BUCxNQUFNQyxTQUFOLENBQWdCTSxNQUFoQixHQUF5QixZQUFhOztBQUVyQyxPQUFNLGlDQUF5QixRQUF6QixDQUFOO0FBRUEsQ0FKRDs7QUFN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QUVuRCxNQUFJYyxJQUFJLEtBQUtaLEdBQUwsQ0FBVUYsQ0FBVixDQUFSO0FBQ0EsTUFBSWtCLElBQUksS0FBS2hCLEdBQUwsQ0FBVVcsQ0FBVixDQUFSO0FBQ0EsT0FBS1IsR0FBTCxDQUFVTCxDQUFWLEVBQWNrQixDQUFkO0FBQ0EsT0FBS2IsR0FBTCxDQUFVUSxDQUFWLEVBQWNDLENBQWQ7QUFFQTs7QUFFRCxRQUFPLElBQVA7QUFFQSxDQWJEOztBQWdCQWxDLE1BQU1DLFNBQU4sQ0FBZ0JzQyxNQUFoQixHQUF5QixVQUFXQyxDQUFYLEVBQWU7O0FBRXZDLEtBQUtBLElBQUksQ0FBVCxFQUFhOztBQUVaLFNBQVFBLE1BQU0sQ0FBZDtBQUFrQixRQUFLOUIsVUFBTCxDQUFpQixLQUFLb0IsR0FBTCxFQUFqQjtBQUFsQjtBQUVBLEVBSkQsTUFNSyxJQUFLVSxJQUFJLENBQVQsRUFBYTs7QUFFakIsU0FBUUEsTUFBTSxDQUFkO0FBQWtCLFFBQUtoQyxNQUFMLENBQWEsS0FBS3VCLE9BQUwsRUFBYjtBQUFsQjtBQUVBOztBQUVELFFBQU8sSUFBUDtBQUVBLENBaEJEIiwiZmlsZSI6IkRlcXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm90SW1wbGVtZW50ZWRFcnJvciAsIEluZGV4RXJyb3IgLCBWYWx1ZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcXVlICggKSB7IH1cblxuRGVxdWUucHJvdG90eXBlLmxlbiA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwibGVuXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuY2FwYWNpdHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImNhcGNpdHlcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICggKSB7XG5cblx0cmV0dXJuIHRoaXMubGVuKCApID09PSAwIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCApIHtcblxuXHRyZXR1cm4gdGhpcy52YWx1ZXMoICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwidmFsdWVzXCIgKSA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKCB4ICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImFwcGVuZFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmFwcGVuZGxlZnQgPSBmdW5jdGlvbiAoIHggKSB7XG5cblx0dGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoIFwiYXBwZW5kbGVmdFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJjbGVhclwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcImNvcHlcIiApIDtcblxufSA7XG5cblxuRGVxdWUucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gKCB4ICkge1xuXG5cdGxldCBjID0gMCA7XG5cblx0Zm9yICggbGV0IGVsZW1lbnQgb2YgdGhpcyApIGlmICggZWxlbWVudCA9PT0geCApICsrYyA7XG5cblx0cmV0dXJuIGMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uICggaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IHggb2YgaXRlcmFibGUgKSB0aGlzLmFwcGVuZCggeCApIDtcblxuXHRyZXR1cm4gdGhpcyA7XG5cbn0gO1xuXG5EZXF1ZS5wcm90b3R5cGUuZXh0ZW5kbGVmdCA9IGZ1bmN0aW9uICggaXRlcmFibGUgKSB7XG5cblx0Zm9yICggbGV0IHggb2YgaXRlcmFibGUgKSB0aGlzLmFwcGVuZGxlZnQoIHggKSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLl9jaGVja2JvdW5kcyA9IGZ1bmN0aW9uICggaSApIHtcblxuXHRpZiAoIGkgPCAwIHx8IGkgPj0gdGhpcy5sZW4oICkgKSB0aHJvdyBuZXcgSW5kZXhFcnJvciggaSApIDtcblxufSA7XG5cblxuRGVxdWUucHJvdG90eXBlLl93aGVyZSA9IGZ1bmN0aW9uICggaSApIHtcblxuXHR0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvciggXCJfd2hlcmVcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoIGkgKSB7XG5cblx0Y29uc3QgWyBjb250YWluZXIgLCBpbmRleCBdID0gdGhpcy5fd2hlcmUoIGkgKSA7XG5cblx0cmV0dXJuIGNvbnRhaW5lcltpbmRleF0gO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICggaSAsIHZhbHVlICkge1xuXG5cdGNvbnN0IFsgY29udGFpbmVyICwgaW5kZXggXSA9IHRoaXMuX3doZXJlKCBpICkgO1xuXG5cdGNvbnRhaW5lcltpbmRleF0gPSB2YWx1ZSA7XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLl9yYW5nZSA9IGZ1bmN0aW9uKiAoIHN0YXJ0ICwgc3RvcCApIHtcblxuXHRmb3IgKCBsZXQgaSA9IHN0YXJ0IDsgaSA8IHN0b3AgOyArK2kgKSB5aWVsZCBbIGkgLCB0aGlzLmdldCggaSApIF0gO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmluZGV4ID0gZnVuY3Rpb24gKCB4ICwgc3RhcnQgPSAwICwgc3RvcCA9IHRoaXMubGVuKCApICkge1xuXG5cdGZvciAoIGxldCBbIGkgLCBlbGVtZW50IF0gb2YgdGhpcy5fcmFuZ2UoIHN0YXJ0ICwgc3RvcCApICkge1xuXG5cdFx0aWYgKCBlbGVtZW50ID09PSB4ICkgcmV0dXJuIGkgO1xuXG5cdH1cblxuXHR0aHJvdyBuZXcgVmFsdWVFcnJvciggXCJub3QgZm91bmRcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcInBvcFwiICkgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLnBvcGxlZnQgPSBmdW5jdGlvbiAoICkge1xuXG5cdHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCBcInBvcGxlZnRcIiApIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoIGkgLCB4ICkge1xuXG5cdHRoaXMuX2NoZWNrYm91bmRzKCBpICkgO1xuXG5cdHRoaXMuYXBwZW5kKCB4ICkgO1xuXG5cdGxldCBqID0gdGhpcy5sZW4oICkgLSAxIDtcblxuXHRmb3IgKCA7IGkgPCBqIDsgLS1qICkge1xuXG5cdFx0Y29uc3QgYSA9IHRoaXMuZ2V0KCBqICkgO1xuXHRcdHRoaXMuc2V0KCBqICwgdGhpcy5nZXQoIGogLSAxICkgKSA7XG5cdFx0dGhpcy5zZXQoIGogLSAxICwgYSApIDtcblxuXHR9XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcblxuRGVxdWUucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICggaSApIHtcblxuXHR0aGlzLl9jaGVja2JvdW5kcyggaSApIDtcblxuXHRjb25zdCBsZW4gPSB0aGlzLmxlbiggKSAtIDEgO1xuXG5cdGZvciAoIDsgaSA8IGxlbiA7ICsraSApIHRoaXMuc2V0KCBpICwgdGhpcy5nZXQoIGkgKyAxICkgKSA7XG5cblx0dGhpcy5wb3AoICkgO1xuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cblxuRGVxdWUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0Y29uc3QgaSA9IHRoaXMuaW5kZXgoIHZhbHVlICkgO1xuXG5cdHRoaXMuZGVsZXRlKCBpICkgO1xuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cbkRlcXVlLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCApIHtcblxuXHRmb3IgKCBsZXQgaSA9IDAgLCBqID0gdGhpcy5sZW4oICkgOyBpIDwtLSBqIDsgKytpICkge1xuXG5cdFx0bGV0IGEgPSB0aGlzLmdldCggaSApIDtcblx0XHRsZXQgYiA9IHRoaXMuZ2V0KCBqICkgO1xuXHRcdHRoaXMuc2V0KCBpICwgYiApIDtcblx0XHR0aGlzLnNldCggaiAsIGEgKSA7XG5cblx0fVxuXG5cdHJldHVybiB0aGlzIDtcblxufSA7XG5cblxuRGVxdWUucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uICggbiApIHtcblxuXHRpZiAoIG4gPiAwICkge1xuXG5cdFx0d2hpbGUgKCBuIC0tPiAwICkgdGhpcy5hcHBlbmRsZWZ0KCB0aGlzLnBvcCggKSApIDtcblxuXHR9XG5cblx0ZWxzZSBpZiAoIG4gPCAwICkge1xuXG5cdFx0d2hpbGUgKCBuICsrPCAwICkgdGhpcy5hcHBlbmQoIHRoaXMucG9wbGVmdCggKSApIDtcblxuXHR9XG5cblx0cmV0dXJuIHRoaXMgO1xuXG59IDtcbiJdfQ==