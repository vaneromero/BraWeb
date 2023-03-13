/*------------Traductor 1-------- */
function cambiarImagenJS(title) {
  var Aatrox = document.getElementById("mostrar");

  if (title == "primera") {
    Aatrox.setAttribute("src", "img/TarjetaWeb.png");
    var dato = 1
    color(dato, title)

  } else {
    var dato = 2
    color(dato, title)
    Aatrox.setAttribute("src", "img/Reducidas/" + title + ".png");
  }

}
function color(dato, title) {

  var Aatrox11 = document.getElementById("titul15");
  if (dato == 1) {
    Aatrox11.innerHTML = '🔍';
  } else if (dato == 2) {
    Aatrox11.innerHTML = title;
  }
}
/*------------Traductor 2-------- */
function cambiarImagenJS1(title) {
  var Aatrox1 = document.getElementById("mostrar1");
  var Aatrox2 = document.getElementById("mostrar2");
  if (title == "primera") {
    Aatrox1.setAttribute("src", "img/TarjetaWeb.png");
    Aatrox2.setAttribute("src", "img/TarjetaWeb.png");
    var dato = 1
    color1(dato, title)

  } else {
    var dato = 2
    color1(dato, title)
    Aatrox2.setAttribute("src", "img/Reducidas/" + title + ".png");
    Aatrox1.setAttribute("src", "img/Reducidas/Mayuscula.png");
  }

}

function color1(dato, title) {

  var title2 = title.toUpperCase()
  var Aatrox11 = document.getElementById("titul155");
  if (dato == 1) {
    Aatrox11.innerHTML = '🔍';
  } else if (dato == 2) {
    Aatrox11.innerHTML = title2;
  }
}

/*------------Traductor 3-------- */
function cambiarImagenJS2(title) {
  var Aatrox3 = document.getElementById("mostrar3");
  var Aatrox4 = document.getElementById("mostrar4");
  if (title == "primera") {
    Aatrox4.setAttribute("src", "img/TarjetaWeb.png");
    Aatrox3.setAttribute("src", "img/TarjetaWeb.png");
    var dato = 1
    color2(dato, title)

  } else {
    var dato = 2
    color2(dato, title)
    Aatrox4.setAttribute("src", "img/Reducidas/" + title + ".png");
    Aatrox3.setAttribute("src", "img/Reducidas/Numeros.png");
  }

}

function color2(dato, title) {

  var Aatrox11 = document.getElementById("titul1555");
  if (dato == 1) {
    Aatrox11.innerHTML = '🔍';
  } else if (dato == 2) {
    if (title == 'a') {
      Aatrox11.innerHTML = "1";
    } else if (title == 'b') {
      Aatrox11.innerHTML = "2";
    }
    else if (title == 'c') {
      Aatrox11.innerHTML = "3";
    }
    else if (title == 'd') {
      Aatrox11.innerHTML = "4";
    } else if (title == 'e') {
      Aatrox11.innerHTML = "5";
    } else if (title == 'f') {
      Aatrox11.innerHTML = "6";
    } else if (title == 'g') {
      Aatrox11.innerHTML = "7";
    } else if (title == 'h') {
      Aatrox11.innerHTML = "8";
    } else if (title == 'i') {
      Aatrox11.innerHTML = "9";
    } else if (title == 'j') {
      Aatrox11.innerHTML = "0";
    }
  }
}
/*------------Traductor 4-------- */
function cambiarImagenJS3(title) {
  var Aatrox = document.getElementById("mostrar56");

  if (title == "primera") {
    Aatrox.setAttribute("src", "img/TarjetaWeb.png");
    var dato = 1
    color3(dato, title)

  } else {
    var dato = 2
    color3(dato, title)
    Aatrox.setAttribute("src", "img/Simbolos/" + title + ".png");
  }

}
function color3(dato, title) {

  var Aatrox11 = document.getElementById("titul156");
  if (dato == 1) {
    Aatrox11.innerHTML = '🔍';
  } else if (dato == 2) {
    if (title == 'punto') {
      Aatrox11.innerHTML = '.';
    } else if (title == 'coma') {
      Aatrox11.innerHTML = ',';
    } else if (title == 'punto_coma') {
      Aatrox11.innerHTML = ';';
    }
    else if (title == 'dos_puntos') {
      Aatrox11.innerHTML = ':';
    }
    else if (title == 'signos_interrogacion') {
      Aatrox11.innerHTML = '¡!';
    }
    else if (title == 'igual') {
      Aatrox11.innerHTML = '=';
    }
    else if (title == 'signos_admiracion') {
      Aatrox11.innerHTML = '¿?';
    }
    else if (title == 'parentesis_abrir') {
      Aatrox11.innerHTML = '(';
    } else if (title == 'parentesis_cerrar') {
      Aatrox11.innerHTML = ')';
    }
    else if (title == 'asterisco') {
      Aatrox11.innerHTML = '*';
    }
    else if (title == 'doble_flecha') {
      Aatrox11.innerHTML = '»';
    }
    else if (title == 'arroba') {
      Aatrox11.innerHTML = '@';
    }
    else if (title == 'guion_bajo') {
      Aatrox11.innerHTML = '_';
    }
    else if (title == 'diagonal') {
      Aatrox11.innerHTML = '/';
    }
    else if (title == 'barra_vertical') {
      Aatrox11.innerHTML = '|';
    }
    else if (title == 'exponencial') {
      Aatrox11.innerHTML = '^';
    }
    else if (title == 'Numeros') {
      Aatrox11.innerHTML = '#';
    }
    else if (title == 'simbolo_c') {
      Aatrox11.innerHTML = 'Ç';
    } else if (title == 'corchete_abrir') {
      Aatrox11.innerHTML = '[';
    }
    else if (title == 'corchete_cerrar') {
      Aatrox11.innerHTML = ']';
    }
    else if (title == 'multiplicar') {
      Aatrox11.innerHTML = 'x';
    }

    else if (title == 'dividir') {
      Aatrox11.innerHTML = '÷';
    }
    else if (title == 'suma') {
      Aatrox11.innerHTML = '+';
    }

    else if (title == 'resta') {
      Aatrox11.innerHTML = '-';
    }

  }
}
/*--------------TRADUCTOR 5-------------- */
var cadena = "";
var contador = 1;
var contador2 = 1;
var contador3 = 1;
var contador4 = 1;
var contador5 = 1;
var contador6 = 1;
$("#btn1").on("click", function () {
  if (contador == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador = 1;
  }
  else if (contador == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador = 0;
  }

});
$("#btn2").on("click", function () {
  if (contador2 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador2 = 1;
  }
  else if (contador2 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador2 = 0;
  }

});
$("#btn3").on("click", function () {
  if (contador3 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador3 = 1;
  }
  else if (contador3 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador3 = 0;
  }

});
$("#btn4").on("click", function () {
  if (contador4 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador4 = 1;
  }
  else if (contador4 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador4 = 0;
  }

});
$("#btn5").on("click", function () {
  if (contador5 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador5 = 1;
  }
  else if (contador5 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador5 = 0;
  }

});
$("#btn6").on("click", function () {
  if (contador6 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador6 = 1;
  }
  else if (contador6 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador6 = 0;
  }

});
$("#verificar").on("click", function () {
  var resul = document.getElementById("titul15677");

  if (contador == 0) {
    cadena = cadena + "1";
  }
  if (contador2 == 0) {
    cadena = cadena + "2";
  }
  if (contador3 == 0) {
    cadena = cadena + "3";
  }
  if (contador4 == 0) {
    cadena = cadena + "4";
  }
  if (contador5 == 0) {
    cadena = cadena + "5";
  }
  if (contador6 == 0) {
    cadena = cadena + "6";
  }
  if (cadena == "1") {

    resul.innerHTML = 'a';
  } else if (cadena == "12") {
    resul.innerHTML = 'b';
  } else if (cadena == "14") {
    resul.innerHTML = 'c';
  } else if (cadena == "145") {
    resul.innerHTML = 'd';
  } else if (cadena == "15") {
    resul.innerHTML = 'e';
  } else if (cadena == "124") {
    resul.innerHTML = 'f';
  } else if (cadena == "1245") {
    resul.innerHTML = 'g';
  } else if (cadena == "125") {
    resul.innerHTML = 'h';
  } else if (cadena == "24") {
    resul.innerHTML = 'i';
  } else if (cadena == "245") {
    resul.innerHTML = 'j';
  } else if (cadena == "13") {
    resul.innerHTML = 'k';
  } else if (cadena == "123") {
    resul.innerHTML = 'l';
  } else if (cadena == "134") {
    resul.innerHTML = 'm';
  } else if (cadena == "1345") {
    resul.innerHTML = 'n';
  } else if (cadena == "12456") {
    resul.innerHTML = 'ñ';
  } else if (cadena == "135") {
    resul.innerHTML = 'o';
  } else if (cadena == "1234") {
    resul.innerHTML = 'p';
  } else if (cadena == "12345") {
    resul.innerHTML = 'q';
  } else if (cadena == "1235") {
    resul.innerHTML = 'r';
  } else if (cadena == "234") {
    resul.innerHTML = 's';
  } else if (cadena == "2345") {
    resul.innerHTML = 't';
  } else if (cadena == "136") {
    resul.innerHTML = 'u';
  } else if (cadena == "1236") {
    resul.innerHTML = 'v';
  } else if (cadena == "2456") {
    resul.innerHTML = 'w';
  } else if (cadena == "1346") {
    resul.innerHTML = 'x';
  } else if (cadena == "13456") {
    resul.innerHTML = 'y';
  } else if (cadena == "1356") {
    resul.innerHTML = 'z';
  } else if (cadena == "36") {
    resul.innerHTML = 'Ÿ';
  } else if (cadena == "12356") {
    resul.innerHTML = 'á';
  }
  else if (cadena == "345") {
    resul.innerHTML = 'ä';
  }
  else if (cadena == "34") {
    resul.innerHTML = 'í';
  }
  else if (cadena == "2346") {
    resul.innerHTML = 'é';
  }
  else if (cadena == "246") {
    resul.innerHTML = 'ö';
  }
  else if (cadena == "346") {
    resul.innerHTML = 'ó';
  }
  else if (cadena == "23456") {
    resul.innerHTML = 'ú';
  }
  else if (cadena == "1256") {
    resul.innerHTML = 'ü';
  } else {
    cadena = "";
    resul.innerHTML = '🔍';
  }
  cadena = "";

});
$("#borrar").on("click", function () {
  var resul = document.getElementById("titul15677");
  contador = 1;
  contador2 = 1;
  contador3 = 1;
  contador4 = 1;
  contador5 = 1;
  contador6 = 1;
  $("#btn1").css("background-color", "rgb(28, 23, 100)")
  $("#btn2").css("background-color", "rgb(28, 23, 100)")
  $("#btn3").css("background-color", "rgb(28, 23, 100)")
  $("#btn4").css("background-color", "rgb(28, 23, 100)")
  $("#btn5").css("background-color", "rgb(28, 23, 100)")
  $("#btn6").css("background-color", "rgb(28, 23, 100)")
  cadena = "";
  resul.innerHTML = '🔍';
});
/*--------------TRADUCTOR 6-------------- */
var cadena1 = "";
var contador1 = 1;
var contador21 = 1;
var contador31 = 1;
var contador41 = 1;
var contador51 = 1;
var contador61 = 1;
$("#btn11").on("click", function () {
  if (contador1 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador1 = 1;
  }
  else if (contador1 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador1 = 0;
  }

});
$("#btn21").on("click", function () {
  if (contador21 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador21 = 1;
  }
  else if (contador21 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador21 = 0;
  }

});
$("#btn31").on("click", function () {
  if (contador31 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador31 = 1;
  }
  else if (contador31 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador31 = 0;
  }

});
$("#btn41").on("click", function () {
  if (contador41 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador41 = 1;
  }
  else if (contador41 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador41 = 0;
  }

});
$("#btn51").on("click", function () {
  if (contador51 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador51 = 1;
  }
  else if (contador51 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador51 = 0;
  }

});
$("#btn61").on("click", function () {
  if (contador61 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador61 = 1;
  }
  else if (contador61 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador61 = 0;
  }

});
$("#verificar1").on("click", function () {
  var resul1 = document.getElementById("titul156771");

  if (contador1 == 0) {
    cadena1 = cadena1 + "1";
  }
  if (contador21 == 0) {
    cadena1 = cadena1 + "2";
  }
  if (contador31 == 0) {
    cadena1 = cadena1 + "3";
  }
  if (contador41 == 0) {
    cadena1 = cadena1 + "4";
  }
  if (contador51 == 0) {
    cadena1 = cadena1 + "5";
  }
  if (contador61 == 0) {
    cadena1 = cadena1 + "6";
  }
  if (cadena1 == "1") {

    resul1.innerHTML = 'A';
  } else if (cadena1 == "12") {
    resul1.innerHTML = 'B';
  } else if (cadena1 == "14") {
    resul1.innerHTML = 'C';
  } else if (cadena1 == "145") {
    resul1.innerHTML = 'D';
  } else if (cadena1 == "15") {
    resul1.innerHTML = 'E';
  } else if (cadena1 == "124") {
    resul1.innerHTML = 'F';
  } else if (cadena1 == "1245") {
    resul1.innerHTML = 'G';
  } else if (cadena1 == "125") {
    resul1.innerHTML = 'H';
  } else if (cadena1 == "24") {
    resul1.innerHTML = 'I';
  } else if (cadena1 == "245") {
    resul1.innerHTML = 'J';
  } else if (cadena1 == "13") {
    resul1.innerHTML = 'K';
  } else if (cadena1 == "123") {
    resul1.innerHTML = 'L';
  } else if (cadena1 == "134") {
    resul1.innerHTML = 'M';
  } else if (cadena1 == "1345") {
    resul1.innerHTML = 'N';
  } else if (cadena1 == "12456") {
    resul1.innerHTML = 'Ñ';
  } else if (cadena1 == "135") {
    resul1.innerHTML = 'O';
  } else if (cadena1 == "1234") {
    resul1.innerHTML = 'P';
  } else if (cadena1 == "12345") {
    resul1.innerHTML = 'Q';
  } else if (cadena1 == "1235") {
    resul1.innerHTML = 'R';
  } else if (cadena1 == "234") {
    resul1.innerHTML = 'S';
  } else if (cadena1 == "2345") {
    resul1.innerHTML = 'T';
  } else if (cadena1 == "136") {
    resul1.innerHTML = 'U';
  } else if (cadena1 == "1236") {
    resul1.innerHTML = 'V';
  } else if (cadena1 == "2456") {
    resul1.innerHTML = 'W';
  } else if (cadena1 == "1346") {
    resul1.innerHTML = 'X';
  } else if (cadena1 == "13456") {
    resul1.innerHTML = 'Y';
  } else if (cadena1 == "1356") {
    resul1.innerHTML = 'Z';
  } else if (cadena1 == "36") {
    resul1.innerHTML = 'Ÿ';
  } else if (cadena1 == "12356") {
    resul1.innerHTML = 'Á';
  }
  else if (cadena1 == "345") {
    resul1.innerHTML = 'Ä';
  }
  else if (cadena1 == "34") {
    resul1.innerHTML = 'Í';
  }
  else if (cadena1 == "2346") {
    resul1.innerHTML = 'É';
  }
  else if (cadena1 == "246") {
    resul1.innerHTML = 'Ö';
  }
  else if (cadena1 == "346") {
    resul1.innerHTML = 'Ó';
  }
  else if (cadena1 == "23456") {
    resul1.innerHTML = 'Ú';
  }
  else if (cadena1 == "1256") {
    resul1.innerHTML = 'Ü';
  } else {
    cadena1 = "";
    resul1.innerHTML = '🔍';
  }
  cadena1 = "";

});
$("#borrar1").on("click", function () {
  var resul1 = document.getElementById("titul156771");
  contador1 = 1;
  contador21 = 1;
  contador31 = 1;
  contador41 = 1;
  contador51 = 1;
  contador61 = 1;
  $("#btn11").css("background-color", "rgb(28, 23, 100)")
  $("#btn21").css("background-color", "rgb(28, 23, 100)")
  $("#btn31").css("background-color", "rgb(28, 23, 100)")
  $("#btn41").css("background-color", "rgb(28, 23, 100)")
  $("#btn51").css("background-color", "rgb(28, 23, 100)")
  $("#btn61").css("background-color", "rgb(28, 23, 100)")
  cadena1 = "";
  resul1.innerHTML = '🔍';
});
/*--------------TRADUCTOR 7-------------- */
var cadena11 = "";
var contador11 = 1;
var contador211 = 1;
var contador311 = 1;
var contador411 = 1;
var contador511 = 1;
var contador611 = 1;
$("#btn111").on("click", function () {
  if (contador11 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador11 = 1;
  }
  else if (contador11 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador11 = 0;
  }

});
$("#btn211").on("click", function () {
  if (contador211 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador211 = 1;
  }
  else if (contador211 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador211 = 0;
  }

});
$("#btn311").on("click", function () {
  if (contador311 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador311 = 1;
  }
  else if (contador311 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador311 = 0;
  }

});
$("#btn411").on("click", function () {
  if (contador411 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador411 = 1;
  }
  else if (contador411 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador411 = 0;
  }

});
$("#btn511").on("click", function () {
  if (contador511 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador511 = 1;
  }
  else if (contador511 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador511 = 0;
  }

});
$("#btn611").on("click", function () {
  if (contador611 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador611 = 1;
  }
  else if (contador611 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador611 = 0;
  }

});
$("#verificar11").on("click", function () {
  var resul11 = document.getElementById("titul1567711");
  if (contador11 == 0) {
    cadena11 = cadena11 + "1";
  }
  if (contador211 == 0) {
    cadena11 = cadena11 + "2";
  }
  if (contador311 == 0) {
    cadena11 = cadena11 + "3";
  }
  if (contador411 == 0) {
    cadena11 = cadena11 + "4";
  }
  if (contador511 == 0) {
    cadena11 = cadena11 + "5";
  }
  if (contador611 == 0) {
    cadena11 = cadena11 + "6";
  }
  if (cadena11 == "1") {

    resul11.innerHTML = '1';
  } else if (cadena11 == "12") {
    resul11.innerHTML = '2';
  } else if (cadena11 == "14") {
    resul11.innerHTML = '3';
  } else if (cadena11 == "145") {
    resul11.innerHTML = '4';
  } else if (cadena11 == "15") {
    resul11.innerHTML = '5';
  } else if (cadena11 == "124") {
    resul11.innerHTML = '6';
  } else if (cadena11 == "1245") {
    resul11.innerHTML = '7';
  } else if (cadena11 == "125") {
    resul11.innerHTML = '8';
  } else if (cadena11 == "24") {
    resul11.innerHTML = '9';
  } else if (cadena11 == "245") {
    resul11.innerHTML = '0';
  } else {
    cadena11 = "";
    resul11.innerHTML = '🔍';
  }
  cadena11 = "";

});
$("#borrar11").on("click", function () {
  var resul11 = document.getElementById("titul1567711");
  contador11 = 1;
  contador211 = 1;
  contador311 = 1;
  contador411 = 1;
  contador511 = 1;
  contador611 = 1;
  $("#btn111").css("background-color", "rgb(28, 23, 100)")
  $("#btn211").css("background-color", "rgb(28, 23, 100)")
  $("#btn311").css("background-color", "rgb(28, 23, 100)")
  $("#btn411").css("background-color", "rgb(28, 23, 100)")
  $("#btn511").css("background-color", "rgb(28, 23, 100)")
  $("#btn611").css("background-color", "rgb(28, 23, 100)")
  cadena11 = "";
  resul11.innerHTML = '🔍';
});


/*--------------TRADUCTOR 8-------------- */
var cadena111 = "";
var contador111 = 1;
var contador2111 = 1;
var contador3111 = 1;
var contador4111 = 1;
var contador5111 = 1;
var contador6111 = 1;
$("#btn1111").on("click", function () {
  if (contador111 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador111 = 1;
  }
  else if (contador111 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador111 = 0;
  }

});
$("#btn2111").on("click", function () {
  if (contador2111 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador2111 = 1;
  }
  else if (contador2111 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador2111 = 0;
  }

});
$("#btn3111").on("click", function () {
  if (contador3111 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador3111 = 1;
  }
  else if (contador3111 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador3111 = 0;
  }

});
$("#btn4111").on("click", function () {
  if (contador4111 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador4111 = 1;
  }
  else if (contador4111 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador4111 = 0;
  }

});
$("#btn5111").on("click", function () {
  if (contador5111 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador5111 = 1;
  }
  else if (contador5111 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador5111 = 0;
  }

});
$("#btn6111").on("click", function () {
  if (contador6111 == 0) {
    $(this).css("background-color", "rgb(28, 23, 100)")
    contador6111 = 1;
  }
  else if (contador6111 == 1) {
    $(this).css("background-color", "rgb(100, 23, 40)")
    contador6111 = 0;
  }

});
$("#verificar111").on("click", function () {
  var resul111 = document.getElementById("titul15677111");
  if (contador111 == 0) {
    cadena111 = cadena111 + "1";
  }
  if (contador2111 == 0) {
    cadena111 = cadena111 + "2";
  }
  if (contador3111 == 0) {
    cadena111 = cadena111 + "3";
  }
  if (contador4111 == 0) {
    cadena111 = cadena111 + "4";
  }
  if (contador5111 == 0) {
    cadena111 = cadena111 + "5";
  }
  if (contador6111 == 0) {
    cadena111 = cadena111 + "6";
  }

  if (cadena111 == "3") {
    resul111.innerHTML = '.';
  } else if (cadena111 == "2") {
    resul111.innerHTML = ',';
  } else if (cadena111 == "23") {
    resul111.innerHTML = ';';
  } else if (cadena111 == "25") {
    resul111.innerHTML = ':';
  } else if (cadena111 == "235") {
    resul111.innerHTML = '¡!';
  } else if (cadena111 == "2356") {
    resul111.innerHTML = '=';
  } else if (cadena111 == "26") {
    resul111.innerHTML = '¿?';
  } else if (cadena111 == "126") {
    resul111.innerHTML = '(';
  } else if (cadena111 == "345") {
    resul111.innerHTML = ')';
  } else if (cadena111 == "35") {
    resul111.innerHTML = '*';
  } else if (cadena111 == "356") {
    resul111.innerHTML = '»';
  } else if (cadena111 == "5") {
    resul111.innerHTML = '@';
  } else if (cadena111 == "6") {
    resul111.innerHTML = '_';
  } else if (cadena111 == "34") {
    resul111.innerHTML = '/';
  } else if (cadena111 == "456") {
    resul111.innerHTML = '|';
  } else if (cadena111 == "12") {
    resul111.innerHTML = '^';
  } else if (cadena111 == "3456") {
    resul111.innerHTML = '#';
  } else if (cadena111 == "12346") {
    resul111.innerHTML = 'Ç';
  } else if (cadena111 == "12356") {
    resul111.innerHTML = '[';
  } else if (cadena111 == "23456") {
    resul111.innerHTML = ']';
  } else if (cadena111 == "236") {
    resul111.innerHTML = 'x';
  } else if (cadena111 == "256") {
    resul111.innerHTML = '÷';
  } else if (cadena111 == "1256") {
    resul111.innerHTML = '+';
  } else if (cadena111 == "36") {
    resul111.innerHTML = '-';
  } else {
    cadena111 = "";
    resul111.innerHTML = '🔍';
  }
  cadena111 = "";


});
$("#borrar111").on("click", function () {
  var resul111 = document.getElementById("titul15677111");
  contador111 = 1;
  contador2111 = 1;
  contador3111 = 1;
  contador4111 = 1;
  contador5111 = 1;
  contador6111 = 1;
  $("#btn1111").css("background-color", "rgb(28, 23, 100)")
  $("#btn2111").css("background-color", "rgb(28, 23, 100)")
  $("#btn3111").css("background-color", "rgb(28, 23, 100)")
  $("#btn4111").css("background-color", "rgb(28, 23, 100)")
  $("#btn5111").css("background-color", "rgb(28, 23, 100)")
  $("#btn6111").css("background-color", "rgb(28, 23, 100)")
  cadena111 = "";
  resul111.innerHTML = '🔍';
});
/*---------------btn qr--------------- */
const tasksContainer37 = document.getElementById("btntres");

firebase.database().ref('Redes').equalTo('LinkAdmin').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var qrq= childSnapshot.val().qrf;
   
      tasksContainer37.innerHTML = `
      <a class="boton tres" href="${qrq}" target="_blank" ><span >QR</span></a>
      `
    });
  });
  /*-----Documentos---------- */
const tasksContainer25 = document.getElementById("Documentos");

firebase.database().ref('Documentos/').orderByKey().once('value').then(
  function (snapshot) {

    snapshot.forEach(function (childSnapshot) {
      var nombre = childSnapshot.val().nombre;
      var url1 = childSnapshot.val().url1;
      var url2 = childSnapshot.val().url2;
      var url3 = childSnapshot.val().url3;
      tasksContainer25.innerHTML += `
        <tr>
        <td class=label>${nombre}</td>
        <td class=label>
            <a href="${url2}" target="_blank"><button type="button"
                    class="botonimagen"></button></a>
        </td>
        <td class=label>

            <a href="${url3}" target="_blank"><button type="button"
                    class="botonimagen1"></button></a>
                </td>
        <td class=label>

            <a href="${url1}" target="_blank"><button type="button"
                    class="botonimagen2"></button></a>
                </td>
    </tr>
   `

    });
  });
  /*------------Video 1-------- */
const tasksContainer26 = document.getElementById("contenedor41");

firebase.database().ref('Video').equalTo('memo').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;
      var link = "https://www.youtube.com/embed/videoseries?" + url
      tasksContainer26.innerHTML += `<iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  });
/*------------Video 2-------- */
const tasksContainer27 = document.getElementById("contenedor411");

firebase.database().ref('Video').equalTo('rompe').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;
      var link = "https://www.youtube.com/embed/videoseries?" + url
      tasksContainer27.innerHTML += `<iframe src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
  });
  /*------------Video 3-------- */
const tasksContainer28 = document.getElementById("contenedor4111");

firebase.database().ref('Video').equalTo('util').orderByKey().once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var url = childSnapshot.val().video4;

      var link = "https://www.youtube.com/embed/" + url

      tasksContainer28.innerHTML += `<iframe src="${link}" title="Braille Package" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    });
  });
  /*---------recomendación--------*/
const tasksContainer34 = document.getElementById("tarjetas1");
firebase.database().ref('Recomendaciones').once('value').then(
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      var desc = childSnapshot.val().descripcion;
      var foto = childSnapshot.val().imagen;
      var titulos = childSnapshot.val().nombre;
      tasksContainer34.innerHTML += `
         <div class="card">
            <div class="face front">
                <img src="${foto}" alt="">
                <h3>${titulos}</h3>
            </div>
            <div class="face back">
                <h3>${titulos}</h3>
                <p>${desc}</p>
                <div class="link">
                    <a href="${foto}" target="_blank">Ver en Grande</a>
                </div>
            </div>
        </div>
         `
    });
  });