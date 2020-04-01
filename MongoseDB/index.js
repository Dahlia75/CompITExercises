const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
//Set up default mongoose connection
//const mongoDB = 'mongodb://localhost:27017/comics';
const mongoDB = 'mongodb://Node-Example:Node-Example123@cluster0-shard-00-00-h0p3y.mongodb.net:27017,cluster0-shard-00-01-h0p3y.mongodb.net:27017,cluster0-shard-00-02-h0p3y.mongodb.net:27017/comics?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});
//Mongoose Model (like Declare the Schemah)
const Superheroe = mongoose.model('Superheroe', { 
  name: String,
  image: String
});

//MongoD implementation, will be removed soon
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';

//Add fs for Deleting the image on public/img/superheroes folder when we delete the record
const fs = require('fs');

//const bodyParser = require('body-parser');
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

//This is what you use to have multipart form data
const multer = require('multer');
// SET STORAGE for where saving images
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/superheroes')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage });

//Setting up pug as template engine
//using the convention to have all views in views folder
app.set('view engine', 'pug');

//Declare the static server where we serving the static content from
app.use(express.static('public'));

//Get Home page - Entry point
app.get('/', async(req, res) => {
  const documents = await Superheroe.find().exec();
  const indexVariables = {
      pageTitle: "First page of our app",
      superheroes: documents
  };

  res.render('index', { variables: indexVariables });
});

//Get Superheroe details page
app.get('/superheroes/:id', async(req, res) => {
  const selectedId = req.params.id;
  const document = await Superheroe.findById(selectedId).exec();

  res.render('superheroe', { superheroe: document });
});

//Create Superhero
app.get('/create', (req, res) => {
  res.render('create');
});

//Update Superhero
app.get('/update/:id', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db('comics');
    const collection = db.collection('superheroes');
    const selectedId = req.params.id;
    
    collection.find({'_id': ObjectID(selectedId)}).toArray((error, documents) => {
      client.close();
      res.render('update', { superheroe: documents[0]});
    });
  });
});

//Delete Supeerheroe
app.get('/delete/:id', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db('comics');
    const collection = db.collection('superheroes');
    const idToDelete = req.params.id;
    
    collection.find({'_id': ObjectID(idToDelete)}).toArray((error, documents) => {
      const dir = __dirname + "/public/img/superheroes/" + documents[0].image;
      if (fs.existsSync(dir)) {
          fs.unlink(dir, (err) => {
          if (err) throw err;
          console.log('successfully deleted images from folder superheroes');
        });
      }
    });
    collection.deleteOne({"_id": ObjectID(idToDelete)});
    client.close();
    res.redirect('/');
  });
});

//Create new Superheroe
app.post('/superheros', upload.single('file'), (req, res) => {
  const newSuperhero = {
    name: req.body.superhero.toUpperCase(),
    image: req.file.filename
  }

  //Use Mongoose
  const superheroe = new Superheroe(newSuperhero);
  superheroe.save();
  res.redirect('/');
});

//Save the Update Superhero
app.post('/update/:id', upload.single('file'), (req, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db('comics');
    const collection = db.collection('superheroes');
    const selectedId = req.params.id;
    
    let filter = { "_id": ObjectID(selectedId)};
    let updateObject = {
      "name": req.body.superhero.toUpperCase(),
    };

    if(req.file){
      updateObject.image = req.file.fieldname
      collection.find({'_id': ObjectID(selectedId)}).toArray((error, documents) => {
        const dir = __dirname + "/public/img/superheroes/" + documents[0].image;
        if (fs.existsSync(dir)) {
            fs.unlink(dir, (err) => {
            if (err) throw err;
            console.log('successfully deleted images from folder superheroes');
          });
        }
      });
    };

    const update = { $set: updateObject };

    collection.updateOne(filter, update);
    client.close();
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});