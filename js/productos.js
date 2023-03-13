/*---------productos S--------*/
const tasksContainer35 = document.getElementById("prodS");
var resto1 = 0;
firebase.database().ref('Productos Similares').once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var desc = childSnapshot.val().descripción;
      var sitioW = childSnapshot.val().link;
      var titulos = childSnapshot.val().nombre;
      var costo = childSnapshot.val().precio;
      var foto = childSnapshot.val().url;
      var lugar = childSnapshot.val().sitio;
      
      if (resto1 == 0) {
        tasksContainer35.innerHTML += `
        <div class="content">
        <div class="conde">
           <a href="${foto}" target="_blank"><i class="fas fa-eye"aria-hidden="true"  style="color: rgb(97 111 183);top: 10px;font-size: 2.5vw;"></i></a> 
            <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>
        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <h6><i class="fas fa-money-bill-wave" aria-hidden="true" style="color: green;"></i>$${costo}</h6>
        <h2><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(0, 0, 0);"></i>${lugar}</h2>
        <a class="buy-4" href="${sitioW}" target="_blank"><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(211, 208, 46);"></i>Ir a Sitio</a>
      </div>
            `
        resto1 = 1;
      }
      else if (resto1 == 1) {
        tasksContainer35.innerHTML += `
        <div class="content">
        <div class="conde">
        <a href="${foto}" target="_blank"> <i class="fas fa-eye" href="${foto}" target="_blank" aria-hidden="true" style="color: rgb(97 111 183);top: 10px;font-size: 2.5vw;"></i></a> 
            <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>
        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <h6><i class="fas fa-money-bill-wave" aria-hidden="true" style="color: green;"></i>$${costo}</h6>
        <h2><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(0, 0, 0);"></i>${lugar}</h2>
        <a class="buy-3" href="${sitioW}" target="_blank"><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(94, 204, 72);"></i>Ir a Sitio</a>
      </div>
        `, resto1 = 2;
      }
      else if (resto1 == 2) {
        tasksContainer35.innerHTML += `
        <div class="content">
        <div class="conde">
        <a href="${foto}" target="_blank"> <i class="fas fa-eye" href="${foto}" target="_blank" aria-hidden="true" style="color: rgb(97 111 183);top: 10px;font-size: 2.5vw;"></i></a> 
            <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>
        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <h6><i class="fas fa-money-bill-wave" aria-hidden="true" style="color: green;"></i>$${costo}</h6>
        <h2><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(0, 0, 0);"></i>${lugar}</h2>
        <a class="buy-2" href="${sitioW}" target="_blank"><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(177, 110, 240);"></i>Ir a Sitio</a>
      </div>
        `, resto1 = 3;
      }
      else if (resto1 == 3) {
        tasksContainer35.innerHTML += `
        <div class="content">
        <div class="conde">
        <a href="${foto}" target="_blank">  <i class="fas fa-eye" href="${foto}" target="_blank" aria-hidden="true" style="color: rgb(97 111 183);top: 10px;font-size: 2.5vw;"></i></a> 
            <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>
        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <h6><i class="fas fa-money-bill-wave" aria-hidden="true" style="color: green;"></i>$${costo}</h6>
        <h2><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(0, 0, 0);"></i>${lugar}</h2>
        <a class="buy-1" href="${sitioW}" target="_blank"><i class="fas fa-globe-americas"aria-hidden="true" style="color: rgb(53, 11, 92);"></i>Ir a Sitio</a>
      </div>
        `, resto1 = 0;
      }

    });
  });

/*---------Propios--------*/
const tasksContainer36 = document.getElementById("prodP");
var resto11 = 0;
firebase.database().ref('Propio').once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      var desc = childSnapshot.val().descripción;
      var titulos = childSnapshot.val().nombre;
      var foto = childSnapshot.val().url;
     
      if (resto11 == 0) {
        tasksContainer36.innerHTML += `
        <div class="content">
        <div class="conde">
         <img src="${foto}" >
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>

        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <a class="buy-1" href="${foto}" target="_blank"><i class="fas fa-eye" aria-hidden="true" style="color: rgb(53, 11, 92);"></i>Ver Imagen</a>
      </div>
            `, resto11 = 1;
      }
      else if (resto11 == 1) {
        
        tasksContainer36.innerHTML += `
        <div class="content">
        <div class="conde">
         <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>

        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <a class="buy-2" href="${foto}" target="_blank"><i class="fas fa-eye" aria-hidden="true" style="color: rgb(177, 110, 240)"></i>Ver Imagen</a>
      </div>
        `, resto11 = 2;
      }
      else if (resto11 == 2) {
       
        tasksContainer36.innerHTML += `
        <div class="content">
        <div class="conde">
         <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1"><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>

        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <a class="buy-3" href="${foto}" target="_blank"><i class="fas fa-eye" aria-hidden="true" style="color: rgb(94, 204, 7)"></i>Ver Imagen</a>
      </div>
        `, resto11 = 3;
      }
      else if (resto11 == 3) {
        tasksContainer36.innerHTML += `
        <div class="content">
        <div class="conde">
         <img src="${foto}">
        </div>
     
        <h3 class="tituloProd1" ><i class="fas fa-gamepad" aria-hidden="true" style="color: rgb(128, 94, 0);"></i>${titulos}</h3>

        <p><i class="fas fa-signature" aria-hidden="true" style="color: rgb(113, 0, 128);"></i>${desc}</p>
        <a class="buy-4" href="${foto}" target="_blank"><i class="fas fa-eye" aria-hidden="true" style="color: rgb(211, 208, 46);"></i>Ver Imagen</a>
      </div>
        `, resto11 = 0;
      }

    });
  });