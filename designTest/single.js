class Singleton {
  constructor(name) {
    this._name = name;
  }

  static getSingleTon(name) {
    if (!this.singleton) {
      this.singleton = new Singleton(name);
    }
    return this.singleton;
  }
  get name() {
    return this._name;
  }
}

let a = Singleton.getSingleTon('a1');
let b = Singleton.getSingleTon('b1');

console.log(a === b); // true
console.log(a.name); // a1
