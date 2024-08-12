import Joi from 'joi';



export const dataObj = Joi.object()
.max(100)
.pattern(
    Joi.string().max(100),                                  // Keys
    Joi.alternatives().try(                                 // Values
        Joi.string()
            .min(1)
            .max(500),
        Joi.number()
           /* eslint-disable-next-line @typescript-eslint/no-loss-of-precision */
           .min(-999999999999999999999999999999)            // 30 digit
           /* eslint-disable-next-line @typescript-eslint/no-loss-of-precision */
           .max(999999999999999999999999999999),            // 30 digit
        Joi.boolean(),
        Joi.date(),
    ),
);

export const dataObjRequired = dataObj.required();
