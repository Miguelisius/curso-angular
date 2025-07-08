import { taxcalculator, type Product } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description:'nokia',
        price:100,
    },
    {
        description:'iphone',
        price:100
    }
];

const [total, tax] = taxcalculator({products: shoppingCart,tx:0.15  });






