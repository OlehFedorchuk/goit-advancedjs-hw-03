import { fetchImages } from './js/pixabay-api';
import { hideLoader, showLoader } from './js/render-functions';

const formEl = document.querySelector('#form');
const inputFieldEl = document.querySelector('.inputFild');
const btnSearchImgEl = document.querySelector('.btnSearchImg');
btnSearchImgEl.disabled = true;
hideLoader();
const request = {
  url: 'https://pixabay.com/api/',
  key: '52935594-c28acfca0b14dad36f3e3eac1',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

let searchImg = '';
inputFieldEl.addEventListener('input', event => {
  searchImg = event.target.value.trim();
  if (searchImg === '') {
    btnSearchImgEl.disabled = true;
    return;
  }
  btnSearchImgEl.disabled = false;
  request.q = searchImg;
});
formEl.addEventListener('submit', event => {
  event.preventDefault();
  if (searchImg === '') {
    btnSearchImgEl.disabled = true;
    console.log('Enetr some text!');
    return;
  }

  showLoader();
  fetchImages(request);
});
