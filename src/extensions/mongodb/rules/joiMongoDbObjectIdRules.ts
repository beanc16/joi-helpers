import { ObjectId } from 'mongodb';



type ObjectIdValue = string | number | ObjectId | Buffer | Uint8Array;

export default {
    get: function (type: string)
    {
        return {
            objectId: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                validate: function (value: ObjectIdValue, helpers: any) // TODO: Type helpers better later
                {
                    if (!ObjectId.isValid(value))
                    {
                        return helpers.error(`${type}.objectId`);
                    }

                    return value;
                }
            },
        };
    }
};
