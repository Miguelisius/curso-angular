
export class Person{

    public name: string;
    public address: string ;
    public lastname: string;

    constructor(name: string, lastename:string,address: string){
        this.name = name;
        this.lastname=lastename;
        this.address = address;
    }
}

//export class Heroe extends Person{
//
//    
//
//    constructor(rname:string, age: number){
//        super(rname, "NY");
//    }
//}

export class Heroe {

    //public person: Person;

    constructor(rname:string, age: number, perosn: Person){
        
        //this.person = new Person(rname, "NY");

    }
}


const person = new Person("YO", "Gonzalez" ,"Mdrid");

const ironman = new Person("FER", "Perez","NY");
const her = new Heroe("paco", 22, person);
console.log(ironman.address);
console.log(her);