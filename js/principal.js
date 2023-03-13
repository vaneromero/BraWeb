/*--------------------------Reproductor ---------------*/
function cerrar() {

}
$("#cerrarAviso").on("click", function (event) {
    event.preventDefault();
    $("#abrirAviso").css("display", "block")
    $("#cerrarAviso").css("display", "none")
    $("#botonAbrir").css("display", "block")
    $("#barraflotantewcv").css("display", "none")
});
$("#abrirAviso").on("click", function (event) {
    event.preventDefault();
    $("#abrirAviso").css("display", "none")
    $("#cerrarAviso").css("display", "block")
    $("#botonAbrir").css("display", "none")
    $("#barraflotantewcv").css("display", "block")
});
/*--------------------------Nombre de Usuario ---------------*/
document.getElementById('namesitoAd').innerHTML = "Bienvenido...<br> <a style='color:77c7e0; font-size: 2.5vw;font-family: Georgia, 'Times New Roman', Times, serif;font-weight: bold;'>" + localStorage.getItem("adm") + "<a>";
/*--------------------------Controles---------------*/
$("#ReSoBTN").on("click", function (event) {
    event.preventDefault();
    document.getElementById("linkr").value = "";
    document.getElementById("linkr1").value = "";
    document.getElementById('actualizarr').style.display = 'none';
    document.getElementById("linkr10").value = "";
    document.getElementById('idnevsdtext').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "block";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
});
$("#Links1BTN").on("click", function (event) {
    event.preventDefault();
    document.getElementById("linkrAL").value = "";
    document.getElementById("linkr1AL").value = "";
    document.getElementById("linkr1AL0").value = "";
    document.getElementById('actualizarrAL').style.display = 'none';
    document.getElementById('idnevsdtext1').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "block";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
});
function BPPBTN() {
    document.getElementById("tituloE44").value = "";
    document.getElementById("descrE44").value = "";
    document.getElementById('form3434').style.display = 'none';
    document.getElementById('form123344').style.display = 'none';
    document.getElementById('form12334').style.display = 'block';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "block";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function PsBTN() {
    document.getElementById("tituloE445").value = "";
    document.getElementById("descrE445").value = "";
    document.getElementById('form34345').style.display = 'none';
    document.getElementById('form1233445').style.display = 'none';
    document.getElementById('form123345').style.display = 'block';
    document.getElementById('eli33456').style.display = 'inline';
    document.getElementById('limp3456').style.display = 'none';
    document.getElementById('cancel33456').style.display = 'inline';
    document.getElementById('form343456').style.display = 'none';
    document.getElementById('form12334456').style.display = 'none';
    document.getElementById('form123456').style.display = 'none';
    document.getElementById('form1233456').style.display = 'block';
    document.getElementById('RecPS').style.display = 'inline';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "block";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function REcoBTN() {
    document.getElementById("tituloE445").value = "";
    document.getElementById("descrE445").value = "";
    document.getElementById('form123345').style.display = 'none';
    document.getElementById('form12345').style.display = 'none';
    document.getElementById('form34345').style.display = 'none';
    document.getElementById('form123345').style.display = 'block';
    document.getElementById('form1233445').style.display = 'none';
    document.getElementById('eli33465').style.display = 'inline';
    document.getElementById('limp345').style.display = 'none';
    document.getElementById('cancel3345').style.display = 'inline';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "block";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function Cono2BTN() {
    document.getElementById('selecUs').style.display = 'block';
    document.getElementById('Vane').style.display = 'none';
    document.getElementById('form349').style.display = 'none';
    document.getElementById('lale').style.display = 'none';
    document.getElementById('form3491').style.display = 'none';
    document.getElementById('label391').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "block";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function GalTBTN() {
    document.getElementById('upprogress').value = "";
    document.getElementById('namebox').value = "";
    document.getElementById('myimg').style.display = 'none';
    document.getElementById('selbtn').style.display = 'inline';
    document.getElementById('upbtn').style.display = 'none';
    document.getElementById('limp').style.display = 'none';
    $('#myimg').attr("src", 'img/logopa1.png');
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "block";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function GalAlumBTN() {
    document.getElementById('upprogress1').value = "";
    document.getElementById('namebox1').value = "";
    document.getElementById('myimg1').style.display = 'none';
    document.getElementById('selbtn1').style.display = 'inline';
    document.getElementById('upbtn1').style.display = 'none';
    document.getElementById('limp1').style.display = 'none';
    $('#myimg1').attr("src", 'img/logopa1.png');
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "block";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function GalAdminBTN() {
    document.getElementById('upprogress12').value = "";
    document.getElementById('namebox12').value = "";
    document.getElementById('myimg12').style.display = 'none';
    document.getElementById('selbtn12').style.display = 'inline';
    document.getElementById('upbtn12').style.display = 'none';
    document.getElementById('limp12').style.display = 'none';
    $('#myimg12').attr("src", 'img/logopa1.png');
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");
    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "block";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function GalEscuBTN() {
    document.getElementById('upprogress3').value = "";
    document.getElementById('namebox3').value = "";
    document.getElementById('form1233').style.display = 'block';
    document.getElementById('registrarE').style.display = 'inline';
    document.getElementById('limpiarE').style.display = 'inline';
    document.getElementById('Refhyrf').style.display = 'inline';
    document.getElementById("tituloE").value = "";
    document.getElementById("descrE").value = "";
    document.getElementById('form123').style.display = 'none';
    document.getElementById("tituloE").disabled = false;
    document.getElementById("descrE").disabled = false;
    document.getElementById('form123').style.display = 'none';
    document.getElementById('myimg3').style.display = 'none';
    document.getElementById('selbtn3').style.display = 'inline';
    document.getElementById('upbtn3').style.display = 'none';
    document.getElementById('limp3').style.display = 'none';
    $('#myimg3').attr("src", 'img/logopa1.png');
    document.getElementById('form343').style.display = 'none';
    document.getElementById('form123357').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "block";


    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function vid1BTN() {
    document.getElementById("video").value = "";
    document.getElementById("links7").value = "";
    document.getElementById("linksq").value = "";
    document.getElementById('actualizar').style.display = 'none';
    document.getElementById('idkd').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "block";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function doc1BTN() {
    document.getElementById("tituloD").value = "";
    document.getElementById("docx").value = "";
    document.getElementById("pdf").value = "";
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "block";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function va1BTN() {
    document.getElementById("linkrV").value = "";
    document.getElementById("linkr1V").value = "";
    document.getElementById('actualizarrV').style.display = 'none';
    document.getElementById('idnevsdtext2').style.display = "none"
    document.getElementById('Cancelf').style.display = "none"
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "block";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function avid1BTN() {
    document.getElementById('fechaa').style.display = 'none';
    document.getElementById('idi').style.display = 'none';
    document.getElementById('idkddsf').style.display = 'none';
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
    document.getElementById("idi").value = "";
    document.getElementById("fechaa").value = "";
    document.getElementById('agreA').style.display = 'inline';
    document.getElementById('agreA1').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "block";
    cont15.style.display = "none";
    cont16.style.display = "none";
}
function comun1BTN() {
    document.getElementById('iffdddsf').style.display = 'none';
    document.getElementById("fecha").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("pregunta").value = "";
    document.getElementById("respuesta").value = "";
    document.getElementById("id").value = "";
    document.getElementById('registrar1').style.display = 'none';
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "block";
    cont16.style.display = "none";
}
function log1BTN() {
    refVIBTN()
    Swal.fire({
        title: 'Verificación..',
        html: `
          <input type="password" id="password2" placeholder="Contraseña 8 digitos"style="width: 95%;">`,
        confirmButtonText: 'Confirmar',
        focusConfirm: false,
        showCancelButton: true,
        allowOutsideClick: false,
        preConfirm: () => {
            const password2 = Swal.getPopup().querySelector('#password2').value;
            return { password2: password2 }
        }


    })
        .then((result) => {
            if (result.isConfirmed) {

                if (!password2) {
                    Swal.showValidationMessage(`Ingrese sus datos..`)
                    refVIBTN();
                }
                else {
                    if (result.value.password2 == "Dexter02") {
                        var cont1 = document.getElementById("ReSo");
                        var cont2 = document.getElementById("Links1");
                        var cont3 = document.getElementById("BPP");
                        var cont4 = document.getElementById("Ps");
                        var cont5 = document.getElementById("REco");
                        var cont6 = document.getElementById("Cono2");

                        var cont7 = document.getElementById("GalT");
                        var cont8 = document.getElementById("GalAlum");
                        var cont9 = document.getElementById("GalAdmin");
                        var cont10 = document.getElementById("GalEscu");

                        var cont11 = document.getElementById("vid1");
                        var cont12 = document.getElementById("doc1");
                        var cont13 = document.getElementById("va1");
                        var cont14 = document.getElementById("avid1");
                        var cont15 = document.getElementById("comun1");
                        var cont16 = document.getElementById("log1");
                        cont1.style.display = "none";
                        cont2.style.display = "none";
                        cont3.style.display = "none";
                        cont4.style.display = "none";
                        cont5.style.display = "none";
                        cont6.style.display = "none";
                        cont7.style.display = "none";
                        cont8.style.display = "none";
                        cont9.style.display = "none";
                        cont10.style.display = "none";
                        cont11.style.display = "none";
                        cont12.style.display = "none";
                        cont13.style.display = "none";
                        cont14.style.display = "none";
                        cont15.style.display = "none";
                        cont16.style.display = "block";
                        logs(localStorage.getItem("clave"), "Inicio sesión el usuario " + localStorage.getItem("adm") + " en Avanzadas");
                        carga();
                    }
                    else {
                        refVIBTN()
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

                            title: ' Datos Incorrectos..'

                        })
                    }

                }
            }
            else {
                console.log("gfd", "Cancelo");
                refVIBTN()
            }
        })
}
function RefCDaBTN() {
    refrescarR();
    refrescarL();
    recargar1BP();
    recargar1PS();
    recargar1Reco();
    recargarCpon();
    recargar1Vid();
    recargar1D();
    recargar1V();
    carg2();
    ReAvi();
    galT();
    galAlum();
    galAdmin();
    recargarEscu();
    carga();
    use();
}
function refVIBTN() {
    var cont1 = document.getElementById("ReSo");
    var cont2 = document.getElementById("Links1");
    var cont3 = document.getElementById("BPP");
    var cont4 = document.getElementById("Ps");
    var cont5 = document.getElementById("REco");
    var cont6 = document.getElementById("Cono2");

    var cont7 = document.getElementById("GalT");
    var cont8 = document.getElementById("GalAlum");
    var cont9 = document.getElementById("GalAdmin");
    var cont10 = document.getElementById("GalEscu");

    var cont11 = document.getElementById("vid1");
    var cont12 = document.getElementById("doc1");
    var cont13 = document.getElementById("va1");
    var cont14 = document.getElementById("avid1");
    var cont15 = document.getElementById("comun1");
    var cont16 = document.getElementById("log1");
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
    cont6.style.display = "none";
    cont7.style.display = "none";
    cont8.style.display = "none";
    cont9.style.display = "none";
    cont10.style.display = "none";
    cont11.style.display = "none";
    cont12.style.display = "none";
    cont13.style.display = "none";
    cont14.style.display = "none";
    cont15.style.display = "none";
    cont16.style.display = "none";
}

/*----------------------Accesos----------------*/
/*----------------------Redes Sociales vane, ale y bp---------------*/
/*------------PrecargarTablas-------- */
refrescarR();
refrescarL();
/*------------Eliminar Redes;-------- */
function EliminarR() {
    firebase.database().ref('Redes/Arely Vanessa/').update({ "Facebook": "" });
    firebase.database().ref('Redes/Arely Vanessa/').update({ "Instagram": "" });
    firebase.database().ref('Redes/Arely Vanessa/').update({ "Telegram": "" });
    firebase.database().ref('Redes/Arely Vanessa/').update({ "Twitter": "" });
    firebase.database().ref('Redes/Arely Vanessa/').update({ "Whatsapp": "" });

    firebase.database().ref('Redes/Alejandro/').update({ "Facebook": "" });
    firebase.database().ref('Redes/Alejandro/').update({ "Instagram": "" });
    firebase.database().ref('Redes/Alejandro/').update({ "Telegram": "" });
    firebase.database().ref('Redes/Alejandro/').update({ "Twitter": "" });
    firebase.database().ref('Redes/Alejandro/').update({ "Whatsapp": "" });


    firebase.database().ref('Redes/BraApp/').update({ "Facebook": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Instagram": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Pagina": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Telegram": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Twitter": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Youtube": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Spotify": "" });;
    firebase.database().ref('Redes/BraApp/').update({ "Tiktok": "" });
    firebase.database().ref('Redes/BraApp/').update({ "Whatsapp": "" });
    refrescarR()
}
function refrescarR() {
    const tasksContainer44 = document.getElementById("table15");
    firebase.database().ref('Redes').equalTo('Arely Vanessa').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().Facebook != "") {
                    var mensj1 = "buena";
                } else if (childSnapshot.val().Facebook == "") {
                    var mensj1 = "mala";
                }
                if (childSnapshot.val().Instagram != "") {
                    var mensj2 = "buena";
                } else if (childSnapshot.val().Instagram == "") {
                    var mensj2 = "mala";
                }
                if (childSnapshot.val().Twitter != "") {
                    var mensj3 = "buena";
                } else if (childSnapshot.val().Twitter == "") {
                    var mensj3 = "mala";
                }
                if (childSnapshot.val().Telegram != "") {
                    var mensj4 = "buena"
                } else if (childSnapshot.val().Telegram == "") {
                    var mensj4 = "mala";
                }
                if (childSnapshot.val().Whatsapp != "") {
                    var mensj5 = "buena";
                } else if (childSnapshot.val().Whatsapp == "") {
                    var mensj5 = "mala";
                }
                tasksContainer44.innerHTML = `
            <tr>
        
            <td class=label><img src="img/facebook.png" width="50px"></td>
            <td class=label>Arely Vanessa</td>
            <td class=label><img src="img/${mensj1}.png" width="50px"></td>
            <td><a type='button' name="Facebook" title="Arely Vanessa" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
            </td>
            <td>
            <a type='button' name="Facebook" title="Arely Vanessa" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a></td>
            </tr>
            <tr>
          
            <td class=label><img src="img/instagram.png" width="50px"></td>
            <td class=label>Arely Vanessa</td>
            <td class=label><img src="img/${mensj2}.png" width="50px"></td>
            <td>
            <a type='button' name="Instagram" title="Arely Vanessa" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
            </td>
            <td>
            <a type='button' name="Instagram" title="Arely Vanessa" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
            </td>
            </tr>
            <tr>
        
            <td class=label><img src="img/telegrama.png" width="50px"></td>
            <td class=label>Arely Vanessa</td>
            <td class=label><img src="img/${mensj4}.png" width="50px"></td>
       
            <td>
            <a type='button' name="Telegram" title="Arely Vanessa" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
            </td>
            <td>
            <a type='button' name="Telegram" title="Arely Vanessa" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
            </td>
            </tr>
            <tr>
          
            <td class=label><img src="img/twitter.png" width="50px"></td>
            <td class=label>Arely Vanessa</td>
            <td class=label><img src="img/${mensj3}.png" width="50px"></td>
         
           <td>
            <a type='button' name="Twitter" title="Arely Vanessa" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
            </td>
            <td>
            <a type='button' name="Twitter" title="Arely Vanessa" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
            </td>

            </tr>
            <tr>
                <td class=label><img src="img/whatsapp.png" width="50px"></td>
                <td class=label>Arely Vanessa</td>
                <td class=label><img src="img/${mensj5}.png" width="50px"></td>
       
            <td>
            <a type='button' name="Whatsapp" title="Arely Vanessa" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
            </td>
            <td>
            <a type='button' name="Whatsapp" title="Arely Vanessa" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
            </td>
            </tr>
            `
            });
            /*------------Redes lale-------- */
            const tasksContainer45 = document.getElementById("table16");
            firebase.database().ref('Redes').equalTo('Alejandro').orderByKey().once('value').then(
                function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        if (childSnapshot.val().Facebook != "") {
                            var mensj1 = "buena";
                        } else if (childSnapshot.val().Facebook == "") {
                            var mensj1 = "mala";
                        }
                        if (childSnapshot.val().Instagram != "") {
                            var mensj2 = "buena";
                        } else if (childSnapshot.val().Instagram == "") {
                            var mensj2 = "mala";
                        }
                        if (childSnapshot.val().Twitter != "") {
                            var mensj3 = "buena";
                        } else if (childSnapshot.val().Twitter == "") {
                            var mensj3 = "mala";
                        }
                        if (childSnapshot.val().Telegram != "") {
                            var mensj4 = "buena"
                        } else if (childSnapshot.val().Telegram == "") {
                            var mensj4 = "mala";
                        }
                        if (childSnapshot.val().Whatsapp != "") {
                            var mensj5 = "buena";
                        } else if (childSnapshot.val().Whatsapp == "") {
                            var mensj5 = "mala";
                        }

                        tasksContainer45.innerHTML = `
        <tr>
        <td class=label><img src="img/facebook.png" width="50px"></td>
        <td class=label>Alejandro</td>
        <td class=label><img src="img/${mensj1}.png" width="50px"></td>
        <td>
        <a type='button' name="Facebook" title="Alejandro" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Facebook" title="Alejandro" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
        </tr>
        <tr>
        <td class=label><img src="img/instagram.png" width="50px"></td>
        <td class=label>Alejandro</td>
        <td class=label><img src="img/${mensj2}.png" width="50px"></td>

        <td>
        <a type='button' name="Instagram" title="Alejandro" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Instagram" title="Alejandro" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px"></a>
        </td>
        </tr>
        <tr>
        <td class=label><img src="img/telegrama.png" width="50px"></td>
        <td class=label>Alejandro</td>
        <td class=label><img src="img/${mensj4}.png" width="50px"></td>
     
        <td>
        <a type='button' name="Telegram" title="Alejandro" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px"></a>
        </td>
        <td>
        <a type='button' name="Telegram" title="Alejandro" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px"></a>
        </td>
        </tr>
        <tr>
        <td class=label><img src="img/twitter.png" width="50px"></td>
        <td class=label>Alejandro</td>
        <td class=label><img src="img/${mensj3}.png" width="50px"></td>

        <td>
        <a type='button' name="Twitter" title="Alejandro" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Twitter" title="Alejandro" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
        </tr>
        <tr>
        <td class=label><img src="img/whatsapp.png" width="50px"></td>
        <td class=label>Alejandro</td>
        <td class=label><img src="img/${mensj5}.png" width="50px"></td>
         <td>
        <a type='button' name="Whatsapp" title="Alejandro" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Whatsapp" title="Alejandro" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
        </tr>
        `
                    });
                
            /*------------Redes braillepackage-------- */
            const tasksContainer46 = document.getElementById("table17");
            firebase.database().ref('Redes').equalTo('BraApp').orderByKey().once('value').then(
                function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {

                        if (childSnapshot.val().Facebook != "") {
                            var mensj1 = "buena"
                        } else if (childSnapshot.val().Facebook == "") {
                            var mensj1 = "mala"
                        }
                        if (childSnapshot.val().Instagram != "") {
                            var mensj2 = "buena"
                        } else if (childSnapshot.val().Instagram == "") {
                            var mensj2 = "mala"
                        }
                        if (childSnapshot.val().Pagina != "") {
                            var mensj3 = "buena"
                        } else if (childSnapshot.val().Pagina == "") {
                            var mensj3 = "mala"
                        }
                        if (childSnapshot.val().Twitter != "") {
                            var mensj4 = "buena"
                        } else if (childSnapshot.val().Twitter == "") {
                            var mensj4 = "mala"
                        }
                        if (childSnapshot.val().Telegram != "") {
                            var mensj5 = "buena"
                        } else if (childSnapshot.val().Telegram == "") {
                            var mensj5 = "mala"
                        }
                        if (childSnapshot.val().Youtube != "") {
                            var mensj6 = "buena"
                        } else if (childSnapshot.val().Youtube == "") {
                            var mensj6 = "mala"
                        }
                        if (childSnapshot.val().Whatsapp != "") {
                            var mensj7 = "buena"
                        } else if (childSnapshot.val().Whatsapp == "") {
                            var mensj7 = "mala"
                        }
                        if (childSnapshot.val().Spotify != "") {
                            var mensj8 = "buena"
                        } else if (childSnapshot.val().Spotify == "") {
                            var mensj8 = "mala"
                        }
                        if (childSnapshot.val().Tiktok != "") {
                            var mensj9 = "buena"
                        } else if (childSnapshot.val().Tiktok == "") {
                            var mensj9 = "mala"
                        }
                        tasksContainer46.innerHTML = `
                
        <tr>
        <td class=label><img src="img/facebook.png" width="50px"></td>
        <td class=label>BraApp</td>
        <td class=label><img src="img/${mensj1}.png" width="50px"></td>
 
        <td>
        <a type='button' name="Facebook" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Facebook" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
    </tr>
    <tr>
        <td class=label><img src="img/instagram.png" width="50px"></td>
        <td class=label>BraApp</td>
        <td class=label><img src="img/${mensj2}.png" width="50px"></td>
        <td>
        <a type='button' name="Instagram" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Instagram" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
    </tr>
    <tr>
        <td class=label><img src="img/sitio-web.png" width="50px"></td>
        <td class=label>BraApp</td>
        <td class=label><img src="img/${mensj3}.png" width="50px"></td>
        <td>
        <a type='button' name="Pagina" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Pagina" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
    </tr>
    <tr>
        <td class=label><img src="img/twitter.png" width="50px"></td>
        <td class=label>BraApp</td>
        <td class=label><img src="img/${mensj4}.png" width="50px"></td>

        <td>
        <a type='button' name="Twitter" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Twitter" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
    </tr>
    <tr>
        <td class=label><img src="img/telegrama.png" width="50px"></td>
        <td class=label>BraApp</td>
        <td class=label><img src="img/${mensj5}.png" width="50px"></td>

        <td>
        <a type='button' name="Telegram" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Telegram" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
    </tr>
    <tr>
        <td class=label><img src="img/youtube.png" width="50px"></td>
        <td class=label>BraApp</td>
        <td class=label><img src="img/${mensj6}.png" width="50px"></td>

        <td>
        <a type='button' name="Youtube" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
        </td>
        <td>
        <a type='button' name="Youtube" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
        </td>
    </tr>
    <tr>
    <td class=label><img src="img/whatsapp.png" width="50px"></td>
    <td class=label>BraApp</td>
    <td class=label><img src="img/${mensj7}.png" width="50px"></td>
  
    <td>
    <a type='button' name="Whatsapp" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
    </td>
    <td>
    <a type='button' name="Whatsapp" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
    </td>
    </tr>
    <tr>
    <td class=label><img src="img/spotify.png" width="50px"></td>
    <td class=label>BraApp</td>
    <td class=label><img src="img/${mensj8}.png" width="50px"></td>

    <td>
    <a type='button' name="Spotify" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
    </td>
    <td>
    <a type='button' name="Spotify" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
    </td>
    </tr>
    <tr>
    <td class=label><img src="img/tik-tok.png" width="50px"></td>
    <td class=label>BraApp</td>
    <td class=label><img src="img/${mensj9}.png" width="50px"></td>
    <td>
    <a type='button' name="Tiktok" title="BraApp" onclick=actualizarr(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
    </td>
    <td>
    <a type='button' name="Tiktok" title="BraApp" onclick=EliminaRr(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
    </td>
    </tr>
`
                    });
                });
            });
        });

}
/*------------Redes Sociales vane, ale y bp-------- */
function actualizarr1() {

    var inpu = document.getElementById("linkr").value;
    var name = document.getElementById("linkr1").value;
    var isi = document.getElementById("linkr10").value;
    if (inpu != "") {
        if (isi == "Arely Vanessa") {
            if (name == "Facebook") {
                firebase.database().ref('Redes/Arely Vanessa/').update({ "Facebook": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Instagram") {
                firebase.database().ref('Redes/Arely Vanessa/').update({ "Instagram": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Telegram") {
                firebase.database().ref('Redes/Arely Vanessa/').update({ "Telegram": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Twitter") {
                firebase.database().ref('Redes/Arely Vanessa/').update({ "Twitter": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Whatsapp") {
                firebase.database().ref('Redes/Arely Vanessa/').update({ "Whatsapp": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }


        } else if (isi == "Alejandro") {
            if (name == "Facebook") {
                firebase.database().ref('Redes/Alejandro/').update({ "Facebook": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Instagram") {
                firebase.database().ref('Redes/Alejandro/').update({ "Instagram": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Telegram") {
                firebase.database().ref('Redes/Alejandro/').update({ "Telegram": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Twitter") {
                firebase.database().ref('Redes/Alejandro/').update({ "Twitter": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Whatsapp") {
                firebase.database().ref('Redes/Alejandro/').update({ "Whatsapp": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }
        } else if (isi == "BraApp") {
            if (name == "Facebook") {
                firebase.database().ref('Redes/BraApp/').update({ "Facebook": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Instagram") {
                firebase.database().ref('Redes/BraApp/').update({ "Instagram": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Pagina") {
                firebase.database().ref('Redes/BraApp/').update({ "Pagina": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }
            else if (name == "Telegram") {
                firebase.database().ref('Redes/BraApp/').update({ "Telegram": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Twitter") {
                firebase.database().ref('Redes/BraApp/').update({ "Twitter": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            } else if (name == "Youtube") {
                firebase.database().ref('Redes/BraApp/').update({ "Youtube": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }
            else if (name == "Spotify") {
                firebase.database().ref('Redes/BraApp/').update({ "Spotify": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }
            else if (name == "Tiktok") {
                firebase.database().ref('Redes/BraApp/').update({ "Tiktok": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }
            else if (name == "Whatsapp") {
                firebase.database().ref('Redes/BraApp/').update({ "Whatsapp": inpu });
                document.getElementById('actualizarr').style.display = 'none';
                document.getElementById('idnevsdtext').style.display = 'none';
                refrescarR();
                limpiarR()
            }

        }
    }
    else {
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

            title: 'Ingrese link de la red social'

        })
    }
}
function limpiarR() {
    document.getElementById("linkr").value = "";
    document.getElementById("linkr1").value = "";
    document.getElementById('actualizarr').style.display = 'none';
    document.getElementById("linkr10").value = "";
    document.getElementById('idnevsdtext').style.display = 'none';
    refrescarR();
}
function EliminaRr(name, title) {
    if (title == "Arely Vanessa") {
        if (name == "Facebook") {
            firebase.database().ref('Redes/Arely Vanessa/').update({ "Facebook": "" });
            refrescarR();
        } else if (name == "Instagram") {
            firebase.database().ref('Redes/Arely Vanessa/').update({ "Instagram": "" });
            refrescarR();
        } else if (name == "Telegram") {
            firebase.database().ref('Redes/Arely Vanessa/').update({ "Telegram": "" });
            refrescarR();
        } else if (name == "Twitter") {
            firebase.database().ref('Redes/Arely Vanessa/').update({ "Twitter": "" });
            refrescarR();
        } else if (name == "Whatsapp") {
            firebase.database().ref('Redes/Arely Vanessa/').update({ "Whatsapp": "" });
            refrescarR();
        }
    } else if (title == "Alejandro") {
        if (name == "Facebook") {
            firebase.database().ref('Redes/Alejandro/').update({ "Facebook": "" });
            refrescarR();
        } else if (name == "Instagram") {
            firebase.database().ref('Redes/Alejandro/').update({ "Instagram": "" });
            refrescarR();
        } else if (name == "Telegram") {
            firebase.database().ref('Redes/Alejandro/').update({ "Telegram": "" });
            refrescarR();
        } else if (name == "Twitter") {
            firebase.database().ref('Redes/Alejandro/').update({ "Twitter": "" });
            refrescarR();
        } else if (name == "Whatsapp") {
            firebase.database().ref('Redes/Alejandro/').update({ "Whatsapp": "" });
            refrescarR();
        }
    } else if (title == "BraApp") {
        if (name == "Facebook") {
            firebase.database().ref('Redes/BraApp/').update({ 'Facebook': "" });
            refrescarR();
        } else if (name == "Instagram") {
            firebase.database().ref('Redes/BraApp/').update({ 'Instagram': "" });
            refrescarR();
        } else if (name == "Pagina") {
            firebase.database().ref('Redes/BraApp/').update({ 'Pagina': "" });
            refrescarR();
        }
        else if (name == "Telegram") {
            firebase.database().ref('Redes/BraApp/').update({ 'Telegram': "" });
            refrescarR();
        } else if (name == "Twitter") {
            firebase.database().ref('Redes/BraApp/').update({ 'Twitter': "" });
            refrescarR();
        } else if (name == "Youtube") {
            firebase.database().ref('Redes/BraApp/').update({ 'Youtube': "" });
            refrescarR();
        }
        else if (name == "Spotify") {
            firebase.database().ref('Redes/BraApp/').update({ 'Spotify': "" });
            refrescarR();
        }
        else if (name == "Tiktok") {
            firebase.database().ref('Redes/BraApp/').update({ 'Tiktok': "" });
            refrescarR();
        }
    }


}
function actualizarr(name, title) {
    var contenedor1 = document.getElementById('idnevsdtext');
    contenedor1.innerHTML = "<label>" + name + " de " + title + "</label>"
    if (name == "Facebook") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';

    } else if (name == "Instagram") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    } else if (name == "Telegram") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    } else if (name == "Twitter") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    } else if (name == "Whatsapp") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    }

    else if (name == "Pagina") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    }
    else if (name == "Youtube") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    }
    else if (name == "Spotify") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    }
    else if (name == "Tiktok") {
        document.getElementById("linkr").value = "";
        document.getElementById("linkr1").value = name;
        document.getElementById("linkr10").value = title;
        document.getElementById('actualizarr').style.display = 'inline';
        document.getElementById('idnevsdtext').style.display = 'inline';
    }

}
$("#limpiarR").on("click", function (event) {
    event.preventDefault();
    limpiarR();
});

/*------------links de Alumno Tutor y Admin y Alumno-------- */
function refrescarL() {

    /*------------Descargar Alumno-------- */
    const tasksContainer50 = document.getElementById("table111");

    firebase.database().ref('Redes').equalTo('LinkAlum').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().linkMed == "") {

                    var mens11 = "mala";
                } else if (childSnapshot.val().linkMed != "") {
                    var mens11 = "buena";
                }
                if (childSnapshot.val().linkMega == "") {
                    var mens21 = "mala"
                } else if (childSnapshot.val().linkMega != "") {
                    var mens21 = "buena"
                }
                if (childSnapshot.val().qrr == "") {
                    var mens31 = "mala"
                } else if (childSnapshot.val().qrr != "") {
                    var mens31 = "buena"
                }
                if (childSnapshot.val().play1 == "") {
                    var mens41 = "mala"
                } else if (childSnapshot.val().play1 != "") {
                    var mens41 = "buena"
                }
                if (childSnapshot.val().link == "") {
                    var mens51 = "mala"
                } else if (childSnapshot.val().link != "") {
                    var mens51 = "buena"
                }
                if (childSnapshot.val().linkS1 == "") {
                    var mens61 = "mala"
                } else if (childSnapshot.val().linkS1 != "") {
                    var mens61 = "buena"
                }
                tasksContainer50.innerHTML = `
      <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Alumno</td>
      <td class=label>Mediafire</td>
      <td class=label><img src="img/${mens11}.png" width="50px"></td>
      <td>
      <a type='button' name="linkMed" title="BraApp Alumno" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button' name="linkMed" title="BraApp Alumno" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Alumno</td>
      <td class=label>Mega</td>
      <td class=label><img src="img/${mens21}.png" width="50px"></td>

      <td>
      <a type='button' name="linkMega" title="BraApp Alumno" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button' name="linkMega" title="BraApp Alumno" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Alumno</td>
      <td class=label>Servidor 1</td>
      <td class=label><img src="img/${mens61}.png" width="50px"></td>

      <td>
      <a type='button' name="linkS1" title="BraApp Alumno" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button' name="linkS1" title="BraApp Alumno" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Alumno</td>
      <td class=label>Servidor 2</td>
      <td class=label><img src="img/${mens51}.png" width="50px"></td>
      <td>
      <a type='button' name="link"  title="BraApp Alumno" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="link"  title="BraApp Alumno" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Alumno</td>
      <td class=label>Play Store</td>
      <td class=label><img src="img/${mens41}.png" width="50px"></td>

      <td>
      <a type='button' name="play1"  title="BraApp Alumno" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="play1"  title="BraApp Alumno" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Alumno</td>
      <td class=label>Código Qr</td>
      <td class=label><img src="img/${mens31}.png" width="50px"></td>
      
      <td>
      <a type='button' name="qrr" title="BraApp Alumno" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="qrr" title="BraApp Alumno" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  </tr>
      `
            });
        });
    /*------------Descargar Tutor-------- */
    const tasksContainer51 = document.getElementById("table112");
    firebase.database().ref('Redes').equalTo('LinkTutor').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().linkMed == "") {
                    var mens12 = "mala";
                } else if (childSnapshot.val().linkMed != "") {
                    var mens12 = "buena";
                }
                if (childSnapshot.val().linkMega == "") {
                    var mens22 = "mala";
                } else if (childSnapshot.val().linkMega != "") {
                    var mens22 = "buena";
                }
                if (childSnapshot.val().qrr == "") {
                    var mens32 = "mala";
                } else if (childSnapshot.val().qrr != "") {
                    var mens32 = "buena";
                }
                if (childSnapshot.val().play1 == "") {
                    var mens42 = "mala";
                } else if (childSnapshot.val().play1 != "") {
                    var mens42 = "buena";
                }
                if (childSnapshot.val().link == "") {
                    var mens52 = "mala";
                } else if (childSnapshot.val().link != "") {
                    var mens52 = "buena";
                }
                if (childSnapshot.val().linkS1 == "") {
                    var mens62 = "mala";
                } else if (childSnapshot.val().linkS1 != "") {
                    var mens62 = "buena";
                }
                tasksContainer51.innerHTML = `
      <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Tutor</td>
      <td class=label>Mediafire</td>
      <td class=label><img src="img/${mens12}.png" width="50px"></td>

      <td>
      <a type='button' name="linkMed" title="BraApp Tutor" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="linkMed" title="BraApp Tutor" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
 
      </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Tutor</td>
      <td class=label>Mega</td>
      <td class=label><img src="img/${mens22}.png" width="50px"></td>

 
      <td>
      <a type='button'name="linkMega" title="BraApp Tutor" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="linkMega" title="BraApp Tutor" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
      </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Tutor</td>
      <td class=label>Servidor 1</td>
      <td class=label><img src="img/${mens62}.png" width="50px"></td>

      <td>
      <a type='button'name="linkS1"  title="BraApp Tutor" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="linkS1"  title="BraApp Tutor" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
      </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Tutor</td>
      <td class=label>Servidor 2</td>
      <td class=label><img src="img/${mens52}.png" width="50px"></td>

      <td>
      <a type='button'name="link" title="BraApp Tutor" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="link" title="BraApp Tutor" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
 
 
      </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Tutor</td>
      <td class=label>Play Store</td>
      <td class=label><img src="img/${mens42}.png" width="50px"></td>

      <td>
      <a type='button'name="play1" title="BraApp Tutor" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="play1" title="BraApp Tutor" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
  
      </tr>
  <tr>
      <td class=label><img src="img/versiones.png" width="100px"></td>
      <td class=label>BraApp Tutor</td>
      <td class=label>Código Qr</td>
      <td class=label><img src="img/${mens32}.png" width="50px"></td>
      <td>
      <a type='button'name="qrr" title="BraApp Tutor" onclick=EditarAL(name,title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
      <td>
      <a type='button'name="qrr" title="BraApp Tutor" onclick=EliminarAL(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
      </td>
      </tr>
  `});
        });
    const tasksAdmin = document.getElementById("Component");

    firebase.database().ref('Redes').equalTo('LinkAdmin').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var mediafire = childSnapshot.val().link;
                tasksAdmin.innerHTML = `
   <a href="${mediafire}"type='button'style="width: 50px;" target="_blank" ><img src="img/assignment.png" title="Descarga de BraApp Admin" style="width:100%"></a>   
   `});
        });
}
/*------------Eliminar links-------- */
function EliAL() {
    firebase.database().ref('Redes/LinkAlum/').update({ "linkMed": "" });
    firebase.database().ref('Redes/LinkAlum/').update({ "linkMega": "" });
    firebase.database().ref('Redes/LinkAlum/').update({ "qrr": "" });
    firebase.database().ref('Redes/LinkAlum/').update({ "link": "" });
    firebase.database().ref('Redes/LinkAlum/').update({ "play1": "" });
    firebase.database().ref('Redes/LinkAlum/').update({ "linkS1": "" });

    firebase.database().ref('Redes/LinkTutor/').update({ "linkMed": "" });
    firebase.database().ref('Redes/LinkTutor/').update({ "linkMega": "" });
    firebase.database().ref('Redes/LinkTutor/').update({ "qrr": "" });
    firebase.database().ref('Redes/LinkTutor/').update({ "link": "" });
    firebase.database().ref('Redes/LinkTutor/').update({ "play1": "" });
    firebase.database().ref('Redes/LinkTutor/').update({ "linkS1": "" });
    firebase.database().ref('Redes/LinkAdmin/').update({ "link": "" });
    refrescarL();

}
function limpiarRAL() {
    document.getElementById("linkrAL").value = "";
    document.getElementById("linkr1AL").value = "";
    document.getElementById("linkr1AL0").value = "";
    document.getElementById('actualizarrAL').style.display = 'none';
    document.getElementById('idnevsdtext1').style.display = 'none';
}
$("#limpiarRAL").on("click", function (event) {
    event.preventDefault();
    limpiarRAL();
});
function EditarAL(name, title) {
    var contenedor1 = document.getElementById('idnevsdtext1');


    document.getElementById('idnevsdtext1').style.display = 'inline';
    if (name == "linkMed") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Mediafire de " + title + "</label>"
    } else if (name == "linkMega") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Mega de " + title + "</label>"
    }
    else if (name == "linkS1") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Servidor 1 de " + title + "</label>"
    }
    else if (name == "link") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Servidor 2 de " + title + "</label>"
    }
    else if (name == "play1") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Play Store de " + title + "</label>"
    }
    else if (name == "qrr") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Código QR de " + title + "</label>"
    }
    else if (name == "linkMed2p") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Mediafire de " + title + "</label>"
    }
    else if (name == "linkMega2p") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Mega de " + title + "</label>"
    }
    else if (name == "linkS12p") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Servidor 1 de " + title + "</label>"
    }
    else if (name == "link2p") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';
        contenedor1.innerHTML = "<label>Servidor 2 de " + title + "</label>"
    }
    else if (name == "play12p") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';

        contenedor1.innerHTML = "<label>Play Store de " + title + "</label>"
    }
    else if (name == "qrr2p") {
        document.getElementById("linkrAL").value = "";
        document.getElementById("linkr1AL").value = name;
        document.getElementById("linkr1AL0").value = title;
        document.getElementById('actualizarrAL').style.display = 'inline';

        contenedor1.innerHTML = "<label>Código QR de " + title + "</label>"
    }

}
function actualizarr1AL() {
    var inpu3 = document.getElementById("linkrAL").value;
    var name3 = document.getElementById("linkr1AL").value;
    var isd = document.getElementById("linkr1AL0").value;

    if (inpu3 != "") {
        if (isd == "BraApp Alumno") {
            if (name3 == "linkMed") {
                firebase.database().ref('Redes/LinkAlum/').update({ "linkMed": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';

                refrescarL();
                limpiarRAL();
            } else if (name3 == "linkMega") {
                firebase.database().ref('Redes/LinkAlum/').update({ "linkMega": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
            else if (name3 == "qrr") {
                firebase.database().ref('Redes/LinkAlum/').update({ "qrr": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
            else if (name3 == "play1") {
                firebase.database().ref('Redes/LinkAlum/').update({ "play1": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
            else if (name3 == "link") {
                firebase.database().ref('Redes/LinkAlum/').update({ "link": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }

            else if (name3 == "linkS1") {
                firebase.database().ref('Redes/LinkAlum/').update({ "linkS1": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
        } else if (isd == "BraApp Tutor") {
            if (name3 == "linkMed") {
                firebase.database().ref('Redes/LinkTutor/').update({ "linkMed": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            } else if (name3 == "linkMega") {
                firebase.database().ref('Redes/LinkTutor/').update({ "linkMega": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
            else if (name3 == "qrr") {
                firebase.database().ref('Redes/LinkTutor/').update({ "qrr": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
            else if (name3 == "play1") {
                firebase.database().ref('Redes/LinkTutor/').update({ "play1": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
            else if (name3 == "link") {
                firebase.database().ref('Redes/LinkTutor/').update({ "link": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }

            else if (name3 == "linkS1") {
                firebase.database().ref('Redes/LinkTutor/').update({ "linkS1": inpu3 });
                document.getElementById('actualizarrAL').style.display = 'none';
                refrescarL();
                limpiarRAL();
            }
        }
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

            title: 'Ingrese link de la red social'

        })
    }

}
function EliminarAL(name, title) {
    if (title == "BraApp Alumno") {
        if (name == "linkMed") {
            firebase.database().ref('Redes/LinkAlum/').update({ "linkMed": "" });
            refrescarL();
        } else if (name == "linkMega") {
            firebase.database().ref('Redes/LinkAlum/').update({ "linkMega": "" });
            refrescarL();
        }
        else if (name == "qrr") {
            firebase.database().ref('Redes/LinkAlum/').update({ "qrr": "" });
            refrescarL();
        }
        else if (name == "link") {
            firebase.database().ref('Redes/LinkAlum/').update({ "link": "" });
            refrescarL();
        }
        else if (name == "play1") {
            firebase.database().ref('Redes/LinkAlum/').update({ "play1": "" });
            refrescarL();
        }

        else if (name == "linkS1") {
            firebase.database().ref('Redes/LinkAlum/').update({ "linkS1": "" });
            refrescarL();
        }
    } else if (title == "BraApp Tutor") {
        if (name == "linkMed") {
            firebase.database().ref('Redes/LinkTutor/').update({ "linkMed": "" });
            refrescarL();
        } else if (name == "linkMega") {
            firebase.database().ref('Redes/LinkTutor/').update({ "linkMega": "" });
            refrescarL();
        }
        else if (name == "qrr") {
            firebase.database().ref('Redes/LinkTutor/').update({ "qrr": "" });
            refrescarL();
        }
        else if (name == "link") {
            firebase.database().ref('Redes/LinkTutor/').update({ "link": "" });
            refrescarL();
        }
        else if (name == "play1") {
            firebase.database().ref('Redes/LinkTutor/').update({ "play1": "" });
            refrescarL();
        }

        else if (name == "linkS1") {
            firebase.database().ref('Redes/LinkTutor/').update({ "linkS1": "" });
            refrescarL();
        }
    }
}

/*----------------------Productos----------------*/
/*------------PrecargarTablas-------- */
recargar1BP();
recargar1PS();
recargar1Reco()
/*------------Galeria Propio-------- */
function recargar1BP() {
    const tasksContainer56 = document.getElementById("table117");
    tasksContainer56.innerHTML = "";
    firebase.database().ref('Propio/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer56.innerHTML += `
<tr>
<td class=label><img class="Ampliar"src="${childSnapshot.val().url}" width="100px"></td>
<td class=label>${childSnapshot.val().nombre}</td>
<td class=label>${childSnapshot.val().descripción}</td>
<td>
<a type='button'title="${childSnapshot.key}" onclick=Editar1234(title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
</td>
<td>
<a type='button'name="${childSnapshot.val().nombresito}"
title="${childSnapshot.key}" onclick=EliminarTUTU1234(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
</td>
</tr>
      `
            });
        });
}
$("#registrarE4").on("click", function (event) {
    event.preventDefault();
    registrarE4();
});
$("#limpiarE4").on("click", function (event) {
    event.preventDefault();
    limpiarE4();
});
function limpiarE4() {
    document.getElementById("tituloE4").value = "";
    document.getElementById("descrE4").value = "";
}
function registrarE4() {
    var tituloE4 = document.getElementById("tituloE4").value;
    var descE4 = document.getElementById("descrE4").value;
    if (tituloE4 != "" && descE4 != "") {
        document.getElementById('form1234').style.display = 'inline';
        document.getElementById('limpiarE4').style.display = 'none';
        document.getElementById('registrarE4').style.display = 'none';
        document.getElementById('BPR').style.display = 'none';
        document.getElementById("tituloE4").disabled = true
        document.getElementById("descrE4").disabled = true
        document.getElementById('desas4').style.display = 'inline';
        document.getElementById('atrasPD').style.display = 'inline';
    } else if (tituloE4 == "" && descE4 != "") {
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

            title: 'Ingrese el título para el producto'

        })
    } else if (tituloE4 != "" && descE4 == "") {
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

            title: 'Ingrese la descripcion del producto'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }
}
function Editar1234(title) {
    document.getElementById('form12334').style.display = 'none';

    document.getElementById('form3434').style.display = 'none';
    document.getElementById('form1234').style.display = 'none';
    document.getElementById('form123344').style.display = 'block';
    var starCountRef = firebase.database().ref('Propio/' + title);
    starCountRef.on('value', (snapshot) => {
        document.getElementById("key44").value = title;
        document.getElementById("tituloE44").value = snapshot.val().nombre;
        document.getElementById("descrE44").value = snapshot.val().descripción;
    });
}

$("#limpiarE44").on("click", function (event) {
    event.preventDefault();
    limpiarE44();
});

$("#registrarE44").on("click", function (event) {
    event.preventDefault();
    registrarE44();
});
$("#canceñ34").on("click", function (event) {
    event.preventDefault();
    cancelarE44();
});

function registrarE44() {
    var uno1 = document.getElementById("key44").value;
    var uno11 = document.getElementById("tituloE44").value;
    var uno111 = document.getElementById("descrE44").value;
    if (uno11 != "" && uno111 != "") {
        firebase.database().ref('Propio/' + uno1).update({
            "nombre": uno11,
            "descripción": uno111
        });
        const tasksContainer56 = document.getElementById("table117");
        tasksContainer56.innerHTML = "";
        recargar1BP();
        cancelarE44();
    } else if (uno11 == "" && uno111 != "") {
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

            title: 'Ingrese el titulo para el producto'

        })
    } else if (uno11 != "" && uno111 == "" && uno1111 != "") {
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

            title: 'Ingrese la descripcion del producto'

        })
    } else if (uno11 != "" && uno111 != "" && uno1111 == "") {
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

            title: 'Ingrese una nota para el producto'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }


}
function limpiarE44() {
    document.getElementById("tituloE44").value = "";
    document.getElementById("descrE44").value = "";
}
function cancelarE44() {
    limpiarE44();
    document.getElementById('form3434').style.display = 'none';
    document.getElementById('form123344').style.display = 'none';
    document.getElementById('form12334').style.display = 'block';
}

function EliminarTUTU1234(name, title) {
    document.getElementById('idF34').value = name;
    document.getElementById('idF134').value = title;

    document.getElementById('form1234').style.display = 'none';
    document.getElementById('form12334').style.display = 'none';
    document.getElementById('form3434').style.display = 'block';
    document.getElementById('form123344').style.display = 'none';
    document.getElementById('idF34').style.display = 'inline';
    document.getElementById('idF134').style.display = 'inline';
    document.getElementById('eli334').style.display = 'inline';
    document.getElementById('cancel334').style.display = 'inline';
}
$("#atrasPD").on("click", function (event) {
    event.preventDefault();
    atrasPD();
});
function atrasPD() {
    document.getElementById("tituloE4").disabled = false
    document.getElementById("descrE4").disabled = false
    document.getElementById('BPR').style.display = 'none';
    document.getElementById('registrarE4').style.display = 'inline';
    document.getElementById('limpiarE4').style.display = 'inline';
    document.getElementById('form1234').style.display = 'none';
    document.getElementById('form123344').style.display = 'none';
    document.getElementById('form3434').style.display = 'none';
    document.getElementById('form12334').style.display = 'block';
    document.getElementById('BPR').style.display = 'inline';
}
/*------------Galeria Producto Similar-------- */
function recargar1PS() {

    const tasksContainer58 = document.getElementById("table119");
    tasksContainer58.innerHTML = "";
    firebase.database().ref('Productos Similares/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer58.innerHTML += `
<tr>
<td class=label><img class="Ampliar" src="${childSnapshot.val().url}" width="100px"></td>
<td class=label>${childSnapshot.val().nombre}</td>
<td class=label>${childSnapshot.val().sitio}</td>

<td class=label>$${childSnapshot.val().precio}</td>
<td>
<a type='button'title="${childSnapshot.key}" onclick=Editar123456(title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
</td>
<td>
<a type='button'name="${childSnapshot.val().nombresito}"
title="${childSnapshot.key}" onclick=EliminarTUTU123456(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
</td>
</tr>

      `
            });
        });
}
/*Si jaaña*/
$("#registrarE456").on("click", function (event) {
    event.preventDefault();
    registrarE456();
});
$("#atrasdf").on("click", function (event) {
    event.preventDefault();
    atrasdf();
});
function atrasdf() {
    document.getElementById('form1233456').style.display = 'block';
    document.getElementById("tituloE456").disabled = false;
    document.getElementById("costoE456").disabled = false;
    document.getElementById("sitioE456").disabled = false;
    document.getElementById("descrE456").disabled = false;
    document.getElementById("linkE456").disabled = false;
    document.getElementById('form123456').style.display = 'none';
    document.getElementById('form123456').style.display = 'none';
    document.getElementById('form12334456').style.display = 'none';
    document.getElementById('form343456').style.display = 'none';
    document.getElementById('registrarE456').style.display = 'inline';
    document.getElementById('limpiarE456').style.display = 'inline';
    document.getElementById('RecPS').style.display = 'inline';
}
/*Si jaaña*/
function registrarE456() {
    var titu = document.getElementById("tituloE456").value;
    var costo = document.getElementById("costoE456").value;
    var sitio = document.getElementById("sitioE456").value;
    var desc = document.getElementById("descrE456").value;
    var link = document.getElementById("linkE456").value;

    if (titu != "" && costo != "" && sitio != "" && desc != "" && link != "") {
        document.getElementById('form123456').style.display = 'block';
        document.getElementById('form1233456').style.display = 'none';
        document.getElementById('limpiarE456').style.display = 'none';
        document.getElementById('registrarE456').style.display = 'none';
        document.getElementById('atrasdf').style.display = 'inline';
        document.getElementById('desas456').style.display = 'inline';
        document.getElementById('RecPS').style.display = 'none';
        document.getElementById("tituloE456").disabled = true;
        document.getElementById("costoE456").disabled = true;
        document.getElementById("sitioE456").disabled = true;
        document.getElementById("descrE456").disabled = true;
        document.getElementById("linkE456").disabled = true;
    } else if (titu == "" && costo != "" && sitio != "" && desc != "" && link != "") {
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

            title: 'Ingrese el titulo del producto'

        })
    } else if (titu != "" && costo == "" && sitio != "" && desc != "" && link != "") {
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

            title: 'Ingrese el costo del producto'

        })
    } else if (titu != "" && costo != "" && sitio == "" && desc != "" && link != "") {
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

            title: 'Ingrese el sitio del producto'

        })
    } else if (titu != "" && costo != "" && sitio != "" && desc == "" && link != "") {
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

            title: 'Ingrese la descripcion del producto'

        })
    } else if (titu != "" && costo != "" && sitio != "" && desc != "" && link == "") {
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

            title: 'Ingrese el link de acceso del producto'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }


}
/*Si jaaña*/
$("#limpiarE456").on("click", function (event) {
    event.preventDefault();
    limpiarE456();
});/*Si jaaña*/
function limpiarE456() {
    document.getElementById("tituloE456").value = "";
    document.getElementById("costoE456").value = "";
    document.getElementById("sitioE456").value = "";
    document.getElementById("descrE456").value = "";
    document.getElementById("linkE456").value = "";
}/*Si jaaña*/
$("#limpiarE445").on("click", function (event) {
    event.preventDefault();
    limpiarE4456();
});/*Si jaaña*/
function limpiarE4456() {
    document.getElementById("tituloE4566").value = "";
    document.getElementById("costoE4566").value = "";
    document.getElementById("sitioE4566").value = "";
    document.getElementById("descrE4566").value = "";
    document.getElementById("linkE4566").value = "";
}
/*Si jaaña*/
function Editar123456(title) {

    document.getElementById('form1233456').style.display = 'none';
    document.getElementById('form123456').style.display = 'none';
    document.getElementById('form12334456').style.display = 'inline';
    var starCountRef = firebase.database().ref('Productos Similares/' + title);
    starCountRef.on('value', (snapshot) => {
        document.getElementById('form343456').style.display = 'none';
        document.getElementById("key4456").value = title;
        document.getElementById("tituloE4566").value = snapshot.val().nombre;
        document.getElementById("costoE4566").value = snapshot.val().precio;
        document.getElementById("sitioE4566").value = snapshot.val().sitio;
        document.getElementById("descrE4566").value = snapshot.val().descripción;
        document.getElementById("linkE4566").value = snapshot.val().link;

    });
}/*Si jaaña*/
$("#canceñ345").on("click", function (event) {
    event.preventDefault();
    cancelarE4456();
});
/*Si jaaña*/
function cancelarE4456() {
    limpiarE4456();
    document.getElementById('form12334456').style.display = 'none';
    document.getElementById('form1233456').style.display = 'inline';
}

function registrarE445() {
    var uno1 = document.getElementById("key4456").value;
    var uno12 = document.getElementById("tituloE4566").value;
    var uno13 = document.getElementById("costoE4566").value;
    var uno14 = document.getElementById("sitioE4566").value;
    var uno15 = document.getElementById("descrE4566").value;
    var uno16 = document.getElementById("linkE4566").value;

    if (uno12 != "" && uno13 != "" && uno14 != "" && uno15 != "" && uno16 != "") {
        firebase.database().ref('Productos Similares/' + uno1).update({
            "nombre": uno12,
            "precio": uno13,
            "sitio": uno14,
            "descripción": uno15,
            "link": uno16
        });
        recargar1PS();
        cancelarE4456();
    }
    else if (uno12 == "" && uno13 != "" && uno14 != "" && uno15 != "" && uno16 != "") {
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

            title: 'Ingrese el titulo del producto'

        })
    }
    else if (uno12 != "" && uno13 == "" && uno14 != "" && uno15 != "" && uno16 != "") {
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

            title: 'Ingrese el costo del producto'

        })
    }
    else if (uno12 != "" && uno13 != "" && uno14 == "" && uno15 != "" && uno16 != "") {
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

            title: 'Ingrese el sitio del producto'

        })
    }
    else if (uno12 != "" && uno13 != "" && uno14 != "" && uno15 == "" && uno16 != "") {
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

            title: 'Ingrese la descripcion del producto'

        })
    }
    else if (uno12 != "" && uno13 != "" && uno14 != "" && uno15 != "" && uno16 == "") {
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

            title: 'Ingrese el link de acceso del producto'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }
}
/*Si jaaña*/
function EliminarTUTU123456(name, title) {
    document.getElementById('idF3456').value = name;
    document.getElementById('idF13456').value = title;
    document.getElementById('form12334456').style.display = 'none';
    document.getElementById('form123456').style.display = 'none';
    document.getElementById('form1233456').style.display = 'none';
    document.getElementById('form343456').style.display = 'inline';

    document.getElementById('idF3456').style.display = 'inline';
    document.getElementById('idF13456').style.display = 'inline';
}

/*------------Galeria Recomendacion-------- */
function recargar1Reco() {
    const tasksContainer57 = document.getElementById("table118");
    tasksContainer57.innerHTML = "";
    firebase.database().ref('Recomendaciones/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer57.innerHTML += `
<tr>
<td class=label><img class="Ampliar"src="${childSnapshot.val().imagen}" width="100px"></td>
<td class=label>${childSnapshot.val().nombre}</td>
<td class=label>${childSnapshot.val().descripcion}</td>
<td>
<a type='button'title="${childSnapshot.key}" onclick=Editar12345(title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
</td>
<td>
<a type='button'name="${childSnapshot.val().nombresito}"
title="${childSnapshot.key}" onclick=EliminarTUTU12345(name,title)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
</td>
</tr>

  `
            });
        });
}
$("#limpiarE45").on("click", function (event) {
    event.preventDefault();
    limpiarE45();
});
function limpiarE45() {
    document.getElementById("tituloE45").value = "";
    document.getElementById("descrE45").value = "";
}
$("#registrarE45").on("click", function (event) {
    event.preventDefault();
    registrarE45();
});
$("#atrasREco").on("click", function (event) {
    event.preventDefault();
    atrasREco();
});
function atrasREco() {
    document.getElementById("tituloE45").disabled = false;
    document.getElementById("descrE45").disabled = false;
    document.getElementById('limpiarE45').style.display = 'inline';
    document.getElementById('registrarE45').style.display = 'inline';
    document.getElementById('RefresRco').style.display = 'inline';
    document.getElementById('form34345').style.display = 'none';
    document.getElementById('form1233445').style.display = 'none';
    document.getElementById('form12345').style.display = 'none';
    document.getElementById('form123345').style.display = 'block';
}
function registrarE45() {
    var tituloE45 = document.getElementById("tituloE45").value;
    var descE45 = document.getElementById("descrE45").value;

    if (tituloE45 != "" && descE45 != "") {
        document.getElementById('form12345').style.display = 'inline';
        document.getElementById('limpiarE45').style.display = 'none';
        document.getElementById('registrarE45').style.display = 'none';
        document.getElementById('desas45').style.display = 'inline';
        document.getElementById("tituloE45").disabled = true;
        document.getElementById("descrE45").disabled = true;
        document.getElementById('RefresRco').style.display = 'none';
        document.getElementById('atrasREco').style.display = 'inline';
    } else if (tituloE45 == "" && descE45 != "") {
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

            title: 'Ingrese el titulo para la recomendacion'

        })
    } else if (tituloE45 != "" && descE45 == "") {
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

            title: 'Ingrese la descripcion de la recomendacion'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }
}
function Editar12345(title) {
    document.getElementById('form123345').style.display = 'none';
    document.getElementById('form12345').style.display = 'none';
    document.getElementById('form34345').style.display = 'none';
    document.getElementById('form1233445').style.display = 'block';

    var starCountRef = firebase.database().ref('Recomendaciones/' + title);
    starCountRef.on('value', (snapshot) => {
        document.getElementById("key445").value = title;
        document.getElementById("tituloE445").value = snapshot.val().nombre;
        document.getElementById("descrE445").value = snapshot.val().descripcion;
    });
}
$("#limpiarE4458").on("click", function (event) {
    event.preventDefault();
    limpiarE4458();
});
function limpiarE4458() {
    document.getElementById("tituloE445").value = "";
    document.getElementById("descrE445").value = "";
}
$("#canceñ345").on("click", function (event) {
    event.preventDefault();
    canceñ345();
});
function canceñ345() {
    limpiarE4458();
    document.getElementById('form34345').style.display = 'none';
    document.getElementById('form1233445').style.display = 'none';
    document.getElementById('form123345').style.display = 'block';
}

function registrarE44554() {
    var uno1 = document.getElementById("key445").value;
    var uno11 = document.getElementById("tituloE445").value;
    var uno111 = document.getElementById("descrE445").value;
    if (uno11 != "" && uno111 != "") {
        firebase.database().ref('Recomendaciones/' + uno1).update({
            "nombre": uno11,
            "descripcion": uno111
        });

        recargar1Reco();
        canceñ345();
    } else if (uno11 == "" && uno111 != "") {
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

            title: 'Ingrese el titulo para la recomendacion'

        })
    } else if (uno11 != "" && uno111 == "") {
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

            title: 'Ingrese la descripcion de la recomendacion'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }

}
function EliminarTUTU12345(name, title) {
    document.getElementById('idF345').value = name;
    document.getElementById('idF1345').value = title;
    document.getElementById('cancel3345').style.display = 'inline';
    document.getElementById('form1233445').style.display = 'none';
    document.getElementById('form12345').style.display = 'none';
    document.getElementById('form123345').style.display = 'none';
    document.getElementById('form34345').style.display = 'inline';
    document.getElementById('form123345').style.display = 'none';
    document.getElementById('idF345').style.display = 'inline';
    document.getElementById('idF1345').style.display = 'inline';
    document.getElementById('cancel3345').style.display = 'inline';

}
/*----------------------Conocenos----------------*/
/*------------PrecargarTablas-------- */

recargarCpon();
function recargarCpon() {
    const tasksContainer64 = document.getElementById("table1139");
    tasksContainer64.innerHTML = "";
    firebase.database().ref('Redes').equalTo('Arely Vanessa').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().imagen == undefined) {
                    var da = "img/Fotitoe.png";
                } else if (childSnapshot.val().imagen != undefined) {
                    var da = childSnapshot.val().imagen;
                }
                if (childSnapshot.val().nombre == undefined) {
                    var da1 = "Sin Foto";
                } else if (childSnapshot.val().nombre != undefined) {
                    var da1 = childSnapshot.val().nombre;
                }
                if (childSnapshot.key == undefined) {
                    var da2 = "Sin key";
                } else if (childSnapshot.key != undefined) {
                    var da2 = childSnapshot.key;
                }

                tasksContainer64.innerHTML = `
        <tr>
        <td class=label><img class="Ampliar" src="${da}" width="100px"></td>
        <td class=label>${da2}</td>
        <td class=label>${da1}</td>

        <td>
<a type='button'name="${da1}" title="${da2}" onclick=EliminaRrAre(name,title)> <img src="img/tags.png"  title="Eliminar" style="width:50px;"></a>
</td>
        </tr>
  
        `
            });
        });
    const tasksContainer65 = document.getElementById("table11391");
    tasksContainer65.innerHTML = "";
    firebase.database().ref('Redes').equalTo('Alejandro').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().imagen == undefined) {
                    var da = "img/Fotitoe.png";
                } else if (childSnapshot.val().imagen != undefined) {
                    var da = childSnapshot.val().imagen;
                }
                if (childSnapshot.val().nombre == undefined) {
                    var da1 = "Sin Foto";
                } else if (childSnapshot.val().nombre != undefined) {
                    var da1 = childSnapshot.val().nombre;
                }
                if (childSnapshot.key == undefined) {
                    var da2 = "Sin key";
                } else if (childSnapshot.key != undefined) {
                    var da2 = childSnapshot.key;
                }
                tasksContainer65.innerHTML = `
        <tr>
        <td class=label><img class="Ampliar" src="${da}" width="100px"></td>
        <td class=label>${da2}</td>
        <td class=label>${da1}</td>
             <td>
<a type='button'name="${da1}" title="${da2}"
onclick=EliminaRrAre1(name,title)> <img src="img/tags.png" style="width:50px;"></a>
</td>      </tr>
        `
            });
        });
}
function vi1() {

    document.getElementById('selecUs').style.display = 'none';

    firebase.database().ref('Redes/Arely Vanessa/').equalTo('imagen').orderByKey().once('value').then(
        function (snapshot) {
            if (snapshot.exists() == true) {

                firebase.database().ref('Redes').equalTo('Arely Vanessa').orderByKey().once('value').then(
                    function (snapshot1) {
                        snapshot1.forEach(function (childSnapshot) {

                            if (childSnapshot.val().nombre == null || childSnapshot.val().imagen == null) {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else if (childSnapshot.val().nombre == null && childSnapshot.val().imagen == null) {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else if (childSnapshot.val().nombre == "" && childSnapshot.val().imagen == "") {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else if (childSnapshot.val().nombre == "" || childSnapshot.val().imagen == "") {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';

                            }
                        });
                    });

            } else {
                console.log("REvisa", "No Existe");
                document.getElementById('Vane').style.display = 'inline';
                document.getElementById('form349').style.display = 'none';
                document.getElementById('lale').style.display = 'none';
                document.getElementById('form3491').style.display = 'none';
                document.getElementById('label391').style.display = 'none';

            }

        });
}

function restaurar1() {
    document.getElementById('selecUs').style.display = 'block';
    document.getElementById('Vane').style.display = 'none';
    document.getElementById('form349').style.display = 'none';
    document.getElementById('lale').style.display = 'none';
    document.getElementById('form3491').style.display = 'none';
    document.getElementById('label391').style.display = 'none';
}

$("#Recarfdvg").on("click", function (event) {
    event.preventDefault();

    restaurar1();
    recargarCpon();
});


function EliminaRrAre(name, title) {
    if (name == "Sin Foto") {
        restaurar1();
    }
    else {
        document.getElementById('idF9').value = name;
        document.getElementById('idF19').value = title;
        document.getElementById('idF9').style.display = 'inline';
        document.getElementById('idF19').style.display = 'inline';
        document.getElementById('eli39').style.display = 'inline';
        document.getElementById('cancel39').style.display = 'inline';
        document.getElementById('selecUs').style.display = 'none';
        document.getElementById('label391').style.display = 'none';
        document.getElementById('Vane').style.display = 'none';
        document.getElementById('lale').style.display = 'none';
        document.getElementById('form3491').style.display = 'none';
        document.getElementById('form349').style.display = 'block';
    }
}
function vi() {

    document.getElementById('selecUs').style.display = 'none';

    firebase.database().ref('Redes/Alejandro/').equalTo('imagen').orderByKey().once('value').then(
        function (snapshot) {
            if (snapshot.exists() == true) {

                firebase.database().ref('Redes').equalTo('Alejandro').orderByKey().once('value').then(
                    function (snapshot1) {
                        snapshot1.forEach(function (childSnapshot) {

                            if (childSnapshot.val().nombre == null || childSnapshot.val().imagen == null) {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else if (childSnapshot.val().nombre == null && childSnapshot.val().imagen == null) {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else if (childSnapshot.val().nombre == "" && childSnapshot.val().imagen == "") {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else if (childSnapshot.val().nombre == "" || childSnapshot.val().imagen == "") {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';
                            } else {
                                document.getElementById('Vane').style.display = 'none';
                                document.getElementById('form349').style.display = 'none';
                                document.getElementById('lale').style.display = 'none';
                                document.getElementById('form3491').style.display = 'none';
                                document.getElementById('label391').style.display = 'block';

                            }
                        });
                    });

            } else {
                console.log("REvisa", "No Existe");
                document.getElementById('Vane').style.display = 'none';
                document.getElementById('form349').style.display = 'none';
                document.getElementById('lale').style.display = 'inline';
                document.getElementById('form3491').style.display = 'none';
                document.getElementById('label391').style.display = 'none';

            }

        });
}
function EliminaRrAre1(name, title) {
    if (name == "Sin Foto") {
        restaurar1();
    }
    else {
        document.getElementById('idF912').value = name;
        document.getElementById('idF1912').value = title;
        document.getElementById('idF912').style.display = 'inline';
        document.getElementById('idF1912').style.display = 'inline';
        document.getElementById('eli391').style.display = 'inline';
        document.getElementById('cancel391').style.display = 'inline';
        document.getElementById('selecUs').style.display = 'none';
        document.getElementById('label391').style.display = 'none';
        document.getElementById('Vane').style.display = 'none';
        document.getElementById('lale').style.display = 'none';
        document.getElementById('form3491').style.display = 'block';
        document.getElementById('form349').style.display = 'none';
    }
}
/*----------------------Galerias----------------*/
/*------------PrecargarTablas-------- */
galT();
galAlum();
galAdmin();
recargarEscu();
/*------------Galeria tutor-------- */
function galT() {

    const tasksContainer52 = document.getElementById("table113");
    tasksContainer52.innerHTML = "";
    firebase.database().ref('Slider1/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer52.innerHTML += `
      <tr>
      <td class=label><img class="Ampliar"src="${childSnapshot.val().imagen}" width="100px"></td>
      <td class=label>${childSnapshot.val().nombre}</td>
      <td>
      <a type='button'name="${childSnapshot.val().nombre}"
      title="${childSnapshot.key}" onclick=EliminarTUTU(name,title)> <img src="img/tags.png" style="width:50px;"></a>
      </td>  
 
  </tr>
      `
            });
        });
}
function EliminarTUTU(name, title) {
    document.getElementById('idF').value = name;
    document.getElementById('idF1').value = title;
    document.getElementById('form12').style.display = 'none';
    document.getElementById('form34').style.display = 'inline';
    document.getElementById('idF').style.display = 'inline';
    document.getElementById('idF1').style.display = 'inline';
    document.getElementById('eli3').style.display = 'inline';
    document.getElementById('cancel3').style.display = 'inline';
}
/*------------Galeria Alumno-------- */
function galAlum() {
    /*------------Galeria Alumno-------- */
    const tasksContainer53 = document.getElementById("table114");
    tasksContainer53.innerHTML = "";
    firebase.database().ref('Slider2/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer53.innerHTML += `
      <tr>
      <td class=label><img class="Ampliar"src="${childSnapshot.val().imagen}" width="100px"></td>
      <td class=label>${childSnapshot.val().nombre}</td>
 <td>   <a type='button' name="${childSnapshot.val().nombre}"
      title="${childSnapshot.key}" onclick=EliminarTUTU1(name,title)> <img src="img/tags.png" style="width:50px;"></a>
      </td> 
  
  
      </tr>


      `
            });
        });
}
function EliminarTUTU1(name, title) {
    document.getElementById('idF111').value = name;
    document.getElementById('idF11').value = title;
    document.getElementById('form121').style.display = 'none';
    document.getElementById('form341').style.display = 'inline';
    document.getElementById('label313').style.display = 'none';
    document.getElementById('idF111').style.display = 'inline';
    document.getElementById('idF11').style.display = 'inline';
    document.getElementById('eli31').style.display = 'inline';
    document.getElementById('cancel31').style.display = 'inline';
}
/*------------Galeria Admin-------- */
function galAdmin() {

    const tasksContainer54 = document.getElementById("table115");
    tasksContainer54.innerHTML = "";
    firebase.database().ref('Slider3/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer54.innerHTML += `
      <tr> 
      <td class=label><img class="Ampliar" src="${childSnapshot.val().imagen}" width="100px"></td>
      <td class=label>${childSnapshot.val().nombre}</td>
      <td>   <a type='button' name="${childSnapshot.val().nombre}"
      title="${childSnapshot.key}" onclick=EliminarTUTU12(name,title)> <img src="img/tags.png" style="width:50px;"></a>
      </td>  
  
      </tr>
      `
            });
        });
}
function EliminarTUTU12(name, title) {
    document.getElementById('idF1112').value = name;
    document.getElementById('idF112').value = title;
    document.getElementById('form1212').style.display = 'none';
    document.getElementById('form3412').style.display = 'inline';
    document.getElementById('label312').style.display = 'none';
    document.getElementById('idF1112').style.display = 'inline';
    document.getElementById('idF112').style.display = 'inline';
    document.getElementById('eli312').style.display = 'inline';
    document.getElementById('cancel312').style.display = 'inline';
}
/*------------Galeria Escuelas-------- */
function recargarEscu() {

    const tasksContainer55 = document.getElementById("table116");
    tasksContainer55.innerHTML = "";
    firebase.database().ref('GaleriaE/').once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                tasksContainer55.innerHTML += `
 <tr>
  <td class=label><img src="${childSnapshot.val().foto}" width="100px"></td>
  <td class=label>${childSnapshot.val().titulo}</td>
  <td class=label>${childSnapshot.val().descr}</td>

<td>
<a type='button' title="${childSnapshot.key}" onclick=Editar123(title)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
</td>
  <td>   <a type='button' name="${childSnapshot.val().nombre}"
  title="${childSnapshot.key}" onclick=EliminarTUTU123(name,title)> <img src="img/tags.png" style="width:50px;"></a>
      </td>  

  </tr>
      `
            });
        });

}
$("#registrarE").on("click", function (event) {
    event.preventDefault();
    recargarEscu();
    registrarE();
});
function registrarE() {
    var tituloE = document.getElementById("tituloE").value;
    var descE = document.getElementById("descrE").value;
    if (tituloE != "" && descE != "") {
        document.getElementById('form123').style.display = 'inline';
        document.getElementById('limpiarE').style.display = 'none';
        document.getElementById('registrarE').style.display = 'none';
        document.getElementById("tituloE").disabled = true
        document.getElementById("descrE").disabled = true
        document.getElementById('Refhyrf').style.display = 'none';
        document.getElementById('desas').style.display = 'inline';
        document.getElementById('atrasdffgh').style.display = 'inline';
    } else if (tituloE == "" && descE != "") {
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

            title: 'Ingrese el titulo de la imagen'

        })
    } else if (tituloE != "" && descE == "") {
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

            title: 'Ingrese la descripcion de la imagen'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }

}
function limpiarE() {
    document.getElementById("tituloE").value = "";
    document.getElementById("descrE").value = "";
}
$("#limpiarE").on("click", function (event) {
    event.preventDefault();
    limpiarE();
});
$("#limpiarEE").on("click", function (event) {
    event.preventDefault();
    limpiarEE();
});
function Editar123(title) {
    document.getElementById('form1233').style.display = 'none';
    document.getElementById('form123').style.display = 'none';
    document.getElementById('form123357').style.display = 'inline';
    document.getElementById('form343').style.display = 'none';
    var starCountRef = firebase.database().ref('GaleriaE/' + title);
    starCountRef.on('value', (snapshot) => {
        document.getElementById("keyE").value = title;
        document.getElementById("tituloEE").value = snapshot.val().titulo;
        document.getElementById("descrEE").value = snapshot.val().descr;
    });
}
function limpiarEE() {
    document.getElementById("tituloEE").value = "";
    document.getElementById("descrEE").value = "";
}
$("#registrarEE").on("click", function (event) {
    event.preventDefault();
    registrarEE();

});
$("#canceñ34E").on("click", function (event) {
    event.preventDefault();
    canceñ34E();

});
function registrarEE() {

    var proglab3 = document.getElementById('upprogress3');
    var namebox3 = document.getElementById('namebox3');
    var uno1 = document.getElementById("keyE").value;
    var uno11 = document.getElementById("tituloEE").value;
    var uno111 = document.getElementById("descrEE").value;
    if (uno11 != "" && uno111 != "") {
        firebase.database().ref('GaleriaE/' + uno1).update({
            "titulo": uno11,
            "descr": uno111
        });

        namebox3.value = "";
        proglab3.value = "";
        document.getElementById('myimg3').style.display = 'none';
        document.getElementById('selbtn3').style.display = 'inline';
        document.getElementById('upbtn3').style.display = 'none';
        document.getElementById('limp3').style.display = 'none';
        document.getElementById('upprogress3').style.display = 'none';
        $('#myimg3').attr("src", 'img/logopa1.png');
        document.getElementById("tituloE").value = "";
        document.getElementById("descrE").value = "";
        document.getElementById('tituloE').disabled = false;
        document.getElementById('descrE').disabled = false;
        document.getElementById('registrarE').style.display = 'inline';
        document.getElementById('limpiarE').style.display = 'inline';
        document.getElementById('form1233').style.display = 'inline';
        document.getElementById('form123').style.display = 'none';
        document.getElementById('form343').style.display = 'none';
        document.getElementById('form123357').style.display = 'none';
        recargarEscu();
    } else if (uno11 == "" && uno111 != "") {
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

            title: 'Ingrese el titulo de la imagen'

        })
    } else if (uno11 != "" && uno111 == "") {
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

            title: 'Ingrese la descripcion de la imagen'

        })
    }
    else {
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

            title: 'Campos vacios'

        })
    }

}

function EliminarTUTU123(name, title) {
    document.getElementById('eli33').style.display = 'inline';
    document.getElementById('cancel33').style.display = 'inline';
    document.getElementById('form123357').style.display = 'none';
    document.getElementById('idF3').value = name;
    document.getElementById('idF13').value = title;
    document.getElementById('form123').style.display = 'none';
    document.getElementById('form1233').style.display = 'none';
    document.getElementById('form343').style.display = 'inline';
    document.getElementById('idF3').style.display = 'inline';
    document.getElementById('idF13').style.display = 'inline';

}
$("#atrasdffgh").on("click", function (event) {
    event.preventDefault();
    atrasdffgh();

});
function atrasdffgh() {
    document.getElementById("tituloE").disabled = false
    document.getElementById("descrE").disabled = false
    document.getElementById('form123357').style.display = 'none';
    document.getElementById('form343').style.display = 'none';
    document.getElementById('form123').style.display = 'none';
    document.getElementById('form1233').style.display = 'block';
    document.getElementById('registrarE').style.display = 'inline';
    document.getElementById('limpiarE').style.display = 'inline';
    document.getElementById('Refhyrf').style.display = 'inline';
    document.getElementById('atrasdffgh').style.display = 'none';
}
/*----------------------Complementos----------------*/
/*------------PrecargarTablas-------- */
recargar1Vid();
recargar1D();
recargar1V();
carg2();
ReAvi();


/*----------------------Videos----------------*/
function recargar1Vid() {


    const tasksContainer42 = document.getElementById("table13");

    firebase.database().ref('Video/').equalTo('Problematica').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url = childSnapshot.val().video4;
                tasksContainer42.innerHTML = "";
                var link6 = "https://www.youtube.com/embed/" + url;

                tasksContainer42.innerHTML +=
                    `    <tr>
       <td class=label>Problematica</td>
       <td class=label>${link6}</td>
                 <td>
               <a type='button'name="Problematica" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
               </td>
                 <td>   <a type='button'  name="Problematica"
                 onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                     </td>  


   </tr>`
            });

        });


    firebase.database().ref('Video/').equalTo('memo').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url6 = childSnapshot.val().video4;

                var link66 = "https://www.youtube.com/embed/videoseries?" + url6;

                tasksContainer42.innerHTML += `    <tr>
          <td class=label>Construcción Memorama</td>
          <td class=label>${link66}</td>
  
          <td>
          <a type='button'name="memo" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
          </td>
            <td>   <a type='button'  name="memo"
            onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                </td> 
      </tr>`
            });
        });
    firebase.database().ref('Video/').equalTo('rompe').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url7 = childSnapshot.val().video4;

                var link7 = "https://www.youtube.com/embed/videoseries?" + url7;

                tasksContainer42.innerHTML += `
            <tr>
            <td class=label>Construcción Rompecabezas</td>
            <td class=label>${link7}</td>
   
            <td>
            <a type='button'name="rompe" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
            </td>
              <td>   <a type='button' name="rompe"
              onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                  </td> 
        </tr>`
            });
        });
    firebase.database().ref('Video/').equalTo('util').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url8 = childSnapshot.val().video4;

                var link8 = "https://www.youtube.com/embed/" + url8;

                tasksContainer42.innerHTML +=
                    `
              <tr>
              <td class=label>Utilidad</td>
              <td class=label>${link8}</td>
 
              <td>
              <a type='button' name="util" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
              </td>
                <td>   <a type='button'  name="util"
                onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                    </td> 
              
          </tr>` });
        });
    firebase.database().ref('Video/').equalTo('entre').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url9 = childSnapshot.val().video4;

                var link9 = "https://www.youtube.com/embed/" + url9;

                tasksContainer42.innerHTML += `
                
                <tr>
                <td class=label>Entrevista</td>
                <td class=label>${link9}</td>
          

                <td>
                <a type='button' name="entre" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
                </td>
                  <td>   <a type='button'  name="entre"
                  onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                      </td> 
            </tr>`   });
        });
    firebase.database().ref('Video/').equalTo('Tutor').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url0 = childSnapshot.val().video4;

                var link0 = "https://www.youtube.com/embed/videoseries?" + url0;

                tasksContainer42.innerHTML +=
                    `
               <tr>
                <td class=label>Tutor</td>
                <td class=label>${link0}</td>
                       <td>
                <a type='button' name="Tutor" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
                </td>
                  <td>   <a type='button'  name="Tutor"
                  onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                      </td> 
            </tr>` });
        });

    firebase.database().ref('Video/').equalTo('Alumno').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url34 = childSnapshot.val().video4;

                var link34 = "https://www.youtube.com/embed/videoseries?" + url34;

                tasksContainer42.innerHTML +=
                    `
        <tr>
         <td class=label>Alumno</td>
         <td class=label>${link34}</td>
         <td>
                <a type='button' name="Alumno" onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
                </td>
                  <td>   <a type='button'  name="Alumno"
                  onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                      </td> 
     </tr>`  });
        });
    firebase.database().ref('Video/').equalTo('Admin').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var url45 = childSnapshot.val().video4;

                var link45 = "https://www.youtube.com/embed/videoseries?" + url45;

                tasksContainer42.innerHTML +=
                    ` <tr>
           <td class=label>Administrador</td>
           <td class=label>${link45}</td>
    
           <td>
           <a type='button' name="Admin"onclick=EditarVi(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
           </td>
             <td>   <a type='button' name="Admin"
             onclick=EliminarVi(name)> <img src="img/tags.png" style="width:50px;"></a>
                 </td> 
       </tr>`  });
        });
}
function EditarVi(name) {
    document.getElementById('idkd').style.display = 'inline';
    if (name == "Problematica") {
        document.getElementById("video").value = "Problematica";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';

    } else if (name == "memo") {
        document.getElementById("video").value = "Construcción Memorama";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';
    } else if (name == "rompe") {
        document.getElementById("video").value = "Construcción Rompecabezas";
        document.getElementById("linksq").value = name
        document.getElementById('actualizar').style.display = 'inline';
    } else if (name == "util") {
        document.getElementById("video").value = "Utilidad";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';
    } else if (name == "entre") {
        document.getElementById("video").value = "Entrevista";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';
    } else if (name == "Tutor") {
        document.getElementById("video").value = "Tutor";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';
    } else if (name == "Alumno") {
        document.getElementById("video").value = "Alumno";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';
    } else if (name == "Admin") {
        document.getElementById("video").value = "Administrador";
        document.getElementById("linksq").value = name;
        document.getElementById('actualizar').style.display = 'inline';
    }

}
function EliminarVi(name3) {
    firebase.database().ref('Video/' + name3).update({ "video4": "" });
    recargar1Vid();
}
function registrasrvid() {
    var inputValue = document.getElementById("links7").value;
    var inputValue1 = document.getElementById("linksq").value;
    if (inputValue != "") {
        firebase.database().ref('Video/' + inputValue1).update({ 'video4': inputValue });
        document.getElementById('actualizar').style.display = 'none';
        recargar1Vid();
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

            title: 'Ingrese link del video'

        })
    }
}
$("#actualizar").on("click", function (event) {
    event.preventDefault();
    registrasrvid();
    limpiar3()
});
function limpiar3() {
    document.getElementById("video").value = "";
    document.getElementById("links7").value = "";
    document.getElementById("linksq").value = "";
    document.getElementById('actualizar').style.display = 'none';

}
function limpiar31() {

    document.getElementById("links7").value = "";

}
$("#limpiar3").on("click", function (event) {
    event.preventDefault();

    limpiar31();
});
function Eliminar3() {

    firebase.database().ref('Video/Problematica').update({ 'video4': "" });
    firebase.database().ref('Video/memo').update({ 'video4': "" });
    firebase.database().ref('Video/rompe').update({ 'video4': "" });
    firebase.database().ref('Video/util').update({ 'video4': "" });
    firebase.database().ref('Video/entre').update({ 'video4': "" });
    firebase.database().ref('Video/Tutor').update({ 'video4': "" });
    firebase.database().ref('Video/Alumno').update({ 'video4': "" });
    firebase.database().ref('Video/Admin').update({ 'video4': "" });
    limpiar3()
    recargar1Vid();
}
$("#idkd").on("click", function (event) {
    event.preventDefault();
    document.getElementById('idkd').style.display = 'none';
    limpiar3();
});

/*----------------------Documentos----------------*/
function recargar1D() {
    /*------------documentos-------- */
    const tasksContainer43 = document.getElementById("table14");
    firebase.database().ref('Documentos/').orderByKey().once('value').then(
        function (snapshot) {
            tasksContainer43.innerHTML = ""
            snapshot.forEach(function (childSnapshot) {

                tasksContainer43.innerHTML += `
        <tr>
        <td class=label>${childSnapshot.val().fecha}</td>
        <td class=label>${childSnapshot.val().nombre}</td>
    
        <td>
                <a type='button' name="${childSnapshot.key}"
                onclick=Eliminar4(name)> <img src="img/tags.png" title="Eliminar" style="width:50px;"></a>
                </td>
    </tr>
     `

            });
        });

}
function limpiarD() {
    document.getElementById("tituloD").value = "";
    document.getElementById("docx").value = "";
    document.getElementById("pdf").value = "";
    recargar1D();
}
$("#limpiarD").on("click", function (event) {
    event.preventDefault();
    limpiarD();
});
function Eliminar4(title) {
    firebase.database().ref('Documentos/' + title).remove();
    recargar1D();

}
function registrarD() {
    var inputValue = document.getElementById("tituloD").value;
    var inputValue1 = document.getElementById("docx").value;
    var inputValue3 = document.getElementById("pdf").value;
    var tam=inputValue1.length;
    var quitar=tam-66-35;
    var id=inputValue1.substr(35,quitar)
    var linkFinalD="https://drive.google.com/uc?export=download&id="+id
    console.log(linkFinalD)

    var tam=inputValue3.length;
    var quitar=tam-20-32;
    var id=inputValue3.substr(32,quitar)
    var linkFinalP="https://drive.google.com/uc?export=download&id="+id
    console.log(linkFinalP)

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
    if (inputValue != "" && inputValue1 != "" && inputValue3 != "") {
        firebase.database().ref('Documentos/').push().set({ 'fecha': fechaYHora, 'nombre': inputValue, 'url1': linkFinalD, 'url3': linkFinalP, 'url2': inputValue3 })


    } else if (inputValue == "" && inputValue1 != "" && inputValue3 != "") {
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

            title: 'Ingrese titulo del documento'

        })
    } else if (inputValue != "" && inputValue1 == "" && inputValue3 != "") {
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

            title: 'Ingrese link para archivo Docx'

        })
    } else if (inputValue != "" && inputValue1 != "" && inputValue3 == "") {
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

            title: 'Ingrese link para archivo PDF'

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

            title: 'Campos Vacios'

        })
    }

}
$("#registrarD").on("click", function (event) {
    event.preventDefault();
    registrarD();
    limpiarD();
});
/*----------------------Varios----------------*/

function recargar1V() {

    const tasksContainer48 = document.getElementById("table18");
    firebase.database().ref('Redes').equalTo('LinkAdmin').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().qrf == "") {
                    var ms5 = "mala";
                } else if (childSnapshot.val().qrf != "") {
                    var ms5 = "buena";
                }
                if (childSnapshot.val().link == "") {
                    var ms16 = "mala";
                } else if (childSnapshot.val().link != "") {
                    var ms16 = "buena";
                }
                if (childSnapshot.val().Figma == "") {
                    var ms27 = "mala";
                } else if (childSnapshot.val().Figma != "") {
                    var ms27 = "buena";
                }
                tasksContainer48.innerHTML = `
      <tr>
      <td class=label><img src="img/dinos.png" width="50px"></td>
      <td class=label>Link de Código Qr</td>
      <td class=label><img src="img/${ms5}.png" width="50px"></td>
      <td>
      <a type='button' name="qrf" onclick=EditarV(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
      </td>
        <td>   <a type='button'name="qrf" onclick=EliminarV(name)> <img src="img/tags.png" style="width:50px;"></a>
            </td> 
  </tr>
  
  <tr>
  <td class=label><img src="img/descargando.png" width="50px"></td>
  <td class=label>Aplicación Administradores</td>
  <td class=label><img src="img/${ms16}.png" width="50px"></td>

  <td>
  <a type='button'  name="link" onclick=EditarV(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
  </td>
    <td>   <a type='button' name="link" onclick=EliminarV(name)> <img src="img/tags.png" style="width:50px;"></a>
        </td> 
</tr>
  
<tr>
<td class=label><img src="img/fig.png" width="50px"></td>
<td class=label>Figma</td>
<td class=label><img src="img/${ms27}.png" width="50px"></td>


<td>
<a type='button'  name="Figma" onclick=EditarV(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
</td>
  <td>   <a type='button' name="Figma" onclick=EliminarV(name)> <img src="img/tags.png" style="width:50px;"></a>
      </td> 
</tr>
`    });
        });
    const tasksContainer47 = document.getElementById("table19");
    firebase.database().ref('Redes').equalTo('LinkMaterial').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                if (childSnapshot.val().DescarHis3 == "") {
                    var ms38 = "mala";
                } else if (childSnapshot.val().DescarHis3 != "") {
                    var ms38 = "buena";
                }
                tasksContainer47.innerHTML = `
                <tr>
              <td class=label><img src="img/estuche.png" width="50px"></td>
              <td class=label>Material de Apoyo Enlace</td>
              <td class=label><img src="img/${ms38}.png" width="50px"></td>
                  <td>
<a type='button'  name="DescarHis3" onclick=EditarV(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
</td>
  <td>   <a type='button' name="DescarHis3" onclick=EliminarV(name)> <img src="img/tags.png" style="width:50px;"></a>
      </td> 
          </tr>
      `
            });
        });
    const tasksContainer49 = document.getElementById("table110");
    firebase.database().ref('Redes').equalTo('LinkHistoria').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().DescarHis == "") {
                    var ms49 = "mala";
                } else if (childSnapshot.val().DescarHis != "") {
                    var ms49 = "buena";
                }
                tasksContainer49.innerHTML = `
          <tr>
          <td class=label><img src="img/nota.png" width="50px"></td>
          <td class=label>Historia Enlace</td>
          <td class=label><img src="img/${ms49}.png" width="50px"></td>
                   <td>
          <a type='button'   name="DescarHis" onclick=EditarV(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
          </td>
            <td>   <a type='button'  name="DescarHis" onclick=EliminarV(name)> <img src="img/tags.png" style="width:50px;"></a>
                </td> 
    `
            });
        });
}
function limpiarRV() {
    document.getElementById("linkrV").value = "";
    document.getElementById("linkr1V").value = "";
    document.getElementById('actualizarrV').style.display = 'none';
    document.getElementById('idnevsdtext2').style.display = "none"
}

$("#Cancelf").on("click", function (event) {
    event.preventDefault();
    limpiarRV();
    document.getElementById('Cancelf').style.display = "none"
});
$("#limpiarRV").on("click", function (event) {
    event.preventDefault();
    document.getElementById("linkrV").value = "";
});

/*------------Eliminar varios;-------- */
function EliminarVar() {
    firebase.database().ref('Redes/LinkAdmin/').update({ "qrf": "" });
    firebase.database().ref('Redes/LinkAdmin/').update({ "link": "" });
    firebase.database().ref('Redes/LinkAdmin/').update({ "Figma": "" });
    firebase.database().ref('Redes/LinkMaterial/').update({ "DescarHis3": "" });
    firebase.database().ref('Redes/LinkMaterial/').update({ "VerMasM": "" });
    firebase.database().ref('Redes/LinkHistoria/').update({ "DescarHis": "" });
    firebase.database().ref('Redes/LinkHistoria/').update({ "VerMas": "" });
    recargar1V();
}
function EditarV(name) {
    var contenedor1 = document.getElementById('idnevsdtext2');
    document.getElementById('idnevsdtext2').style.display = "block"
    document.getElementById('Cancelf').style.display = "inline"
    if (name == "qrf") {
        document.getElementById("linkrV").value = "";
        document.getElementById("linkr1V").value = name
        document.getElementById('actualizarrV').style.display = 'inline';
        contenedor1.innerHTML = "<label>Link de Código Qr</label>"
    } else if (name == "link") {
        document.getElementById("linkrV").value = "";
        document.getElementById("linkr1V").value = name
        document.getElementById('actualizarrV').style.display = 'inline';
        contenedor1.innerHTML = "<label>Aplicación Administradores</label>"
    } else if (name == "DescarHis3") {
        document.getElementById("linkrV").value = "";
        document.getElementById("linkr1V").value = name
        document.getElementById('actualizarrV').style.display = 'inline';
        contenedor1.innerHTML = "<label>Material de Apoyo Enlace</label>"
    }
    else if (name == "DescarHis") {
        document.getElementById("linkrV").value = "";
        document.getElementById("linkr1V").value = name
        document.getElementById('actualizarrV').style.display = 'inline';
        contenedor1.innerHTML = "<label>Historia Enlace</label>"
    }
    else if (name == "Figma") {
        document.getElementById("linkrV").value = "";
        document.getElementById("linkr1V").value = name
        document.getElementById('actualizarrV').style.display = 'inline';
        contenedor1.innerHTML = "<label>Figma</label>"
    }
}
function actualizarr1V() {
    var inpu = document.getElementById("linkrV").value;
    var name = document.getElementById("linkr1V").value;
    document.getElementById('idnevsdtext2').style.display = "none"
    if (inpu != "") {
        if (name == "qrf") {
            firebase.database().ref('Redes/LinkAdmin/').update({ "qrf": inpu });
            document.getElementById('actualizarrV').style.display = 'none';
            document.getElementById('linkrV').value = "";
            recargar1V();
        } else if (name == "link") {
            firebase.database().ref('Redes/LinkAdmin/').update({ "link": inpu });
            document.getElementById('actualizarrV').style.display = 'none';
            document.getElementById('linkrV').value = "";
            recargar1V();
        } else if (name == "DescarHis3") {
            firebase.database().ref('Redes/LinkMaterial/').update({ "DescarHis3": inpu });
            firebase.database().ref('Redes/LinkMaterial/').update({ "VerMasM": inpu });
            document.getElementById('actualizarrV').style.display = 'none';
            document.getElementById('linkrV').value = "";
            recargar1V();
        }
        else if (name == "DescarHis") {
            firebase.database().ref('Redes/LinkHistoria/').update({ "DescarHis": inpu });
            firebase.database().ref('Redes/LinkHistoria/').update({ "VerMas": inpu });
            document.getElementById('actualizarrV').style.display = 'none';
            document.getElementById('linkrV').value = "";
            recargar1V();
        }
        else if (name == "Figma") {
            firebase.database().ref('Redes/LinkAdmin/').update({ "Figma": inpu });
            document.getElementById('actualizarrV').style.display = 'none';
            document.getElementById('linkrV').value = "";
            recargar1V();
        }

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

            title: 'Ingrese link de videos'

        })
    }

}
function EliminarV(name) {
    if (name == "qrf") {
        firebase.database().ref('Redes/LinkAdmin/').update({ "qrf": "" });
        document.getElementById('actualizarrV').style.display = 'none';
        recargar1V();
    } else if (name == "link") {
        firebase.database().ref('Redes/LinkAdmin/').update({ "link": "" });
        document.getElementById('actualizarrV').style.display = 'none';

        recargar1V();
    } else if (name == "DescarHis3") {
        firebase.database().ref('Redes/LinkMaterial/').update({ "DescarHis3": "" });
        firebase.database().ref('Redes/LinkMaterial/').update({ "VerMasM": "" });
        document.getElementById('actualizarrV').style.display = 'none';

        recargar1V();
    }
    else if (name == "DescarHis") {
        firebase.database().ref('Redes/LinkHistoria/').update({ "DescarHis": "" });
        firebase.database().ref('Redes/LinkHistoria/').update({ "VerMas": "" });
        document.getElementById('actualizarrV').style.display = 'none';

        recargar1V();
    }
    else if (name == "Figma") {
        firebase.database().ref('Redes/LinkAdmin/').update({ "Figma": "" });
        document.getElementById('actualizarrV').style.display = 'none';

        recargar1V();
    }

}

/*------------Avisos-------- */

function ReAvi() {
    var Avisos = [];
    var Avisos1 = [];
    var b0 = 0;
    const tasksContainer39 = document.getElementById("table12");
    tasksContainer39.innerHTML = "";
    firebase.firestore().collection('Avisos').orderBy("fecha", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const task = doc.data();

                tasksContainer39.innerHTML += `
        <tr>
        <td class=label>${task.fecha}</td>
        <td class=label>${task.titulo}</td>
        <td class=label>${task.Descrip}</td>

                <td>
                <a type='button' name="${task.fecha}" onclick="EditarA(name)"> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
                </td>
                  <td>   <a type='button'name="${doc.id}" onclick="EliminarA(name)"> <img src="img/tags.png" style="width:50px;"></a>
                      </td> 
    </tr>

         `   , b0 = b0 + 1;
                Avisos.push(task.fecha);
                Avisos1.push(doc.id);
            });
        })
        .catch((error) => {

        });
}
function EliminarA(name) {
    console.log("dat", name)
    document.getElementById('agreA').style.display = 'inline';
    document.getElementById('agreA1').style.display = 'none';
    document.getElementById('limpiar143').style.display = 'inline';
    firebase.firestore().collection('Avisos').doc(name).delete();
    limpiarA();
    ReAvi();

}
$("#idkddsf").on("click", function (event) {
    event.preventDefault();
    document.getElementById('fechaa').style.display = 'none';
    document.getElementById('idi').style.display = 'none';
    document.getElementById('idkddsf').style.display = 'none';
    limpiarA();
});

function limpiarA() {
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";
    document.getElementById("idi").value = "";
    document.getElementById("fechaa").value = "";
    document.getElementById('agreA').style.display = 'inline';
    document.getElementById('agreA1').style.display = 'none';

}
function limpiarA1() {
    document.getElementById("titulo").value = "";
    document.getElementById("contenido").value = "";

}
$("#limpiar143").on("click", function (event) {
    event.preventDefault();
    document.getElementById('idkddsf').style.display = 'inline';
    limpiarA1();
});
$("#agreA").on("click", function (event) {
    event.preventDefault();
    agregarA();

});
$("#agreA1").on("click", function (event) {
    event.preventDefault();
    agregarA1();

});
function EliminarAv() {
    firebase.firestore().collection('Avisos').orderBy("fecha", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                firebase.firestore().collection('Avisos').doc(doc.id).delete()
            });
            document.getElementById('agreA1').style.display = 'none';
            document.getElementById('limpiar143').style.display = 'none';
            document.getElementById('agreA').style.display = 'inline';
            ReAvi();
        });

}
function agregarA() {
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
    var inputValue2 = document.getElementById("titulo").value;
    var inputValue3 = document.getElementById("contenido").value;
    if (inputValue2 != "" && inputValue3 != "") {
        firebase.firestore().collection("Avisos").add({
            fecha: fechaYHora,
            Descrip: inputValue3,
            titulo: inputValue2
        })
            .then((docRef) => {
                limpiarA();
                ReAvi();
            })
            .catch((error) => {

            });

    } else if (inputValue2 == "" && inputValue3 != "") {
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

            title: 'Ingrese un titulo'

        })
    } else if (inputValue2 != "" && inputValue3 == "") {
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

            title: 'Ingrese contenido'

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

            title: 'Campos vacios'

        })
    }

}
function agregarA1() {
    var inputValue = document.getElementById("idi").value;
    var inputValue0 = document.getElementById("fechaa").value;
    var inputValue1 = document.getElementById("titulo").value;
    var inputValue2 = document.getElementById("contenido").value;
    var db = firebase.firestore()
    if (inputValue1 != "" && inputValue2 != "") {
        db.collection("Avisos").doc(inputValue).update({
            "titulo": inputValue1,
            "Descrip": inputValue2
        })
            .then(() => {
                document.getElementById('fechaa').style.display = 'none';
                document.getElementById('idi').style.display = 'none';
                document.getElementById('fechaa').style.disabled = true
                document.getElementById('idi').style.disabled = true
                limpiarA()
                document.getElementById('idkddsf').style.display = 'none';
                document.getElementById('agreA').style.display = 'inline';
                document.getElementById('agreA1').style.display = 'none';
                ReAvi();
            });
    } else if (inputValue1 == "" && inputValue2 != "") {
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

            title: 'Ingrese un titulo'

        })
    } else if (inputValue1 != "" && inputValue2 == "") {
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

            title: 'Ingrese contenido'

        })
    }
}
function EditarA(name) {
    document.getElementById('fechaa').style.display = 'inline';
    document.getElementById('idi').style.display = 'inline';
    document.getElementById('fechaa').style.disabled = true
    document.getElementById('idi').style.disabled = true
    document.getElementById('idkddsf').style.display = 'inline';
    firebase.firestore().collection('Avisos').where("fecha", "==", name).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const task20 = doc.data();
            document.getElementById("fechaa").value = task20.fecha;
            document.getElementById("titulo").value = task20.titulo;
            document.getElementById("contenido").value = task20.Descrip;
            document.getElementById("idi").value = doc.id;
            document.getElementById('agreA1').style.display = 'inline';
        });
        document.getElementById('agreA').style.display = 'none';

    });
}
/*------------Comunidad-------- */

function carg2() {
    var Comunidad = [];
    var Comunidad1 = [];
    var a0 = 0
    const tasksContainer38 = document.getElementById("table11");
    tasksContainer38.innerHTML = "";
    firebase.firestore().collection('Correo').orderBy("fecha", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const task = doc.data();

                tasksContainer38.innerHTML += `
        <tr>
        <td class=label>${task.fecha}</td>
        <td class=label>${task.usuario}</td>
        <td class=label>${task.pregunta}</td>
        <td class=label>${task.respuesta}</td>
                <td>
                <a type='button' name='${task.fecha}' onclick=Editar1(name)> <img src="img/upgrade.png" title="Editar" style="width:50px;"></a>
                </td>
                  <td>   <a type='button'name='${doc.id}'
                  onclick=Eliminar(name)> <img src="img/tags.png" style="width:50px;"></a>
                      </td> 
    </tr>
  
           `, a0 = a0 + 1;
                Comunidad.push(task.fecha);
                Comunidad1.push(doc.id);
            });
        })
        .catch((error) => {

        });
}
function limpiar1() {
    document.getElementById("fecha").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("pregunta").value = "";
    document.getElementById("respuesta").value = "";
    document.getElementById("id").value = "";
    document.getElementById('registrar1').style.display = 'none';


}

$("#iffdddsf").on("click", function (event) {
    event.preventDefault();
    document.getElementById('iffdddsf').style.display = 'none';
    limpiar1();
});
$("#limpiar").on("click", function (event) {
    event.preventDefault();
    document.getElementById("respuesta").value = "";

});
function Editar1(name) {
    document.getElementById('iffdddsf').style.display = 'inline';
    firebase.firestore().collection('Correo').where("fecha", "==", name).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const task20 = doc.data();
            document.getElementById("fecha").value = task20.fecha;
            document.getElementById("usuario").value = task20.usuario;
            document.getElementById("pregunta").value = task20.pregunta;
            if (task20.respuesta != "En espera...") {
                document.getElementById("respuesta").value = task20.respuesta;
            } else {
                document.getElementById("respuesta").value = "";
            }
            document.getElementById("id").value = doc.id;
            document.getElementById('registrar1').style.display = 'inline';

            localStorage.setItem("adm", localStorage.getItem("adm"));
        });


    });
}
$("#registrar1").on("click", function (event) {
    event.preventDefault();
    Agregar1();

});
function Agregar1() {
    var inputValue = document.getElementById("id").value;
    var inputValue1 = document.getElementById("respuesta").value;
    var nombre1 = localStorage.getItem("adm");
    document.getElementById('iffdddsf').style.display = 'none';
    var db = firebase.firestore()
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
    if (inputValue1 != "") {
        db.collection("Correo").doc(inputValue).update({
            "respuesta": inputValue1,
            "adm": nombre1,
            "admho": fechaYHora,
        })
            .then(() => {
                carg2();
                limpiar1();
            });

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

            title: 'Ingrese una respuesta'

        })
    }

}
function Eliminar(name) {
    document.getElementById('Eliminar1').style.display = 'inline';

    document.getElementById('limpiar').style.display = 'inline';

    firebase.firestore().collection('Correo').doc(name).delete();
    carg2();
    limpiar1();

}
$("#Eliminar1").on("click", function (event) {
    event.preventDefault();
    Eliminar1();

});

function Eliminar1() {
    firebase.firestore().collection('Correo').orderBy("fecha", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                firebase.firestore().collection('Correo').doc(doc.id).delete()
            });
            document.getElementById('Eliminar1').style.display = 'inline';
            document.getElementById('limpiar').style.display = 'inline';

            carg2();
            limpiar1();
        });
}
/*------------------------LOGS-------------------------- */
/*----Carga de tablas---- */
carga();
use();
function carga() {
    document.getElementById("buscar6778").value = "";
    const tasksContainer60 = document.getElementById("table120");
    tasksContainer60.innerHTML = "";
    firebase.firestore().collection('Logs').orderBy("fecha1", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const task = doc.data();

                if (task.lugar == 'Movil') {
                    var dat = "mov"
                } else if (task.lugar == 'Web') {
                    var dat = "mon"
                }
                tasksContainer60.innerHTML += `
        <tr>
        <td class=label6>${task.codidd}</td>
        <td class=label7>${task.fecha1}</td>
        <td class=label7>${task.accion}</td>
        <td class=label7 id="da112"><img src="img/${dat}.png" width="50px"></td>
        <td class=label7 id="da11"style="display: none;">${task.lugar}</td>
        </tr>
           `
            });
        })
        .catch((error) => {

        });
}
function use() {
    const tasksContainer62 = document.getElementById("Contiene");
    tasksContainer62.innerHTML = "";
    firebase.database().ref('Administradores').orderByKey().once('value').then(
        function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                tasksContainer62.innerHTML +=
                    `<div id="contendi">
        <a class="label5">Código: <a class="label4">${childSnapshot.val().avanzada}</a> </a>  <br>
        <a class="label5">Nombre: <a  class="label4">${childSnapshot.val().userName}</a> </a>  <br>
      
        <a class="label5">Correo: <a  class="label4">${childSnapshot.val().email}</a> </a>  <br>
        
     </div>`
            });
        });
}
function buscar13() {
    const db = firebase.firestore();
    var inputValue = document.getElementById("buscar6778").value;

    const tasksContainer602 = document.getElementById("table120");
    tasksContainer602.innerHTML = "";
    if (inputValue != "") {
        db.collection("Logs").where("codidd", "==", inputValue).onSnapshot((querySnapshot) => {
            document.getElementById("buscar6778").value = "";
            querySnapshot.forEach((doc) => {
                const task2 = doc.data();
                console.log(doc.data())
                if (task2.lugar == 'Movil') {
                    var dat = "mov";
                } else if (task2.lugar == 'Web') {
                    var dat = "mon";
                }
                tasksContainer602.innerHTML += `
          <tr>
          <td class=label6>${task2.codidd}</td>
          <td class=label7>${task2.fecha1}</td>
          <td class=label7>${task2.accion}</td>
          <td class=label7 id="da112"><img src="img/${dat}.png" width="50px"></td>
          <td class=label7 id="da11"style="display: none;">${task2.lugar}</td>
          </tr>
              `
            });

        });
    } else {
        carga();
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
            title: 'Ingrese Código'
        })
    }
}
function exportTableToExcel(tableID, filename = '') {
    document.getElementById('da1').style.display = 'inline';
    document.getElementById('da11').style.display = 'inline';

    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);


    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        firebase.firestore().collection('Logs').orderBy("fecha1", "desc").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    firebase.firestore().collection('Logs').doc(doc.id).delete();

                });
                carga();
                logs(localStorage.getItem("clave"), "Vacio Logs " + localStorage.getItem("adm") + " en Avanzadas");

                document.getElementById('da1').style.display = 'none';

            })
            .catch((error) => {

            });
        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
        carga();
    }

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
    })

}
