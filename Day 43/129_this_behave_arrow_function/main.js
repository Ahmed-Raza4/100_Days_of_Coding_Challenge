/*Question 129: Explain how this behaves differently
in arrow functions compared to traditional functions.

Explain & TIP: In traditional functions, this refers
to the object that called the function, which can vary
depending on the context. In arrow functions, this is
lexically bound, meaning it uses this from the code that
contains the arrow function.*/
var _this = this;
var traditionalVsArrow = {
    value: "traditionalVsArrow Value",
    traditionalFunction: function () {
        console.log("Traditional Function: " + this.value);
    },
    arrowFunction: function () {
        console.log("Arrow Function: " + _this.value);
    }
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
