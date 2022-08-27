const asyncHandler = require('express-async-handler')
const serviseExample = require('../../services/example');


const controller = asyncHandler(async (req, res) => {

    const result = await serviseExample.test();
    if (!result) {
        res.status(404);
        throw new Error("error message");
    }
    res.status(200)
        .json({
            message: "Success",
            code: 200,
            data: {
                result,
            }
        })
})

module.exports = controller;