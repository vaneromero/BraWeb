/*----------------Alumno-----------------------*/
const tasksContainer8 = document.getElementById("desc4");

firebase.database().ref('Redes').equalTo('LinkAlum').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var mediafire = childSnapshot.val().linkMed;
      var mega = childSnapshot.val().linkMega;
      var servidor2 = childSnapshot.val().link;
      var servidor1 = childSnapshot.val().linkS1;
      var code = childSnapshot.val().qrr;
      var code2 = childSnapshot.val().qrr2p;
      var playstore22=childSnapshot.val().play1;
    
      tasksContainer8.innerHTML = `

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
<a href="${playstore22}"class="btn-slide2111" target="_blank">
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
/*---------galeria alumno--------*/
var data2 = [];
var textos2 = [];
var g2 = 0
const tasksContainer10 = document.getElementById("datos1");
firebase.database().ref('Slider2/').once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      var url2 = childSnapshot.val().imagen;
      var url12 = childSnapshot.val().nombre;


      tasksContainer10.innerHTML += `<li><a><img src=${url2} alt="" title="${g2}" onclick="abc2(title)"></a></li>`
      g2 = g2 + 1;
      data2.push(url2);
      textos2.push(url12);
    });
  });
function abc2(g) {

  const tasksContainer11 = document.getElementById("galeria1");
  const tasksContainer14 = document.getElementById("mitexto");
  tasksContainer11.innerHTML = `<img src="${data2[g]}" alt="">`
  tasksContainer14.innerHTML = `<p id="mitexto">${textos2[g]}</p>`
}

/*------------Video Alumno-------- */
const tasksContainer15 = document.getElementById("contenedor451");

firebase.database().ref('Video').equalTo('Alumno').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;
      var link = "https://www.youtube.com/embed/videoseries?" + url
      tasksContainer15.innerHTML += `<iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  });