class Publisher {
  constructor() {
    this.observers = [];
    console.log('Publisher created');
  }

  add(observer) {
    this.observers.push(observer);
    console.log('add observer');
  }

  remove(observer) {
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    });
    console.log('remove observer');
  }

  notify() {
    this.observers.forEach(item => { 
      item.update(this);
    })
   
  }
}

class Observer {
  constructor(name) {
    this._name = name;
    console.log('Observer created');
  }

  update() {
    console.log('Observer.update invoked', this._name);
  }
}

const a = new Observer('壹号');
const b = new Observer('二号');
const c = new Observer('三号');
const publisherTest = new Publisher();
publisherTest.add(a);
publisherTest.add(b);
publisherTest.add(c);
publisherTest.notify();

