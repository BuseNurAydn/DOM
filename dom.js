//document.getElementById("bio").innerHTML= "Buse Nur Aydin : 2001"

/**************************************************   */

//ID'si mesaj olanın içeriğini ID'si intro olanı yazmak istersek;
var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;

/**************************************************** */

//Listelenen şehirleri sırasıyla alert() ile gsterelim;

var tumListeler = document.getElementsByTagName("ul");

var sehirler = tumListeler[0]; // zaten bir tane listemiz var o da şehirler listesi, eğer çok listemiz olsaydı da zaten 0. indexteydi

var tumElemanlar = sehirler.getElementsByTagName("li");

for ( var i=0 ; i< tumElemanlar.length; i++) {
    alert(tumElemanlar[i].innerHTML);
}

/****************************************** */

//getElementsByName Kullanımı

var name1 = document.getElementsByName("musteriAdi");
alert(name1[0].value);

/******************************************* */

//AddEventListener Kullanımı

var buse1 = document.getElementById("buse");
buse1.addEventListener("click",rengiDegistir);
function rengiDegistir(){
    document.getElementById("div1").style.color= "red";

    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value= "Derin";
}

/******************************************* */

//Nodlarla Çalışmak

var node = document.getElementById("agac");
alert(node.childNodes[0].nodeValue);   //Ağaç Değeri

//Element Ekleme

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba HTML")
baslik.appendChild(node);  //Bağlamak için

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2);

//Element Silme 
alert("P2 siliniyor...")
div1.removeChild(p2);


