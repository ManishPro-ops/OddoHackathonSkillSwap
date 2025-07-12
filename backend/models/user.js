const mongoose = require('mongoose');

const skill_offered = new mongoose.Schema({

    skill_name:{

        type:String,

    }

});

const skill_request = new mongoose.Schema({

    skill_name:{

        type:String,

    }

});

const user = new mongoose.Schema({

    name:{

        type:String,
        required:true

    },
    email:{

        type:String,
        required:true,

    },
    password:{

        type:String,
        required:true,

    },
    location:{

        type:String,
        required:true,
        
    },
    skill_offered:[skill_offered],
    skill_request:[skill_request],

});

module.exports = mongoose.model("user",user);