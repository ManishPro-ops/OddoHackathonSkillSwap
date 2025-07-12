const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.hashpass = async (password) => {

    return await bcrypt.hash(password,10);

};

exports.compHashPass = async (plainPassword,hassedPassword) => {

    return await bcrypt.compare(plainPassword,hassedPassword);

};

exports.gen_token = ({id}) => {

    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'60s'});

}