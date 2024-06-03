const express=require("express");


const {
    handleGetAllUsers,
     handleGetUserById, 
     handleUpdateUserById,
     handleDeleteUserById,
     handleCreateNewUser
    } = require('../controllers/user');
const router=express.Router();

//ROUTES..



// rest api.........


router.route("/").get( handleGetAllUsers).post( handleCreateNewUser);
 

// dunamic api..
router
.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


// post request...............
// router.post("/", );



module.exports=router;


