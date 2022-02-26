const JoiRequired = require("./JoiRequired");
const MongoDbSchemas = require("./mongodb");
const MicroserviceSchemas = require("./microservices");



module.exports = {
    JoiRequired,
    ...MongoDbSchemas,
    ...MicroserviceSchemas,
};
