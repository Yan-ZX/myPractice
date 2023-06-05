class Do{

  static one(){
    console.log('one');
    return this;
  }
  static two(){
    console.log('two');
    return this;
  }
}

const testThen = new Do();
Do.one().two();

