function consulta() {
  var cont = 0;
  var nombre1;

  firebase.database().ref('Administradores').orderByKey().once('value').then(
    function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var avanzada = childSnapshot.val().avanzada;
        var email = childSnapshot.val().email;
        var sexo = childSnapshot.val().sexo;
        var userName = childSnapshot.val().userName;
        var camp1 = document.getElementById('correo').value;
        var camp2 = document.getElementById('clave').value;
      
     
        if (camp1 == email && camp2 == avanzada) {
          cont = 1
          if (sexo == "Femenino") {
            nombre1 = "Bienvenida! " + userName;
          } else {
            nombre1 = "Bienvenido! " + userName;
          }
          localStorage.setItem("adm", userName);   
          localStorage.setItem("correo", camp1);  
          localStorage.setItem("clave", camp2);  
        logs(camp2, "Inicio sesión el usuario "+userName);
     
        } else if (camp1 != email && camp2 == avanzada) {
          cont = 2
        } else if (camp1 == email && camp2 != avanzada) {
          cont = 3
        }

      });

      if (cont == 1) {

        Swal.fire({
          title: nombre1,
          text: 'Continua tu camino querido Administrador',
          imageUrl: 'img/Rex.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Rex',
          allowOutsideClick: false,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          confirmButtonText:
            'Continuar!',
        }).then(function () {
         var valorc= JSON.stringify(0);
          sessionStorage.setItem("Cadena1", valorc);
          window.location = "principal.html";
        });

      }
       else if (cont == 2) {

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

          title: 'Correo incorrecto'

        })
      } else if (cont == 3) {
   
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
          title: 'Código incorrecto'
        })
      } else {
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

          title: 'Verifique sus datos'

        })

      }
      cont = 0
    });
}



function logs(codigo1, accion1) {
  var lugar1 = 'Web';
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
  firebase.firestore().collection('Logs').add({
    accion: accion1,
    codidd: codigo1,
    fecha1: fechaYHora,
    lugar: lugar1
  }).then((docRef) => {
 
  })
    .catch((error) => {

    });

}













