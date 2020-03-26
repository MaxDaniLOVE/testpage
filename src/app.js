import map from './js/map';
import popUp from './js/popUp';
import { displayMemberInfo, hideMemberInfo } from './js/memberInfo'
import './scss/style.scss';

map();

const features = document.querySelectorAll('.works__grid_image-wrapper');
const members = document.querySelectorAll('.team__grid_image-wrapper');

features.forEach(feature => {
  const link = feature.lastElementChild.src;
  feature.addEventListener('click', () => {
    popUp(link)
  })
})

members.forEach(member => {
  member.addEventListener('mouseenter', () => {
    displayMemberInfo(member)
  })
})

members.forEach(member => {
  member.addEventListener('mouseleave', () => {
    hideMemberInfo(member);
  })
})
