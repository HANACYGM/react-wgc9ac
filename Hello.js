import React from 'react';

export default ({ name }) => <h1>Hello {name}!</h1>;


var div, container = document.getElementById('root')

for (let i=0; i<5; i++){
  div = document.createElement('div')
  div.onclick = function() {
    alert('Thi is Box #:' + i)
  }
  container.appendChild(div)
}