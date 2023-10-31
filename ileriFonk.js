function selam(){
    console.log("Merhaba");
}
selam();

/******************************* */

var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}
selamFonksiyonu();

/******************************** */

const selamFonksiyonu2 = () => {
    console.log("Merhaba2");
}
selamFonksiyonu2();

/******************************* */

const selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
}
selamFonksiyonu3("Merhaba Dünya")

/****************************** */

const selamFonksiyonu4 = (mesaj,mesaj2) => {
    console.log(mesaj);
    console.log(mesaj2);
}
selamFonksiyonu4("Merhaba Dünya", "JavaScript");

/******************************** */

var topla = (sayi1,sayi2) => {
    return sayi1 + sayi2;
}
let toplam = topla(10,10);
console.log(toplam);

/******************************* */