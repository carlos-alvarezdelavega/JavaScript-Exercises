const assert = require('assert');

describe('Testing hooks.', () => {
  let testValue;
  beforeEach(() => {
    testValue = 5;
  });
  //
  it('should add', () => {
    // Setup
    let newTestValue = 5;
    // Exercise
    testValue = testValue + newTestValue;
    // Verify
    assert.strictEqual(testValue, 10);
  });
  //
  it('should multiply', () => {
    // Setup
    
    // Exercise
    let newTestValue = testValue * 5;
    // Verify
    assert.strictEqual(newTestValue, 25);
  });
});
