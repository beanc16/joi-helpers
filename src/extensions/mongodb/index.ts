import Joi from 'joi';
import ObjectIdExtendObjs from './ObjectIdExtendObjs.js';



export const JoiMongoDb = Joi.extend(...ObjectIdExtendObjs);
