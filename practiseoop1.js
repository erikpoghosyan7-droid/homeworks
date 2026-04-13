class App {
  constructor(name){;
  this.name = name;
}
  receive(message){
    console.log(`${this.name} receive a message ${message}`);
  }
}

class Facebook extends App{}
class Instagram extends App{}
class Telegram extends App{}

class NotificationCenter {
  constructor() {
   this.subscribers = [];
}

subscribe(app) {

    if (this.subscribers.includes(app)) {
    return "App already subscribed";
}

    this.subscribers.push(app);
    return "App subscribed";
}

    unsubscribe(app) {
    const index = this.subscribers.indexOf(app);

      if (index === -1) {
      return "App not found";
}

      this.subscribers.splice(index, 1);
      return "App unsubscribed";
}

   notifyAll(message) {
    if (this.subscribers.length === 0) {
    return "No subscribers";
}

    this.subscribers.forEach(app => {
    app.receive(message);
});

    return "Notifications sent";
}
}




const center = new NotificationCenter();
const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");



console.log(center.subscribe(facebook));  
console.log(center.subscribe(instagram)); 

console.log(center.notifyAll("New post added"));


console.log(center.unsubscribe(instagram)); 

console.log(center.notifyAll("Story updated"));
