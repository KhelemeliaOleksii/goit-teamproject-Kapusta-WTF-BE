const asyncHandler = require("express-async-handler")

const middleware = asyncHandler(async (req, res, next) => {
    console.log("I am example of middleware");
    next();
})

module.exports = middleware;