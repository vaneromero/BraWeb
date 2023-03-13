/*------------Video 4-------- */
const tasksContainer29 = document.getElementById("contenedor41111");

firebase.database().ref('Video').equalTo('entre').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;

      var link = "https://www.youtube.com/embed/" + url

      tasksContainer29.innerHTML += `<iframe src="${link}" title="Braille Package" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    });
  });
  /*---------galeria de escuela--------*/
  const tasksContainer33 = document.getElementById("tarjetas");
  firebase.database().ref('GaleriaE').once('value').then(
    function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
  
        var desc = childSnapshot.val().descr;
        var foto = childSnapshot.val().foto;
        var titulos = childSnapshot.val().titulo;
        tasksContainer33.innerHTML += `
          <figure class="snip0015">
          
              <img src="${foto}" alt=""/>
              
              <figcaption>
              <a href="${foto}" target="_blank"><i class="fas fa-eye"aria-hidden="true"></i></a> 
                <h2>${titulos}</h2>
                <p>${desc}</p>
              </figcaption>
          </figure>		
       `
      });
    });