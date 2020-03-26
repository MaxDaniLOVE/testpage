import map from './js/map';
import popUp from './js/popUp';
import './scss/style.scss';

map();

const features = document.querySelectorAll('.works__grid_image-wrapper');

features.forEach(e => {
  const link = e.lastElementChild.src;
  e.addEventListener('click', () => {
    popUp(link)
  })
})

console.log('there will be script for pop-up');