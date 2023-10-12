const { Router } = require('express');

const platformsRouter = Router();

const { getPlatformsHandler } = require('../handlers/platformsHandlers');

platformsRouter.get('/', getPlatformsHandler);

module.exports = platformsRouter;