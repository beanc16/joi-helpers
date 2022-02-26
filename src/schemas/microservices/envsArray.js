const Joi = require("joi");
const { envsEnum } = require("./helpers");
const { envStringRequired } = require("./envString");



const envsArray = Joi.array()
.items(envStringRequired)
.min(1)                                   // At least one env
.max(envsEnum.envs.length);               // No more than all envs

const envsArrayRequired = envsArray.required();



module.exports = {
    envsArray,
    envsArrayRequired,
};
