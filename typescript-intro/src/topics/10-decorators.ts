function classDecorator<T extends {new (...args:any[]):{} }>(constructor:T){
    return class extends constructor{
        newProperty = 'MyProperty';
        hello = 'override';
    }
}


@classDecorator
class SuperClass {
    public myproperty: string = 'Abcd123';
    print(){
        console.log('Hola Mundo');
    }

}

console.log(SuperClass);

const myclass = new SuperClass();
console.log(myclass);