const express = require('express');
const router = express.Router();

const loginContoller = require('../controller/login')

router.get('/', loginContoller.add)
router.get('/register', loginContoller.register)
router.post('/register', loginContoller.addRegister)
router.get('/loader', loginContoller.loader)



module.exports = router;