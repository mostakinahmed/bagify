const express = require('express');
const router = express.Router();

// Example route for owners
router.get('/', (req, res) => {
    res.send('Owners route');
});

module.exports = router;