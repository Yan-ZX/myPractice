class MobilePhoneFactory{
  createOS() {
    throw new Error("抽象工厂方法不允许直接调用-需重写该方法")
  }

  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用-需重写该方法")
  }
}

class FackStarFactory extends MobilePhoneFactory {
  createOS() {
    return new AppleOS();
  }

  createHardWare() {
    return new QualcommHardWare();
  }
}


// 定义操作系统这类产品的抽象产品类
class OS {
  controlHardWare() {
      throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
  }
}

// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
  controlHardWare() {
      console.log('我会用安卓的方式去操作硬件')
  }
}

class AppleOS extends OS {
  controlHardWare() {
      console.log('我会用🍎的方式去操作硬件')
  }
}

// 定义手机硬件这类产品的抽象产品类
class HardWare {
  // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
  operateByOrder() {
      throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
  }
}

// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
  operateByOrder() {
      console.log('我会用高通的方式去运转')
  }
}

class MiWare extends HardWare {
  operateByOrder() {
      console.log('我会用小米的方式去运转')
  }
}

const myPhone = new FackStarFactory();
const myOS = myPhone.createOS();
const myHard = myPhone.createHardWare();
myOS.controlHardWare();
myHard.operateByOrder();
