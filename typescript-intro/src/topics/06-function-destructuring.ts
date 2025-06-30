
interface Product{
    description: string;
    price: number;

}

const phone: Product = {
    description:'Iphone 16',
    price:100
}

const tablet: Product = {
    description:'Ipad Pro',
    price:200
}

interface taxcalculationOptions{
    tx:number;
    products: Product[],
}

function taxcalculator( options: taxcalculationOptions ):[number, number]{
    const {tx, products} = options;
    
    let total = 0;
    products.forEach(({price}) =>{
        total += price;
    });
    return [total, total*tx];

}



const ShoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxcalculator({
    products:ShoppingCart,
    tx: tax
});

const [total,taxtotal]=taxcalculator({products:ShoppingCart, tx: 0.15});

console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);

//desestructuracion



export {};