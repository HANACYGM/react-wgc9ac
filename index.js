import React, { Component } from 'react';
import { render } from 'react-dom';
// for by of
import ForEaachByOf from './demo/ForEaachByOf'
// 生成器
// https://www.infoq.cn/article/es6-in-depth-generators/
import Generators from './demo/Generators'
// 模板字符串
// https://www.infoq.cn/article/es6-in-depth-template-string/
import template from './demo/template'
// ...var
// https://www.infoq.cn/article/es6-in-depth-rest-parameters-and-defaults/
import Arguments from './demo/Arguments'
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    // super();
    this.state = {
      name: 'Cygm'
    };

    // Generators
    var Niko = Generators.quips('Niko');
    console.log('Generators', Niko.next());
    console.log('Generators', Niko.next());
    console.log('Generators', Niko.next());

    // Generators
    var Niko = Generators.range(1, 5)
    console.log('Generators', Niko.next());

    // Generators
    var Niko = Generators.makeNoise_async();
    console.log('Generators', Niko.next());
    console.log('Generators', Niko.next());

    // template
    var Niko = template.run()
    // console.log(Niko)
    // document.write(Niko)

    // Arguments
    var Niko = Arguments.run(1, 2, 3, 4, 5);
    console.log('Arguments', Niko);
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <ul></ul>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
