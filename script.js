let panel = document.querySelector('.gallery__img-panel');
let activ = document.querySelector('.gallery__activ');
let prev = document.querySelector('.gallery__btn-left');
let next = document.querySelector('.gallery__btn-right');
let id = getId(activ);

function getId(img) {
  const idRegExp = /\/([0-9]*)\./;
  let id = img.src.match(idRegExp)[1];
  return Number(id);
}

panel.addEventListener('click', function (event) {
  let elem = event.target;
  if(elem.tagName == 'IMG') {
    activ.src = elem.src;
    id = getId(activ);
  }
});

prev.addEventListener('click', function (){
  if (id > 1) {
    activ.src = `picture/${id - 1}.jpg`;
    id--;
  }
});

next.addEventListener('click', function (){
  if (id < panel.children.length) {
    activ.src = `picture/${id + 1}.jpg`;
    id++;
  }
});