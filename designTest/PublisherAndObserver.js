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

class PrdPublisher extends Publisher {
  constructor() {
    super()
    this.prdState = null
    this.observers = []
    console.log('PrdPublisher created')
  }

  getState() {
    console.log('PrdPublisher.getState invoked')
    return this.prdState
  }

  setState(state) {
    console.log('PrdPublisher.setState invoked')
    this.prdState = state
    this.notify()
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super()
    this.prdState = {}
    console.log('DeveloperObserver created')
  }

  update(publisher) {
    console.log('DeveloperObserver.update invoked')
    this.prdState = publisher.getState()
    this.work()
  }

  work() {
    const prd = this.prdState
    console.log('prd', prd);
    console.log('996 begins...')
  }
}

const A = new DeveloperObserver()
const B = new DeveloperObserver()
const test = new PrdPublisher()
const prd = {
  do: 'hello world...'
}
test.add(A)
test.add(B)
test.setState(prd)

