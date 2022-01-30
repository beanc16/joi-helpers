const Joi = require("joi");
const ObjectIdExtendObjs = require("./ObjectIdExtendObjs");



let JoiMongoDb = Joi;
for (const obj of ObjectIdExtendObjs)
{
    JoiMongoDb = JoiMongoDb.extend(obj);
}





module.exports = {
    JoiMongoDb,
};
