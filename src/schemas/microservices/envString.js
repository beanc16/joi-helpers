const Joi = require("joi");
const { envsEnum } = require("./helpers");



const envString = Joi.string().valid(...envsEnum.envs);
const envStringRequired = envString.required();



module.exports = {
    envString,
    envStringRequired,
};
