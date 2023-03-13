/*------------Video Problematica-------- */
const tasksContainer1 = document.getElementById("contenedor4");

firebase.database().ref('Video').equalTo('Problematica').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;

      var link = "https://www.youtube.com/embed/" + url

      tasksContainer1.innerHTML += `<iframe src="${link}" title="Braille Package" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    });
  });
  /*------------Descargar Tutor-------- */
const tasksContainer2 = document.getElementById("descargaT1");
firebase.database().ref('Redes').equalTo('LinkTutor').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().link;
      tasksContainer2.innerHTML = `
      <a href="${url}" target="_blank" class="boton4" style="margin-top: 3%;">Descargar</a>
      `});
  });

/*------------Figma-------- */
const tasksContainer3 = document.getElementById("DescargaA");

firebase.database().ref('Redes').equalTo('LinkAlum').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().link;

      tasksContainer3.innerHTML = `
      <a href="${url}"target="_blank"  class="boton4" style="margin-top: 3%;">Descargar</a>
      `
    });
  });