class Personel{

    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }
    kaydet(){
        console.log("Personel kaydedildi..." + this.ad);
    }
}
const personel1 = new Personel("Buse", "Aydın");
personel1.kaydet();
