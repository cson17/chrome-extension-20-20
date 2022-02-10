chrome.runtime.onInstalled.addListener(function (port) {
  console.assert(port.name === "eye-alarm");
  port.onMessage.addListener(function (msg) {
    console.log(msg);
  });
});






// // chrome.runtime.onInstalled.addLister(function () {
// //     console.log('on installed called');

// // });


// //GLOBAL VARIABLES
// const overlayBackground = #e8746f;

// // Create overlay
// const overlay = document.createElement('div');
// overlay.setAttribute('id', 'overlay');
// // Style overlay
// overlay.style.background = overlayBackground;


// const loop = () => {
//   setTimeout(() => {
//     const date = new Date();
//     console.log(`the time is: ${date.getTime()}`);
//     loop()
//   }, 1000);
// }


// function checkApple() {
//   if (head.node.style.left === apple.node.style.left && head.node.style.top === apple.node.style.top) {
//     console.log('hello');
//     apple.moveApple();
//     body.moveBody(head.node.style.top, head.node.style.left, true);
//   }
//   else body.moveBody(head.node.style.top, head.node.style.left, false);
//   // run function again after delay if game still running
//   if (head.gameOver !== true) {
//     setTimeout(checkApple, head.SPEED);
//   }

// }

// // chrome.runtime retrieves background page, returns details abt manifest, listen for/respond to events in app
// // onInstalled listeners catch events in certain situations
// let date = Date.now();
// chrome.runtime.onInstalled.addLister(function () {
//   console.log('on installed called');

//   // chromes.alarms schedules code to run periodically
//   // alarms.get 
//   chrome.alarms.get('coop' + date, function (alarm) {
//     console.log('i got an alarm: ' + alarm);
//   })
// })