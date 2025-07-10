export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1: Passenger={
    name: "MIKE",
}

const passenger2: Passenger={
    name:"PIT",
    children:['THEO','JESUS'],
}

const printChild = (passenger: Passenger): number=>{

    if(!passenger.children) return 0;

    const hoymanypassenger = passenger.children!.length ;

    console.log(passenger.name,hoymanypassenger);

    return hoymanypassenger;
}

printChild(passenger2);