const user = require("../models/user");
const {hashpass} = require("./authsrvice");

async function create_user(req,res) {

    try {
        
        console.log("this is req body " , req.body);
        const {name , email, password , location , skill_offered , skill_request} = req.body;

        const newpass = await hashpass(password);

        const repo = await user.create({name,email,password:newpass,location,skill_request,skill_offered});

        if(!repo){

            res.status(400).json({

                success:false,
                message:"cannot add to db",

            });

        }

        res.status(200).json({

            sucess:true,
            message:"user created successfull y",
            user:repo,

        });

        console.log("created user successfully");


    } catch (error) {
        
        console.error(error);
        console.log("this is the error in catch block of creatte_user ");

        res.status(400).json({

            success:false,
            message:"errror at catch block of create_user "

        });

    }
    
}

module.exports = create_user;