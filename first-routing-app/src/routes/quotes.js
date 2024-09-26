const express = require('express');
const router = express.Router();

// just 3 quotes for now
const data = [{
  "id": "4c951b60-1f90-41e7-a913-c1f454ff4c6e",
  "author": "Oscar Wilde",
  "content": "Be yourself; everyone else is already taken."
  },
  {
  "id": "4c6217c3-c6e5-460b-8f8f-0df64ad6fef2",
  "author": "Mark Twain",
  "content": "If you tell the truth, you don't have to remember anything."
  },
  {
  "id": "6e35a396-c108-4f72-8673-521aa9a3c7f6",
  "author": "Elbert Hubbard",
  "content": "A friend is someone who knows all about you and still loves you.",
  }
];

router.get('/', (req, res)=> {
  res.json(data);
});

router.get("/random", (req, res) => {
    const quote = data[Math.floor(Math.random() * data.length)];
    res.json(quote)
});

router.get("/recent", (req, res) => {
    const quote = data[data.length - 1]
    res.json(quote)
})


module.exports = router;
