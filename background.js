// chrome.runtime retrieves background page, returns details abt manifest, listen for/respond to events in app
// onInstalled listeners catch events in certain situations
const ALARM_FREQ = 1; // make 20

let date = new Date();
let minutes = date.getMinutes();

chrome.runtime.onInstalled.addListener(() => {
  console.log(`minutes: ${minutes}`);
  
  const alarmName = 'eyes ' + minutes;
  console.log(alarmName);
  
  chrome.alarms.create(alarmName, {
    delayInMinutes: ALARM_FREQ,
    periodInMinutes: ALARM_FREQ
  });
  // chromes.alarms schedules code to run periodically
  // alarms.get gets alarm and gives it a name
  chrome.alarms.get(alarmName, alarm => {
    console.log('i got an alarm: ' + alarmName);
  })
});

// fired when alarm has elapsed
chrome.alarms.onAlarm.addListener(alarm => {
  
  console.log(`minutes: ${minutes}`);
  
  console.log(alarm);
  console.log(alarm.name);
  console.log(alarm.name.includes('eyes'));
  //TODO: use regex to make sure we're really gettting our alarm
  if (alarm.name.includes('eyes')) {
    console.log(`if ${alarm.name} exists, trigger alarm`);
    //console.log(document.body);
    
    let port = chrome.runtime.connect({ name: "eye-alarm" });
    console.log(port);
    console.log(port.hasListeners());
    port.postMessage({ alarm: "avert your eyes" });
    port.onMessage.addListener(function (msg) {
      console.log(msg);
    });
  }
})