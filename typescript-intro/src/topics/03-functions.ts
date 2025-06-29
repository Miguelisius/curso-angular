
function addNumber(a: number, b: number) {
    return a + b;
}

const result: number = addNumber(1, 2);

console.log({result});

const addNumberArrow = (a:number, b:number): string => {
    return `${ a + b }`;
}

const reultArrow: string = addNumberArrow(1, 2);
console.log({reultArrow});

function multiply(Firstnumber:number, Secondnumber?:number, base:number=2){
    return Firstnumber*base;
}

const resultmultiply: number = multiply(5);
console.log({resultmultiply});

export{};