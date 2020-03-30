const express = require('express');
const app = express();
const port = 3000;

var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/comics';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
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
app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    const db = client.db('comics');
    const collection = db.collection('superheroes');
  
    collection.find({}).toArray((error, documents) => {
      // console.log(documents);
      client.close();
      res.render('index', { superheroes: documents });
    });
  });
});

//Get Superheroe details page
app.get('/superheroes/:id', (req, res) => {
  
  // let selectedSuperheroe = superheroes.filter(superheroe => {
    //   return superheroe.id === +selectedId;
    // });
    
    // selectedSuperheroe = selectedSuperheroe[0];
    
    // res.render('superheroe', { superheroe: selectedSuperheroe });
    
  MongoClient.connect(url, function(err, client) {
    const db = client.db('comics');
    const collection = db.collection('superheroes');
    const selectedId = req.params.id;
    //console.log("selectedId: ", req.params.id, selectedId);
      
    // collection.find({}).toArray((error, documents) => {
        
    //   let selectedSuperhero = documents.filter(superhero => {
    //     console.log("superhero._id: ", superhero._id);
    //     return superhero._id == selectedId;
    //   });
    //   client.close();
    //   console.log("Documents: ", selectedSuperhero);
    //   res.render('superheroe', { superheroe: selectedSuperhero[0] });
    // });
    collection.find({"_id": ObjectID(selectedId)}).toArray((error, documents) => {
      client.close();
      console.log("=======", documents);
      res.render('superheroe', { superheroe: documents[0] });
		});
  });
});

//Before using multer for loading files
// app.post('/superheros', urlencodedParser, (req, res) => {
//   const newId = superheroes[superheroes.length - 1].id + 1;
//   const newSuperhero = {
//     id: newId,
//     name: req.body.superhero.toUpperCase(),
//     image: 'ant-man_marvel_silo.png'
//   }

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
  //const newId = superheroes[superheroes.length - 1].id + 1;
  const newSuperhero = {
    //id: newId,
    name: req.body.superhero.toUpperCase(),
    image: req.file.filename
  }

  //Use Mongoose
  const superheroe = new Superheroe(newSuperhero);
  superheroe.save();
  res.redirect('/');

  //Replace push with mongoDB
  //superheroes.push(newSuperhero);

  // MongoClient.connect(url, function(err, client) {
  //   const db = client.db('comics');
  //   const collection = db.collection('superheroes');
    
  //   collection.insertOne(newSuperhero)
    
  //   client.close();
  //   res.redirect('/');
  // });
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