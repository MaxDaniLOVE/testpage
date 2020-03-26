const popUp = (imageLink) => {
  const background = document.querySelector('.pop-up');
  background.style.display = 'flex';
  const img = document.createElement('IMG');
  img.setAttribute('src', imageLink);
  background.appendChild(img);
  document.querySelector('.pop-up__close-btn').addEventListener('click', () => {
    background.style.display = 'none';
    img.remove();
  })
}

export default popUp;