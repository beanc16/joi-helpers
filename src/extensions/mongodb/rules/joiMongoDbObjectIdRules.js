const { ObjectId } = require("mongodb");



module.exports = {
    objectId: {
        validate: function (value, helpers)
        {
            if (!ObjectId.isValid(value))
            {
                return helpers.error("string.objectId");
            }

            return value;
        }
    },
};
