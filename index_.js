/**
 * these file have my earlier solution which raised an internal server (status code 500) error
 * so, this file was kept as a backup and solution code was copied from the LHL compass
 * However, that code also led to server error (status code 500)
 */

// index.js

const { nextISSTimesForMyLocation } = require('./iss_');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});