const user = require("../models/user");
const {compHashPass}= require('./authsrvice');

async function login_user(req,res) {
    

    try {
        
        const {email,password} = req.body;

        const userr = await user.findOne({email:email});

        if(userr){

            const check = await compHashPass(password,userr.password);

            if(!check){

                res.status(401).json({

                    success:false,
                    message:"password is incorrect",

                });

            }else{

                res.status(200).json({

                    success:true,
                    message:"user logged in successfully",
                    user:userr

                });

            }

        }else{

            res.status(401).json({

                success:false,
                message:"user not found",

            });

        }

    } catch (error) {
        
        console.error(error);
        console.log("error in catch bkock of logi user");

    }

}

module.exports = login_user;