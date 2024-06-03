const express=require("express");
//const fs=require('fs');
//const mongoose=require('mongoose');
//const users=require('./MOCK_DATA.json');



const { connectMongoDb} =require("./conection");
const {logReqRes} =require("./middlewares");
const userRouter=require("./routes/user");


const app=express();
const PORT=8000;


// connection...............
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("Mongo Db Connected!"));


// mongoose
// .connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(() => console.log("MongoDB Connected"))
// .catch((err)=>console.log("Mongo Error", err));

// schema.........
// const userSchema=new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },

//     lastName: {
//         type: String,
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },

//     jobTitle: {
//         type: String,
//     },

//     gender: {
//         type: String,
//     },

// }, { timestamps: true} );


// const User=mongoose.model("user", userSchema);



//middleware--plugin--add form data into body..
app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));
//app.use(express.json({extended: false}));

// app.use((req,res,next)=>{
//     // fs.appendFile("log.txt",
//     // `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}`, (err,data) =>{
//     //     next();
//     // });
// });

// app.use((req,res,next)=>{
//     console.log("hello from middleware 1");
//     req.myUserName="piyushgarg.dev";
//     // to forward request call next function
//     next();
//     // return res.json({mgs: "Hello from middleware 1"});
// });




// app.use((req,res,next)=>{
//     //console.log("hello from middleware 2", req.myUserName);
//     console.log("hello from middleware 2");
//     // db query
//     // credit card info..
//    // req.creditCardNumber='123';
//     // to forward request call next function
//     next();
//     //  return res.end('hey..');
// });



//ROUTES..
// app.get("/users", async(req, res) => {
//     const allDbUsers=await User.find({});
//     const html = `
//         <ul>
//             ${allDbUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}
//         </ul>`;
//     res.send(html);
// });


// rest api.........
// app.get("/api/users", sync(req,res)=>{
//     const allDbUsers=await User.find({});


//     res.setHeader("X-MyName", "Piyush Garg"); //custom header
//     // good practice to add always X to custom headers  
//   // console.log(req.headers);
//     //console.log("I am in route", req.myUserName);
//     return res.json(allDbUsers);
// });
// app.get("/api/users", async (req, res) => {
//     try {
//         const allDbUsers = await User.find({});
//         //res.setHeader("X-MyName", "Piyush Garg"); // Custom header
//         return res.json(allDbUsers);
//     } catch (error) {
//         // Handle any errors that occur during database query or response sending
//         console.error("Error:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });


// dunamic api..
// app
// .route("/api/users/:id")
// .get(async(req,res)=>{
//     // get id
//     //const id=Number(req.params.id);
//     const user=await User.findById(req.params.id);
//     if(!user) return res.status(404).json({error: "user not found"});
//     return res.json(user);
// })
// .patch(async(req,res)=>{
//     // edit user with id..
//     await User.findByIdAndUpdate(req.params.id, { lastName: "Changed"});
//     return res.json({status:"Success"});
// })
// .delete(async(req,res)=>{
//     // delete user with id..
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({status:"Success"});
// });


// post request...............
// app.post("/api/users", async(req,res)=>{
//     // todo: create new user..
//     const body=req.body;
//     if(!body || !body.first_name || !body.last_name ||!body.email || !body.gender || !body.job_title){
//         return res.status(400).json({msg: "All fields are required"});
//     }
    // users.push({...body, id: users.length+1});
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data)=>{
    //     console.log("Body",body);
    //     return res.status(201).json({status:"success", id: users.length});
    // }); 


// const result=await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.job_title
//     });


//     console.log("result", result);

//     return res.status(201).json({msg: "success"});


// });



// // patch request..............
// app.patch("/api/users/:id", (req,res)=>{
//     // todo: edit the user with id...
//     return res.json({status:"pending"});
// });



// // delete request...........
// app.delete("/api/users/:id", (req,res)=>{
//     // todo: delete the user with id...
//     return res.json({status:"pending"});
// });

// routes..
app.use("/api/users", userRouter);
app.listen(PORT, () =>console.log(`Server started at port:${PORT}`));