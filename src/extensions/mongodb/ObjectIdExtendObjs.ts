import Joi from 'joi';
import { joiMongoDbObjectIdRules as objectIdRules } from './rules/index.js';



const joiObjectIdMsg = "{{#label}} must be a valid MongoDb ObjectId";

const ObjectIdExtendObjs: Joi.Extension[] = [
    // String
    {
        type: "string",
        base: Joi.string(),
        messages: {
            "string.objectId": joiObjectIdMsg,
        },
        rules: objectIdRules.get("string"),
    },

    // Number
    {
        type: "number",
        base: Joi.number(),
        messages: {
            "number.objectId": joiObjectIdMsg,
        },
        rules: objectIdRules.get("number"),
    }
];



export default ObjectIdExtendObjs;
