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
    const myIndex = 3;
    return products[4];
};
