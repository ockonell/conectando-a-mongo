/*'use strict'
const mongo = require('mongoose').MongoClient;
mongo.Promise = global.Promise;
mongo.connect('mongodb//:localhost:27017/tienda', { useNewUrlParser: true }).then(
    ()=>{console.log('Conexion Realizada a la BD tienda.')}
).catch(err => console.log(err));

npm install express --save
npm install body-parser --save
npm install mongoose --save
npm install nodemon --save-dev <- falto instalar esto
npm install mongodb --save
npm install ejs 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://mongodb//:localhost:27017/tienda";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("tienda").collection("producto");
  // perform actions on the collection object
  client.close();
});*/
// CONECCION CON CALLBACK
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); 
// Connection URL
const url = 'mongodb://localhost:27017'; 
// Database Name
const dbName = 'tienda'; 
// Use connect method to connect to the server
MongoClient.connect(url, (err, client)=> {
    assert.equal(null, err);
    console.log("Conneccion correcta al servidor\n"); 
    const db = client.db(dbName); 
    let col = db.collection('producto');
    col.find({}).toArray((err, docs)=>{
        assert.equal(err, null);
        if(docs == null){
          console.log("No hubo coneccion a la base de datos");
        }else{
          console.log(docs);
        }
    client.close();
});

/*
// BUSCAR DOCUMENTOS EN LAS COLECCIONES
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });*/
});