const demo = {
  * quips(name) {
    yield "你好 " + name + "!";
    yield "希望你能喜欢这篇介绍 ES6 的译文";
    if (name.startsWith("X")) {
      yield "你的名字 " + name + "  首字母是 X，这很酷！";
    }
    yield "我们下次再见！";
  },

  * range(start, stop) {
  for (var i = start; i < stop; i++)
    yield i+1;
  },
  
  test() {
    return 1;
  },

  * makeNoise_async() {
    yield 'start';
    yield this.test()
  }
}

export default demo