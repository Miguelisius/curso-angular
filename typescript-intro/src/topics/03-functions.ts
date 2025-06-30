
function addNumber(a: number, b: number) {
    return a + b;
}

const addNumberArrow = (a:number, b:number): string => {
    return `${ a + b }`;
}

function multiply(Firstnumber:number, Secondnumber?:number, base:number=2){
    return Firstnumber*base;
}


//const result: number = addNumber(1, 2);
//const resultArrow: string = addNumberArrow(1, 2);
//const resultmultiply: number = multiply(5);

//console.log({result});
//console.log({resultArrow});
//console.log({resultmultiply});

interface Character{
    name : String;
    hp:number;
    showHP: () => void;
}


const healCharacter = (character:Character, amount:number)=>{
    
    character.hp += amount;
}

const Strider: Character ={
    name: 'Strider',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(Strider, 20);
healCharacter(Strider, 30);
Strider.showHP();

export{};