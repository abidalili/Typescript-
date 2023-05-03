"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3);
//shortcut
function identityFour(val) {
    return val;
}
identityFour("hello");
// identityFour<Bootle>({});
function getSearchProducts(products) {
    //do some database operation
    const myIndex = 3;
    return products[myIndex];
}
//arrow function
const getSearchProducts2 = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
