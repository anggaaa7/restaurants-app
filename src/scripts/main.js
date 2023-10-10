import './resto-list.js';
import DATA from '../public/data/DATA.json';

const main = () => {
    const restoListElement = document.querySelector('resto-list');
    restoListElement.restos = DATA.restaurants;
};

export default main;

