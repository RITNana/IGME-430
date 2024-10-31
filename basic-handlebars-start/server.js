const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {
        'pageHeading' : "Main Page",
        "siteTitle"   : "Lameo Demo"
    });
});

app.get('/other', function (req, res) {
    res.render('other', {
        'pageHeading' : "Other Page",
         "siteTitle"   : "Lameo Demo",
         'colors': ['red', 'green', 'blue'],
         'person': {
            'name' : 'Joe',
            'age': 36
         }
    });
});

app.get('/favorites', function (req, res) {
    res.render('favorites', {
        'pageHeading' : "Favorites",
         "siteTitle"   : "Lameo Demo",
        "favorites": [
            {"name": "Respawn", "url": "https://www.respawn.com/"},
            {"name": "Epic Games", "url": "https://store.epicgames.com/en-US/"},
            {"name": "Bandai Namco Entertainment", "url": "https://www.bandainamcoent.com/games"}
        ]
    });
});

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});
