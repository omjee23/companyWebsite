const {userModel} = require('../model/user.model');



const registerUser = async( req , res) => {
    try {
        const data = new userModel(req.body);
        const userObj = await data.save();
        res.status(200).send({success:true, message: "Request submit successfully"});
    } catch (error) {
        if(error.code === 11000){
           return res.status(500).send({success:false, message : "You allready Responed "});
        }
        const errorMessages = error.errors;
        const messages = Object.values(errorMessages).map(err => err.message);
        console.log(messages, "rajuu");
        res.status(500).send({ success: false, message: messages }); 
    }
};

module.exports = {registerUser};