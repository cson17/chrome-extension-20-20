console.log('extension main.js is running');

setTimeout(() => {
  const date = new Date();
  console.log(`the time is: ${date.getTime()}`);
}, 1000);