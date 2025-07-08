


export function whatsmytyme<T>( argument: T ): T{
    return argument;
}


const amIstring = whatsmytyme<string>("Hola mundo");
const amNumber = whatsmytyme<number>(100);
const amIBooolean = whatsmytyme<boolean>(true);


console.log(amIstring.split(' '));
console.log(amIBooolean.valueOf());
console.log(amNumber.toFixed());
