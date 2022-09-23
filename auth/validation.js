const Joi = require('joi');

let resDispatchError=(res)=>{
    let jsonResponse ={
        "isError" : true,
        "message" : "Not valid",
        "data" : {}
    }
    res.send (jsonResponse);
    return false
}

let validation = (req,res,next) =>{
    
    const userSchema = Joi.object({
        name: Joi.string().min(3).max(8).required(), 
        status: Joi.string().min(4).max(200).required(),
        age: Joi.number().min(20).max(31).required()
    });
       
    const result = userSchema.validate(req.body);

    if(result.error){
        console.log(result.error);
        return resDispatchError(res);
    }else{
        return next();
    }
    
}

module.exports = validation;