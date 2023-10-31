//Prototype Tabanlı Miras Alma

function Person(name,yearOfBirth,job){
    this.name= name;
    this.yearOfBirth= yearOfBirth;
    this.job= job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

function Teacher(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
}

//let buse = new Teacher("Buse",2000,"teacher","english");
//console.log(buse);

//console.log(buse.calculateAge()); //HATA VERİRR !!!!! . Hatayı engellemek için;

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

let buse = new Teacher("Buse",2000,"teacher","english");
console.log(buse);
console.log(buse.calculateAge());

/****************************************** */















//Immediate Fonksiyonlar