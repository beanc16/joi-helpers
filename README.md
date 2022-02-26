# @beanc16/joi-helpers

Helpers to make [JOI](https://www.npmjs.com/package/joi) validation simpler.

<!-- Badges -->
![npm][npm-version]
![license][npm-license]
![downloads][npm-downloads]



## Table of Contents
- [@beanc16/joi-helpers](#beanc16joi-helpers)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Basic](#basic)
    - [MongoDB](#mongodb)
    - [Microservices](#microservices)
  - [Contributing](#contributing)
  - [License](#license)


## Install
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

```bash
$ npm install @beanc16/joi-helpers
```



## Usage

### Basic
```js
const { JoiRequired, validateJoiSchema } = require("@beanc16/joi-helpers");

const payload = {
    id: 1,
    name: "Example",
};

/*
The following schema is equivalent to:
const mySchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
}).required();
*/
const mySchema = JoiRequired.object({
    id: JoiRequired.number(),
    name: JoiRequired.string(),
});

// Logs: { id: 1, name: "Example" }
validateJoiSchema(mySchema, payload)
.then((value) =>
{
    console.log(value);
})
.catch((error) =>
{
    console.log(error);
});
```


### MongoDB
```js
const {
    JoiMongoDbObjectId,
    JoiMongoDbObjectIdRequired,
    JoiMongoDb,
    validateJoiSchema,
} = require("@beanc16/joi-helpers");

const payload = getSomeMongoDbObjectId();

/*
The following schema is the equivalent of running:
const { ObjectId } = require("mongodb");
const result = ObjectId.isValid(payload);

if (result)
{
    console.log(value);
}
else
{
    console.log(error);
}
*/
const mySchema = JoiMongoDbObjectId();

validateJoiSchema(mySchema, payload)
.then((value) =>
{
    console.log(value);
})
.catch((error) =>
{
    console.log(error);
});


// const JoiMongoDbObjectId = JoiMongoDb.string().objectId();
// const JoiMongoDbObjectIdRequired = JoiMongoDbObjectId().required();

/*
Instead of JoiMongoDb.string().objectId(), you can also do:
const schema = JoiMongoDb.number().objectId();
*/
```


### Microservices
```js
// Common helpers for microservices I make

const Joi = require("joi");
const {
    envString,
    envStringRequired,
    envsArray,
    envsArrayRequired,
    dataObj,
    dataObjRequired,
} = require("@beanc16/joi-helpers");


/*
const envsEnum = {
    "envs": [
        "dev",
        "staging",
        "prod",
    ],
};

const envString = Joi.string().valid(...envsEnum.envs);
const envStringRequired = envString.required();


const envsArray = Joi.array()
                     .items(envStringRequired)
                     .min(1)                      // At least one env
                     .max(envsEnum.envs.length);  // No more than all envs

const envsArrayRequired = envsArray.required();


const dataObj = Joi.object()
.max(100)
.pattern(
    Joi.string().max(100),                                  // Keys
    Joi.alternatives().try(                                 // Values
        Joi.string()
           .min(1)
           .max(500),
        Joi.number()
           .min(-999999999999999999999999999999)            // 30 digit
           .max(999999999999999999999999999999),            // 30 digit
        Joi.boolean(),
        Joi.date(),
    ),
)

const dataObjRequired = dataObj.required();;
*/
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



## License
[MIT](https://choosealicense.com/licenses/mit/)



<!-- Shield URLs -->
[npm-version]: https://img.shields.io/npm/v/@beanc16/joi-helpers
[npm-license]: https://img.shields.io/npm/l/@beanc16/joi-helpers
[npm-downloads]: https://img.shields.io/npm/dm/@beanc16/joi-helpers