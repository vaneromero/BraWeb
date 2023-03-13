/*-----Modal------*/
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
/*---------galeria admin--------*/
var data = [];
var textos = [];
var g = 0
const tasksContainer16 = document.getElementById("datos2");
firebase.database().ref('Slider3/').once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      var url = childSnapshot.val().imagen;
      var url1 = childSnapshot.val().nombre;
      tasksContainer16.innerHTML += `<li><a><img src=${url} alt="" title="${g}" onclick="abc(title)"></a></li>`
      g = g + 1;
      data.push(url);
      textos.push(url1);
    });
  });
function abc(g) {

  const tasksContainer17 = document.getElementById("galeria2");
  const tasksContainer18 = document.getElementById("mitexto");
  tasksContainer17.innerHTML = `<img src="${data[g]}" alt="">`
  tasksContainer18.innerHTML = `<p id="mitexto">${textos[g]}</p>`
}
/*------------Video Admin-------- */
const tasksContainer24 = document.getElementById("contenedor452");

firebase.database().ref('Video').equalTo('Admin').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;
      var link = "https://www.youtube.com/embed/videoseries?" + url
      tasksContainer24.innerHTML += `<iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  });