const express = require('express');
const router = express.Router();

const loginContoller = require('../controller/login')

router.get('/', loginContoller.add)
router.get('/register', loginContoller.register)



module.exports = router;