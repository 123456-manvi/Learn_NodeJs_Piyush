const mongoose=require('mongoose');

// connection...............
async function connectMongoDb(url){
    return mongoose.connect(url);
    // 'mongodb://127.0.0.1:27017/youtube-app-1'
// .then(() => console.log("MongoDB Connected"))
// .catch((err)=>console.log("Mongo Error", err));
}

module.exports={
    connectMongoDb,
};