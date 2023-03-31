//Events module
/*Node.js has a built in module ,called "events",
where you can create ,fire,and listen for your own events
example 1 registering for the event to be fires only one time using once.
example 2  create an event emitter instance and register a couple  of  callbacks 
example 3 registering for the event with callback  parameters
*/

const EventEmitter = require("events");
//const event = require("events")
const event = new EventEmitter();

event.on('sayMyName',() => {
 console.log("your name is likhitha");
});
event.emit("sayMyName");

event.on('sayMyName1',() => {
  console.log("I am likhitha");
 });

 event.on('checkPage',(sc,msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
 });
 event.emit("checkPage",200,"ok");
 