//const http=require("http");
// const fs=require("fs");
// const url=require("url")


// Express--code small clean modular..
const express=require("express");

 const app=express();


// app-handler function..
// use express isne hmare liye pura myhandler k function likh diya
app.get('/', (req,res)=>{
    return res.send("Home Page");
});



app.get('/about', (req,res)=>{
    // write query..http://localhost:8000/about?name=piyush&age=23
   // return res.send("hello from about page.." + 'hey' + req.query.name + 'you are' + req.query.age);
//    or..
return res.send(`hello ${req.query.name}`);
});



app.get("/profile", (req,res)=>{
    return res.end("Profile Page");
})




// function myHandler(req,res){
        
// }
// it check in node node modules, dependencies if present return 
// if not found search in self package--fs,hhtp


// function myHandler(req,res)
// {

//     if(req.url === "/favicon.ico") return res.end();
//     // arrow fun res create req,res

//     // create log  for incoming request.......
//     const log=`${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//     const myUrl=url.parse(req.url, true);
//     //console.log(myUrl);



//     fs.appendFile("log.txt",log,(err,data)=>{
//         //res.end("hello from server again..");
//         // switch(req.url)
//         switch(myUrl.pathname)
//         {
//             case "/":
//                 if(req.method==="GET")
//                 res.end("Home page..");
//                 break;

//                 case "/about":
//                     // const qp=res.end("I am piyush garg");
//                     // break;

//                     const username=myUrl.query.myname;
//                     res.end(`Hi, ${username}`);
//                     break;


//                     case "/search":
//                         const search=myUrl.query.search_query;
//                         res.end("here are your results for" + search);


//                         case "/signup":
//                             if(req.method==='GET')
//                             res.end("This is a signup form..");

//                             else if(req.method==="POST")
//                             {
//                                 // db query
//                                 res.end("Success");
//                             }

//                     default:
//                         res.end("404");
//                         break;



//                         // get post..
                        
//         }
//     });
// }



// through express direct call..
app.listen(8000, () => console.log("Server started.."));

// const myServer=http.createServer(app);


// // listen port..
// myServer.listen(8000, ()=> console.log("server started"));








// talking about Version of Express.....
// 4.18.3
// 1 part-->4
// 2 part-->18
// 3 part-->2

// 3 part-->last part--minor fixes (optional)
// latest-->4.18.2


// 2 part-->Recommended bug fix(security check)
// latest--4.19.1



// 3 major release--Major/Breaking Update--means u are not update

// ^--means compatible with version 
// express=^4.18.2
// 4th version 

// 4.18.2 | 4.18.2-> <5.0.0
// isme pehle wale 4 ko lock kar do and uske baad k update karo..to ispe koi effect nhi padega..

// ^4.17.9
// ^4.18.1
// ^4.18.2
// 4.18.4
// 5.1.0

// ^-Install all Recommended and Minor fixes Automatically........
// here 2 is--minor fix jisko change krte jao..

// ~4.18.4
// 4.19.1 --no...