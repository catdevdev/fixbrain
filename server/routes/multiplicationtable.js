const express = require('express');
const { getmultiplicationtest, getmultiplicationresult } = require('../controllers/multiplicationtable');

// Include other ressource routers

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/test').post(protect, getmultiplicationtest);
router.route('/result').post(protect, getmultiplicationresult);

// router
//   .route('/result')
//   .post()

module.exports = router;
