// common js 스텍
// 가져오기 require, 배포하기 export
let _ = require('lodash')
import './style.css'
import './hello.scss'
import treeImage from './assets/images/img_tree.gif'

//named imoprt : 반드시 {} 안에 동일한 이름으로 가져온다.
import {area,circumference} from './js/circle';
//default imoprt: {}없이 이름을 마음대로 바꿀 수 있다.
import cube from './js/cube';



let component = () => {
  console.log('area:', area(10));
  console.log('circumference: ', circumference(10));
  console.log('cube:', cube.calculate(10))
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  // const img = document.createElement('img');
  // img.src = treeImage;
  // element.appendChild(img);

  return element;
}

document.body.appendChild(component());
