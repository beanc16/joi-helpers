import Joi from 'joi';
import { envsEnum } from './helpers/index.js';
import { envStringRequired } from './envString.js';



export const envsArray = Joi.array()
                            .items(envStringRequired)
                            .min(1)                      // At least one env
                            .max(envsEnum.envs.length);  // No more than all envs

export const envsArrayRequired = envsArray.required();
