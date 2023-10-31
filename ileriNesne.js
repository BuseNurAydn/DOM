const urunServis = {
    ekle : function(){
        console.log(this);
    }
}
urunServis.ekle();
/******************************* */

//Constructor ve Nesne olusturma

function Student (name,yearOfBirth,job){
    this.name= name;
    this.yearOfBirth= yearOfBirth;
    this.job= job;

    this.calculateAge = function(){
        return 2021 - this.yearOfBirth;
    }
}
let buse = new Student("Buse",2001,"student");
let nur =  new Student("Nur",2002,"student");

console.log(buse.name); 
console.log(buse.yearOfBirth); 
console.log(buse.job);
console.log(buse.calculateAge());
console.log("****************")
console.log(nur.name); 
console.log(nur.yearOfBirth); 
console.log(nur.job);
console.log(nur.calculateAge());

/************************************ */

//Prototype

function Person(name,yearOfBirth,job){
    this.name= name;
    this.yearOfBirth= yearOfBirth;
    this.job= job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

let aylin = new Person("Aylin",1999,"engineer");
console.log(aylin.calculateAge());

/************************************* */

//Object.create metodu

let personProto = {

    calculateAge : function(){
         return 2021 - this.yearOfBirth;
    }
}
let eda = Object.create(personProto);
eda.name = "Eda";
eda.yearOfBirth = 2000;
eda.job = "nurse";

let ece = Object.create(personProto,{
    name : {value : "Buse"},
    yearOfBirth : {value : 2009},
    job : {value : "student" }
});

console.log(eda);
console.log(eda.calculateAge());
console.log("********************")
console.log(ece);
console.log(ece.calculateAge());

/************************************* */

