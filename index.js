const express = require('express');
const path = require('path');
var favicon = require('serve-favicon');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','images','favicon.png')));

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Soon!',
      subText: `Drop your email address below and we’ll let you know when we launch our site! Brought to you by amazing ladies in Bitcoin.`
    }
    );
});

//router.post('/genre/create', genre_controller.genre_create_post);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
