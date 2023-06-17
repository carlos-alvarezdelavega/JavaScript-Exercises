const assert = require('assert');

const Rooster = require('..JavaScript-Mocha-Tests/index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', ()=>{
      //Setup
      const expected = 'cock-a-doodle-doo!';
      //Exercise
      const checkAnnouncement = Rooster.announceDawn();
      //Verify
      assert.equal(expected, checkAnnouncement);
    }); // End it('returns a rooster call')
  });// End .announceDawn block
  describe('.timeAtDawn',() => {
    it('returns its argument as a string', () => {
      //Setup
      const dawnHour = 7;
      const expectedHour = '7';
      //Exercise
      const checkTimeAtDawn = Rooster.timeAtDawn(dawnHour);
      //Verify
      assert.strictEqual(expectedHour, checkTimeAtDawn);
    })// End it('returns its argument as a string')
    //
    it('throws an error if passed a number less than 0', () => {
      //Setup
      const negativeNumber = -3;
      
      //Verify
      assert.throws(
        () => {
        //Exercise
        Rooster.timeAtDawn(negativeNumber);
      },
      RangeError
      );
    })// End it('error if passed a < 0')
    //
    it('throws an error if passed a number greater than 23', () =>{
      // Setup
      let highNumber = Math.floor((Math.random() * 24) + 24);;
      //Verify
      assert.throws(
        () => {
        Rooster.timeAtDawn(highNumber);
        }, 
        RangeError);//
    }); // End test for error if number > than 23
  }); // End .timeAtDawn
}); // End describe block