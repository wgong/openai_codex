/*
The clearInterval() function in JavaScript is used to stop the execution of a set interval that was previously started using the setInterval() function. It takes a single argument, which is the interval ID value returned by the setInterval() function when it is called.

Here is an example of how to use clearInterval():

Copy code
let intervalId = setInterval(function() {
  console.log("Interval running");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(function() {
  clearInterval(intervalId);
}, 5000);


In this example, the interval is set to run every 1 second (1000 milliseconds). The setTimeout() function is used to stop the interval after 5 seconds (5000 milliseconds). The clearInterval() function is called with the interval ID value that was stored in the intervalId variable, which stops the interval from continuing to run.

*/

// timer

let counter = 1;
let intervalId = setInterval(function() {
    console.log(`Interval running:  ${counter++}`);
  }, 1000);
  
  // Stop the interval after 5 seconds
  setTimeout(function() {
    clearInterval(intervalId);
    console.log(`Interval cleared: ${counter}`);
  }, 5000);
  