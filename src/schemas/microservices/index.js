const envStrings = require("./envString");
const envsArrays = require("./envsArray");
const dataObjs = require("./dataObj");



module.exports = {
    ...envStrings,
    ...envsArrays,
    ...dataObjs,
};
