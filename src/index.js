import "@babel/polyfill";
import './index.html';
import './index.scss';
import code from './img/174854.png';
import {multi, sum} from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 500;
imgWrap.append(img);




console.log(multi(3,4))
console.log(sum(3, 4))