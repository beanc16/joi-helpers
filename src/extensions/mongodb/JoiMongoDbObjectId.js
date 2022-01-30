const Joi = require("joi");
const { objectId: objectIdRules } = require("./rules");



const joiObjectIdMsg = "{{#label}} must be a valid MongoDb ObjectId";

const JoiMongoDbObjectId = Joi.extend(
// String
{
    type: "string",
    base: Joi.string(),
    messages: {
        "string.objectId": joiObjectIdMsg,
    },
    rules: objectIdRules,
},

// Number
{
    type: "number",
    base: Joi.number(),
    messages: {
        "number.objectId": joiObjectIdMsg,
    },
    rules: objectIdRules,
});



module.exports = JoiMongoDbObjectId;
