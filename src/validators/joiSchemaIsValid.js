function joiSchemaIsValid(schema, payload)
{
    const { error } = schema.validate(payload);

    if (error)
    {
        return false;
    }

    return true;
}



module.exports = joiSchemaIsValid;
