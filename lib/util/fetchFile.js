'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncRequest = require('sync-request');

var _syncRequest2 = _interopRequireDefault(_syncRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchFile = function fetchFile(url) {
  try {
    return (0, _syncRequest2.default)('GET', url).getBody('utf8');
  } catch (e) {
    logger.error('[set]', 'File \'' + url + '\' could not be fetched:', e.message);
    return '[]';
  }
};

exports.default = fetchFile;