const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3000';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Coming Soon!',
      mainText: 'Ladies in Bitcoin',
      subText: `Drop your email address below and we will let you know when we launch Bitcoin Ladies.
      <br>Brought to you by amazing people`
    }
    );
});

//router.post('/genre/create', genre_controller.genre_create_post);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});