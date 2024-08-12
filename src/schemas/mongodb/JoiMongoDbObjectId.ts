import { JoiMongoDb } from '../../extensions/index.js';



// MongoDB ObjectIds are 24 characters long
export const JoiMongoDbObjectId = JoiMongoDb.string().objectId();
export const JoiMongoDbObjectIdRequired = JoiMongoDbObjectId.required();
