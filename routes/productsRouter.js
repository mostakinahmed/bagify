const express = require('express');
const router = express.Router();

// Example route for owners
router.get('/', (req, res) => {
    res.send('products route');
});

module.exports = router;