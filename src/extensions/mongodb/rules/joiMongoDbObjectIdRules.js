const { ObjectId } = require("mongodb");



module.exports = {
    get: function (type)
    {
        return {
            mongoDbObjectId: {
                validate: function (value, helpers)
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
