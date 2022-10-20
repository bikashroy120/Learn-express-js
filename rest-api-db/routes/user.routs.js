const express = require('express');
const { allGetUser } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', allGetUser)


module.exports = router;