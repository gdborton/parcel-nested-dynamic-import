const path = require('path');
const express = require('express');
const Bundler = require('parcel-bundler');

const app = express();
const bundler = new Bundler([
  path.resolve('./src/packages/package1.js'),
  path.resolve('./src/packages/nested/package2.js'),
], {
  target: 'browser',
  publicUrl: '/dist/',
});

bundler.bundle();

app.use(express.static('.'));
app.listen(3000, () => {
  console.log('listening on port 3000');
});