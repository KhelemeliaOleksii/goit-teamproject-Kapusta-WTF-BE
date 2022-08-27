const { Router } = require('express');
const exampleController = require('../../../controllers/exapmleControllers');
const exampleMiddleware = require('../../../middlewares/exampleMiddleware')

const router = Router();

router.get('/example',
    exampleMiddleware.middlewareTest,
    exampleController.controllerTest
)

module.exports = router;