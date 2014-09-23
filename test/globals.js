// Export modules to global scope as necessary (only for testing)
if (typeof process !== 'undefined' && process.title === 'node') {
  // We are in node. Require modules.
  chai = require('chai');
  expect = chai.expect;
  should = chai.should();
  sinon = require('sinon');
  isBrowser = false;
} else {
  // We are in the browser. Set up variables like above using served js files.
  expect = chai.expect;
  should = chai.should();
  // num and sinon already exported globally in the browser.
  isBrowser = true;
}
