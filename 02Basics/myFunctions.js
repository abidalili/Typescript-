"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5); //7
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
logInUser("abida", "lili@gmail.com", false);
//how to set default value
logInUser("abida", "lili@gmail.com" //so now as a boolean value i dont need to assign any value cz its by default false written on function parameter
);
function singUpUser(name, email, password, isPaid) { }
singUpUser("abida", "abida@gmail.com", 2223, true);
