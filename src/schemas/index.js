const JoiRequired = require("./JoiRequired");
const MongoDbSchemas = require("./mongodb");



module.exports = {
    JoiRequired,
    ...MongoDbSchemas,
};
