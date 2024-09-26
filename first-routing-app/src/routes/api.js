const express = require('express');

const router = express.Router();

router.get('/helloJSON', (req, res) => {
    res.status(200).json({message: "Hello There!"})
})

router.get('/timeJSON', (req, res) => {
    res.status(200).json({time: new Date().toLocaleDateString()})
})
module.exports = router