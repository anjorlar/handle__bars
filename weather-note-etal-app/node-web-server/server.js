require('dotenv').config({ path: 'dev.env' });
const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view-engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send({
        name: `Ade`,
        likes: [
            'reading',
            'football',
            'politics'
        ]
    });
});

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageHeader: 'WELCOME TO THE HOMEPAGE',
        content: `20`
    })
})

app.get('/about', (req, res) => {
    // res.send('<p>ABOUT US</P>')
    res.render('about.hbs', {
        pageTitle: `About Page`,
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: `path not found`
    })
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});