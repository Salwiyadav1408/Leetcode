const validator = require("validator");

const validate= (date)=>{

    const mandatoryField= ['firstName', "emailId", 'password'];

    const IsAllowed = mandatoryField.every((k)=> Object.keys(DataTransfer.includes(k)));

    if(!IsAllowed)
        throw new Error("Some Field Missing");
    if(!validator.isEmail(DataTransfer.emailId))
        throw new Error("Invalid Email");
    if(!validator.isStrongPassword(DataTransfer.password))
        throw new Error("Week Password");
}
module.exports = validate;