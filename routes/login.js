const express = require('express');
const router = express.Router();

const loginContoller = require('../controller/login')

router.get('/', loginContoller.add)


module.exports = router;