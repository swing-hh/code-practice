"use strict"
var A = 200;
a =  false

var a = 100;
function getName() {
  var b = 10;
}

// var eval = 100; // 严格模式下报错
console.log(a, A);

console.log(typeof 1);
console.log(typeof "1");
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});

var cc;
console.log(cc);
cc = 100;

console.log(dd);
var dd = 100;

console.log(undefined == null);

console.log(Boolean("message"))

console.log(1.00);

console.log(0.1+0.2);
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(10/"abc")

console.log(NaN == NaN)

console.log(Number(false))
console.log(Number(true))
console.log(Number(null))
console.log(Number(undefined))
console.log(Number([10, 100]))
console.log(Number([10]))
console.log(Number(["11"]))
console.log(Number(["1a"]))
console.log(Number({}))
console.log(Number('1.3'))
console.log(Number("false"))
console.log(Number(""))

var a = [1];
console.log(a.toString())

console.log(String(a))