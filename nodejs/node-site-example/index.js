const express = require('express');
const bodyParser = require('body-parser');
//This is what you use to have multipart form data
const multer = require('multer');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/superheroes')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
})

//Setting up pug as template engine
//using the convention to have all views in views folder
app.set('view engine', 'pug');
app.use(express.static('public'));

const upload = multer({ storage: storage });

const superheroes = [
  { id: 1, name: 'SPIDER-MAN', image: 'spiderman.jpg' },
  { id: 2, name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpg' },
  { id: 3, name: 'HULK', image: 'hulk.jpg' },
  { id: 4, name: 'THOR', image: 'thor.jpg' },
  { id: 5, name: 'IRON MAN', image: 'ironman.jpg' },
  { id: 6, name: 'DAREDEVIL', image: 'daredevil.jpg' },
  { id: 7, name: 'BLACK WIDOW', image: 'blackwidow.jpg' },
  { id: 8, name: 'CAPTAIN AMERICA', image: 'captanamerica.jpg' },
  { id: 9, name: 'WOLVERINE', image: 'wolverine.jpg' },
];

app.get('/', (req, res) => {
  res.render('index', { superheroes: superheroes });
});

app.get('/superheroes/:id', (req, res) => {
  const selectedId = req.params.id;

  let selectedSuperheroe = superheroes.filter(superheroe => {
    return superheroe.id === +selectedId;
  });

  selectedSuperheroe = selectedSuperheroe[0];

  res.render('superheroe', { superheroe: selectedSuperheroe });
});

//Before using multer for loading files
// app.post('/superheros', urlencodedParser, (req, res) => {
//   const newId = superheroes[superheroes.length - 1].id + 1;
//   const newSuperhero = {
//     id: newId,
//     name: req.body.superhero.toUpperCase(),
//     image: 'ant-man_marvel_silo.png'
//   }

app.post('/superheros', upload.single('file'), (req, res) => {
  const newId = superheroes[superheroes.length - 1].id + 1;
  const newSuperhero = {
    id: newId,
    name: req.body.superhero.toUpperCase(),
    image: req.file.filename
  }

  superheroes.push(newSuperhero);

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});