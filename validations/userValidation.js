const zod = require("zod");

const UserInputValidation = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
    age: zod.number()
});

const UserLoginValidation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});

module.exports = {
    UserInputValidation,
    UserLoginValidation
};