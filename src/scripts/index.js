import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import main from './main.js';


const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', main);