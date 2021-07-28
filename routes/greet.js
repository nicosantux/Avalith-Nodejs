const { Router } = require('express');
const router = Router();

const { greetUser } = require('../controllers/greet');

router.post('/greet', greetUser);

module.exports = router;
