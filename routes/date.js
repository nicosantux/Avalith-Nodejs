const { Router } = require('express');
const router = Router();

const { getDate } = require('../controllers/date');

router.get('/date', getDate);

module.exports = router;
