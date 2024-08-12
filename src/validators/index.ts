import type { Schema } from 'joi';

export function joiSchemaIsValid(schema: Schema, payload: unknown)
{
    const { error } = schema.validate(payload);

    if (error)
    {
        return false;
    }

    return true;
}

export function validateJoiSchema(schema: Schema, payload: unknown)
{
    return new Promise(function (resolve, reject)
    {
        const { value, error } = schema.validate(payload);

        if (error)
        {
            reject(error);
        }

        resolve(value);
    });
}
