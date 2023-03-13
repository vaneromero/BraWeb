/*----------------Tutor-----------------------*/
const tasksContainer61 = document.getElementById("desc3");

firebase.database().ref('Redes').equalTo('LinkTutor').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var mediafire = childSnapshot.val().linkMed;
      var mega = childSnapshot.val().linkMega;
      var servidor2 = childSnapshot.val().link;
      var servidor1 = childSnapshot.val().linkS1;
      var code = childSnapshot.val().qrr;
      var playstore2=childSnapshot.val().play1;
      tasksContainer61.innerHTML = `

      <div id="wrap">
      <div class="principal1" style="overflow:scroll; height: 100%;" >
<div id="Component1">
<img src=" https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${code}"  width="80%"
height="80%"></img>

</div>
      </div>
      <div class="lateral1"  style="overflow:scroll; height: 35vw;">
   <div id="Component">
   <a href="${mediafire}" class="btn-slide2" target="_blank">
   <span class="circle2"><i class="fa fa-download"></i></span>
   <span class="title2">Mediafire V2</span>
   <span class="title-hover2">Descargar</span>
</a>
<a href="${mega}" class="btn-slide21" target="_blank">
   <span class="circle21"><i class="fa fa-download"></i></span>
   <span class="title21">Mega V2</span>
   <span class="title-hover21">Descargar</span>
</a>
<a href="${servidor1}" class="btn-slide211" target="_blank">
   <span class="circle211"><i class="fa fa-download"></i></span>
   <span class="title211">Directo 1° Servidor V2</span>
   <span class="title-hover211">Descargar</span>
</a>
<a href="${servidor2}" class="btn-slide211" target="_blank">
   <span class="circle211"><i class="fa fa-download"></i></span>
   <span class="title211">Directo 2° Servidor V2</span>
   <span class="title-hover211">Descargar</span>
</a>
<a href="${playstore2}" class="btn-slide2111" target="_blank">
   <span class="circle2111"><i class="fa fa-download"></i></span>
   <span class="title2111">Play Store V2</span>
   <span class="title-hover2111">Proximamente..</span>
</a>
   </div>
      </div>


  </div>

`

    });
  });

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
/*---------galeria tutor--------*/
var data1 = [];
var textos1 = [];
var g1 = 0
const tasksContainer19 = document.getElementById("datos");
firebase.database().ref('Slider1/').once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      var url1 = childSnapshot.val().imagen;
      var url11 = childSnapshot.val().nombre;


      tasksContainer19.innerHTML += `<li><a><img src=${url1} alt="" title="${g1}" onclick="abc1(title)"></a></li>`
      g1 = g1 + 1;
      data1.push(url1);
      textos1.push(url11);
    });
  });
function abc1(g) {
  const tasksContainer6 = document.getElementById("galeria");
  const tasksContainer8 = document.getElementById("mitexto");
  tasksContainer6.innerHTML = `<img src="${data1[g]}" alt="">`
  tasksContainer8.innerHTML = `<p id="mitexto">${textos1[g]}</p>`
}
/*------------Video Tutor-------- */
const tasksContainer6 = document.getElementById("contenedor45");

firebase.database().ref('Video').equalTo('Tutor').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;
      var link = "https://www.youtube.com/embed/videoseries?" + url
      tasksContainer6.innerHTML += `<iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  });