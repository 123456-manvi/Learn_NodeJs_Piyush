console.log("hey there I am JS..");
// console.log(window);
//console.log(alert("hey"));


// Modules ........................................
// function add(a,b)
// {
//     return a+b;
// }

// console.log(add(2,5));



// import other files in modules.................
const math=require("./math");
// console.log(math(2,4));


// use this math i access the path..
console.log("math value is",math.addFn(2,4));
console.log("math value is:",math.subFn(4,2));



// node directory me jb check krenge jb bina./  name dedenge
// ./ check in current directory..
//ex--const math=require("fs")
// ex--const math=require("./fs")
// fs ,http,crpto--build in package..