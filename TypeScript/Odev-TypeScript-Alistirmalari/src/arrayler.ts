// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.


// Kodu buraya yazalım...

let ages: number[] = [];


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.


// Kodu buraya yazalım...

let gameBoard: string[] = [];


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}


// Kodu buraya yazalım...

type Product = {
    name: string;
    price: number;
}

const Product1 = {
    name: "coffee mug",
    price: 11.50
}

const Product2 = {
    name: "tea mug",
    price: 15.40
}

console.log(Product1);

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.


// Kodu buraya yazalım...

function getTotal(product1: Product, product2: Product) {
    return product1.price + product2.price;
}

console.log(getTotal(Product1, Product2));


