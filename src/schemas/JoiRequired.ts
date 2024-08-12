import Joi from 'joi';



export const JoiRequired = Joi.defaults(function (schema: Joi.Schema)
{
    return schema.required();
});
