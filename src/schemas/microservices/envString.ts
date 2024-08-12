import Joi from 'joi';
import { envsEnum } from './helpers/index.js';



export const envString = Joi.string().valid(...envsEnum.envs);
export const envStringRequired = envString.required();
