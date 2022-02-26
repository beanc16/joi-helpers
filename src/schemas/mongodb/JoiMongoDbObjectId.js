const { JoiMongoDb } = require("../../extensions");



// MongoDB ObjectIds are 24 characters long
const JoiMongoDbObjectId = JoiMongoDb.string().objectId();
const JoiMongoDbObjectIdRequired = JoiMongoDbObjectId.required();



module.exports = {
    JoiMongoDbObjectId,
    JoiMongoDbObjectIdRequired,
};
