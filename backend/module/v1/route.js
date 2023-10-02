const express     = require('express');
const router      = express.Router();

const authRoute     = require('./userAuth/authRoute');
const productRoute  = require('./product/productRoute')

router.use('/auth', authRoute);
router.use('/product', productRoute );

module.exports = router;