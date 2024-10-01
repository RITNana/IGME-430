const express = require('express');

// create router instance 
const router = express.Router();

// attach route
router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.get('/bye', (req, res) => {
    res.send('Goodbye!')
})

// router.get('/helloJSON', (req, res) => {
//     res.status(200).json({message: "Hello There!"})
// })

// router.get('/timeJSON', (req, res) => {
//     res.status(200).json({time: new Date().toLocaleDateString()})
// })

module.exports = router;