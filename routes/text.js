const { Router } = require('express');
const router = Router();

const { readText } = require('../controllers/text');

router.get('/text', readText);

module.exports = router;
