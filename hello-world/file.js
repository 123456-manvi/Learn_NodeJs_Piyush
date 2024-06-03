const fs=require("fs");
const os=require("os");

//sync...
//fs.writeFileSync("./test.txt","hello world");


//Async--pass a fun call for error..
//fs.writeFile("./test.txt", "hello world Async..", (err)=>{});



// read file content..........
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);



// without sync file...........
// fs.readFile("./contacts.txt", "utf-8", (err,result) =>{
//     if(err)
//     {
//         console.log("Error",err);
//     }

//     else{
//         console.log(result);
//     }
// })




// now add file data one by one serially...
//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`);

// // copy file............
// fs.cpSync("./test.txt", "./copy.txt");


// // delete file...........
// fs.unlinkSync("./copy.txt");


// // statistic file...
// console.log(fs.statSync("./test.txt"));
// // make folder in directory...
// //fs.mkdirSync("my-docs");

// fs.mkdirSync("my-docss/a/b", {recursive: true});



// non-blocking...............
//console.log("1");
fs.readFile("contacts.txt", "utf-8", (err,result)=>{
    console.log(result);
});

//console.log("2");




// note--->default thread pool size=4
// max? -8 cpu core--8 tk hum max thread le ja skte h..

console.log(os.cpus().length);