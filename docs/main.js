const cardWrapper = document.querySelector('.card-wrapper');
cardWrapper.addEventListener('mousemove', startRotateCard);
cardWrapper.addEventListener('mouseout', stopRotateCard);


function startRotateCard(e) {
  const cardItem = this.querySelector('.card');
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 8 +
  'deg) rotateY(' + (e.offsetX -halfHeight) / 8 +'deg)';
}

function stopRotateCard(e) {
  const cardItem = this.querySelector('.card');
  cardItem.style.transform = 'rotate(0)';
}
