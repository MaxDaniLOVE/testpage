const popUp = (imageLink) => {
  const background = document.querySelector('.darken-bg');
  background.style.display = 'flex'
  const img = document.createElement('IMG');
  img.setAttribute('src', imageLink)
  background.appendChild(img);
  background.addEventListener('click', () => {
    background.style.display = 'none';
    background.removeChild(img)
  })
}

export default popUp;