'use strict';
var test = require('ava');
var ip = require('../lib/ip.js');

test(function (t) {
  t.assert(ip.is('192.168.0.1'));
  t.assert(ip.is('1:2:3:4:5:6:7:8'));
  t.assert(!ip.is('unicorn 192.168.0.1'));
  t.assert(ip.v4('192.168.0.1'));
  t.assert(!ip.v6('192.168.0.1'));
  t.assert(ip.v6('1:2:3:4:5:6:7:8'));
  t.assert(!ip.v4('1:2:3:4:5:6:7:8'));
  t.assert(ip.contain('unicorn 192.168.0.1'));
  t.assert(ip.contain('unicorn 1:2:3:4:5:6:7:8'));
  t.assert(ip.match('unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'));
});
