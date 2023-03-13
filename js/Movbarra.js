let userAgentString=navigator.userAgent;
//let chromeAgent = userAgentString.indexOf("Chrome") > -1;
//let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1;
let firefoxAgent = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
let safariAgent = navigator.userAgent.toLowerCase().indexOf("Safari") > -1;
//let operaAgent = userAgentString.indexOf("OP") > -1;
if(firefoxAgent){
    Swal.fire({
        title: '¡Lo sentimos!',
        text:'Este sitio web no es conpatible con este navegador. Por favor, utilice uno de los siguientes navegadores: Chrome, Opera y Edge',
        width: '50%',
        padding: '3em',
        color: 'rgb(47 0 66)',
        allowOutsideClick: false,
        background: 'linear-gradient(#77d8ed, #d1dba9)',
        showCloseButton: false,
        showConfirmButton: false,
        customClass: {
            popup: "swal2-border-radius"
          },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        backdrop: `
        rgba(0,0,123,0.4)  
        url("img/es-8-unscreen.gif")
        left top
        repeat
        `})
}else if(safariAgent){
    Swal.fire({
        title: '¡Lo sentimos!',
        text: '',
        text:'Este sitio web no es conpatible con este navegador. Por favor, utilice uno de los siguientes navegadores: Chrome, Opera y Edge',
        width: '50%',
        padding: '3em',
        color: 'rgb(47 0 66)',
        allowOutsideClick: false,
        background: 'linear-gradient(#77d8ed, #d1dba9)',
        showCloseButton: false,
        showConfirmButton: false,
        customClass: {
            popup: "swal2-border-radius"
          },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        backdrop: `
        rgba(0,0,123,0.4)  
        url("img/es-8-unscreen.gif")
        left top
        repeat
        `})
}

var cadena = 0;
var valorc = JSON.stringify(cadena);
sessionStorage.setItem("Cadena", valorc);

$(".sidebar-dropdown > a").click(function () {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});
$(document).ready(function () {

  $('.ir-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });

});
const tasksContainer = document.getElementById("barra");
firebase.database().ref('Redes').equalTo('BraApp').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var facebook = childSnapshot.val().Facebook;
      var instagram = childSnapshot.val().Instagram;
      var twitter = childSnapshot.val().Twitter;
      var youtube = childSnapshot.val().Youtube;
      var Tiktok = childSnapshot.val().Tiktok;
      tasksContainer.innerHTML = `<a href="${facebook}" target="_blank">
        <i class="fab fa-facebook"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="${twitter}" target="_blank">
        <i class="fab fa-twitter"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="${youtube}" target="_blank">
        <i class="fab fa-youtube"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="${instagram}" target="_blank">
        <i class="fab fa-instagram"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="${Tiktok}" target="_blank">
      <i class="fab fa-tiktok"></i>
      <span class="badge-sonar"></span>

    </a>`
    });
  });
  /*------------Descargar Admin-------- */
const tasksContainer68 = document.getElementById("fug");

firebase.database().ref('Redes').equalTo('LinkAdmin').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      tasksContainer68.innerHTML = `
      <a href="${childSnapshot.val().Figma}">
  <i class="fab fa-figma"></i>
  <span>Proyecto en Figma</span>
</a> `
    });
  });
  /*------------Comunidad-------- */
const db = firebase.firestore();

const taskForm = document.getElementById("task-form");
const tasksContainer4 = document.getElementById("tasks-container");
let editStatus = false;
let id = '';

const getTasks = () => db.collection("Correo").orderBy("fecha", "desc").get();
const onGetTasks = (callback) => db.collection("Correo").orderBy("fecha", "desc").onSnapshot(callback);
var a = 0;
var b = 0;
window.addEventListener("DOMContentLoaded", async (e) => {
    onGetTasks((querySnapshot) => {
      tasksContainer4.innerHTML = "";
      
      querySnapshot.forEach((doc) => {
      const task = doc.data();
      if (a == 0) {
        if(task.respuesta=="En espera..."){
            var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq);
            var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq1);
        tasksContainer4.innerHTML += `
        <li>
            <div class="comment-main-level">
                <!-- Avatar -->
                <div class="comment-avatar">
                <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                <!-- Contenedor del Comentario -->
                <div class="comment-box">
                    <div class="comment-head">
                        <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                        <span id="horita">${task.fecha}</span>
                    </div>
                    <div class="comment-content">
                        ${task.pregunta}
                    </div>
                </div>
            </div>
            <!-- Respuestas de los comentarios -->
            <ul class="comments-list reply-list" style="display:none">
                <li>
                    <!-- Avatar1 -->
                    <div class="comment-avatar1"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
        
                            <h6 class="comment-name by-admin">
                            <a id="namesito"> ${task.adm}</a></h6>
                            <span id="horita"> ${task.admho}</span>
        
                        </div>
                        <div class="comment-content">
                            ${task.respuesta}
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        
        ` ,
        a = 1;
        }
        else if(task.respuesta!="En espera..."){
            var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq);
            var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq1);
        tasksContainer4.innerHTML += `
        
        <li>
            <div class="comment-main-level">
                <!-- Avatar -->
                <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                <!-- Contenedor del Comentario -->
                <div class="comment-box">
                    <div class="comment-head">
                        <h6 class="comment-name by-author"> <a id="namesito">${task.usuario}</a></h6>
                        <span id="horita">${task.fecha}</span>
                    </div>
                    <div class="comment-content">
                        ${task.pregunta}
                    </div>
                </div>
            </div>
            <!-- Respuestas de los comentarios -->
            <ul class="comments-list reply-list">
                <li>
                    <!-- Avatar -->
                    <div class="comment-avatar1"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
        
                        <h6 class="comment-name by-admin"><a id="namesito"> ${task.adm}</a></h6>
                        <span id="horita"> ${task.admho}</span>
    
        
                        </div>
                        <div class="comment-content">
                            ${task.respuesta}
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        
        ` ,
        a = 1;
        }
      }
      else if (a == 1) {

        if(task.respuesta=="En espera..."){
            var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq);
            var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq1);
        tasksContainer4.innerHTML += `
        <li>
            <div class="comment-main-level">
                <!-- Avatar -->
                <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                <!-- Contenedor del Comentario -->
                <div class="comment-box">
                    <div class="comment-head">
                        <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                        <span id="horita">${task.fecha}</span>
                    </div>
                    <div class="comment-content">
                        ${task.pregunta}
                    </div>
                </div>
            </div>
            <!-- Respuestas de los comentarios -->
            <ul class="comments-list reply-list" style="display:none">
                <li>
                    <!-- Avatar -->
                    <div class="comment-avatar1"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
        
                        <h6 class="comment-name by-admin"><a id="namesito"> ${task.adm}</a></h6>
                        <span id="horita"> ${task.admho}</span>
    
        
                        </div>
                        <div class="comment-content">
                            ${task.respuesta}
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        ` ,
        a = 1;
        }
        else if(task.respuesta!="En espera..."){
            var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq);
            var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
            console.log("consoleee",nomq1);
        tasksContainer4.innerHTML += `
        <li>
            <div class="comment-main-level">
                <!-- Avatar -->
                <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                <!-- Contenedor del Comentario -->
                <div class="comment-box">
                    <div class="comment-head">
                        <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                        <span id="horita">${task.fecha}</span>
                    </div>
                    <div class="comment-content">
                        ${task.pregunta}
                    </div>
                </div>
            </div>
            <!-- Respuestas de los comentarios -->
            <ul class="comments-list reply-list">
                <li>
                    <!-- Avatar -->
                    <div class="comment-avatar1"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
        
                        <h6 class="comment-name by-admin"><a id="namesito">${task.adm}</a></h6>
                        <span id="horita">${task.admho}</span>
    
        
                        </div>
                        <div class="comment-content">
                            ${task.respuesta}
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        `
        }
      }
      });
      });
    });
/*----Guardar en la comunidad-------*/
function enviar(){

    var hoy = new Date();
     var options = {
       hour: '2-digit',
       minute: '2-digit',
       second: '2-digit',
       hour12: true
     };
     var fecha = hoy.getDate() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getFullYear();
     var hora = hoy.toLocaleString([], options);
     var fechaYHora = fecha + ' ' + hora;
     var inputValue1 = document.getElementById("nombre").value;
     var inputValue2 = document.getElementById("mensaje").value;
     var inputValue3 = document.getElementById("email").value;
   
     if (inputValue2 != "" && inputValue3 != ""&& inputValue1 != "") {
       firebase.firestore().collection("Correo").add({
   
         correo:inputValue3,
   fecha: fechaYHora,
   pregunta:inputValue2,
   respuesta:"En espera...",
   adm:"",
   usuario:inputValue1
       })
         .then((docRef) => {
        document.getElementById("nombre").value="";
    document.getElementById("mensaje").value="";
    document.getElementById("email").value="";
         })
         .catch((error) => {
         
         });
       
   }else{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',

        title: 'Llene todos los campos'

      })
   }
   }
   /*-----Metodos buscar y restablecer de records------*/
function buscar() {
    const db = firebase.firestore();
    var inputValue = document.getElementById("search-text").value;
  console.log("consolee",inputValue)
    const tasksContainer5 = document.getElementById("tasks-container");
    var a3 = 0;
  
      db.collection("Correo").where("correo", "==", inputValue).onSnapshot((querySnapshot) => {
        console.log("consolee",inputValue)
        tasksContainer5.innerHTML = "";
        document.getElementById("search-text").value = "";
        querySnapshot.forEach((doc) => {
          const task = doc.data();
          if (a == 0) {
            if(task.respuesta=="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar">
                    <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list" style="display:none">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                                <h6 class="comment-name by-admin">
                               <a id="namesito"> ${task.adm}</a></h6>
                                <span id="horita"> ${task.admho}</span>
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            
            ` ,
            a = 1;
            }
            else if(task.respuesta!="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"> <a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                            <h6 class="comment-name by-admin"><a id="namesito"> ${task.adm}</a></h6>
                            <span id="horita"> ${task.admho}</span>
        
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            
            ` ,
            a = 1;
            }
            }
            else if (a == 1) {
      
            if(task.respuesta=="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list" style="display:none">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                            <h6 class="comment-name by-admin"><a id="namesito"> ${task.adm}</a></h6>
                            <span id="horita"> ${task.admho}</span>
        
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            ` ,
            a = 1;
            }
            else if(task.respuesta!="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                            <h6 class="comment-name by-admin"><a id="namesito">${task.adm}</a></h6>
                            <span id="horita">${task.admho}</span>
        
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            `
            }
            
            }
        });
        
      });
  }
  function reset() {
    const db = firebase.firestore();
    const tasksContainer6 = document.getElementById("tasks-container");
    var a2 = 0;
    db.collection("Correo").orderBy("fecha", "desc").onSnapshot((querySnapshot) => {
      tasksContainer6.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        if (a == 0) {
            if(task.respuesta=="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar">
                    <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list" style="display:none">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                                <h6 class="comment-name by-admin">
                               <a id="namesito"> ${task.adm}</a></h6>
                                <span id="horita"> ${task.admho}</span>
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            
            ` ,
            a = 1;
            }
            else if(task.respuesta!="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"> <a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                            <h6 class="comment-name by-admin"><a id="namesito"> ${task.adm}</a></h6>
                            <span id="horita"> ${task.admho}</span>
        
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            
            ` ,
            a = 1;
            }
            }
            else if (a == 1) {
      
            if(task.respuesta=="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list" style="display:none">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                            <h6 class="comment-name by-admin"><a id="namesito"> ${task.adm}</a></h6>
                            <span id="horita"> ${task.admho}</span>
        
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            ` ,
            a = 1;
            }
            else if(task.respuesta!="En espera..."){
              var nomq = task.usuario.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq);
              var nomq1 = task.adm.toString().substring(0, 1).toUpperCase();
              console.log("consoleee",nomq1);
            tasksContainer4.innerHTML += `
            <li>
                <div class="comment-main-level">
                    <!-- Avatar -->
                    <div class="comment-avatar"> <p>${nomq}</p><img src="img/Fotitoe.png" alt=""></div>
                    <!-- Contenedor del Comentario -->
                    <div class="comment-box">
                        <div class="comment-head">
                            <h6 class="comment-name by-author"><a id="namesito">${task.usuario}</a></h6>
                            <span id="horita">${task.fecha}</span>
                        </div>
                        <div class="comment-content">
                            ${task.pregunta}
                        </div>
                    </div>
                </div>
                <!-- Respuestas de los comentarios -->
                <ul class="comments-list reply-list">
                    <li>
                        <!-- Avatar -->
                        <div class="comment-avatar"> <p>${nomq1}</p><img src="img/Fotitoe.png" alt=""></div>
                        <!-- Contenedor del Comentario -->
                        <div class="comment-box">
                            <div class="comment-head">
            
                            <h6 class="comment-name by-admin"><a id="namesito">${task.adm}</a></h6>
                            <span id="horita">${task.admho}</span>
        
            
                            </div>
                            <div class="comment-content">
                                ${task.respuesta}
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            `
            }
            
            }
      });
    });
  }
  
/*----Avisos-------*/
const db5 = firebase.firestore();
const tasksC1 = document.getElementById("listaAvisos");
const getTasks3 = () => db5.collection("Avisos").orderBy("fecha", "desc").get();
const onGetTasks3 = (callback) => db5.collection("Avisos").orderBy("fecha", "desc").onSnapshot(callback);
var ee = 0;
window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks3((querySnapshot) => {
    tasksC1.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task00 = doc.data();
 
      if (ee == 0) {
        tasksC1.innerHTML += `
          <div id="tarjetaa">
          <h5>${task00.fecha}</h5>
          <h2>Título: <br>${task00.titulo}</h2>
          <h4>Descripción: <br>${task00.Descrip}</h4>
         </div>
       `         ,
          ee = 1;
      } else if (ee == 1) {
        tasksC1.innerHTML += `  <div id="tarjetaa1">
          <h5>${task00.fecha}</h5>
          <h2>Título: <br>${task00.titulo}</h2>
          <h4>Descripción: <br>${task00.Descrip}</h4>
         </div>
  `            }
    });
  });

});
function cerrar(){
  $("#abrirAviso").css("display", "block")
  $("#cerrarAviso").css("display", "none")
  $("#botonAbrir").css("display", "block")
  $("#barraflotantewcv").css("display", "none")
 }
 function abrir(){
  $("#abrirAviso").css("display", "none")
  $("#cerrarAviso").css("display", "block")
  $("#botonAbrir").css("display", "none")
  $("#barraflotantewcv").css("display", "block")
 }
 function mostrar65(){
    $("#boton4f5").css("display", "none")
    $("#fomr").css("display", "block")
    $("#fomr").css("width", "100%")
    $("#fomr").css("display", "inline-block")
    $("#fomr").css("display", " flex")
    $("#fomr").css("justify-content", "center")
    $("#fomr").css("align-items", " center")
    $("#boton4f5t").css("display", "block")
 }
 function mostrar65t(){
    $("#boton4f5t").css("display", "none")
    $("#fomr").css("display", "none")
    $("#boton4f5").css("display", "block")
 }