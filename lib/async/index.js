'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chain = require('../parse/input/async/chain');

var _chain2 = _interopRequireDefault(_chain);

var _index = require('../Cite/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var asyncCite = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(data, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _index2.default;
            _context.next = 3;
            return data;

          case 3:
            _context.t1 = _context.sent;
            _context.t2 = options;
            return _context.abrupt('return', new _context.t0(_context.t1, _context.t2));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncCite(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var async = function async(data, options, callback) {
  var promise = (0, _chain2.default)(data);

  if (typeof options === 'function' && !callback) {
    callback = options;
    options = undefined;
  }

  if (typeof callback === 'function') {
    promise.then(function (data) {
      return callback(new _index2.default(data, options));
    });
    return undefined;
  } else {
    return asyncCite(promise, options);
  }
};

exports.default = async;