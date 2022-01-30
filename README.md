# @beanc16/joi-helpers

Helpers to make [JOI](https://www.npmjs.com/package/joi) validation simpler.

<!-- Badges -->
![npm][npm-version]
![license][npm-license]
![downloads][npm-downloads]



<!-- TODO: Make table of contents after documentation is done
## Table of Contents
-->


## Install
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

```bash
$ npm install @beanc16/joi-helpers
```



## Usage
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



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



## License
[MIT](https://choosealicense.com/licenses/mit/)



<!-- Shield URLs -->
[npm-version]: https://img.shields.io/npm/v/@beanc16/joi-helpers
[npm-license]: https://img.shields.io/npm/l/@beanc16/joi-helpers
[npm-downloads]: https://img.shields.io/npm/dm/@beanc16/joi-helpers