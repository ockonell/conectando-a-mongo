/*'use strict'
const mongo = require('mongoose').MongoClient;
mongo.Promise = global.Promise;
mongo.connect('mongodb//:localhost:27017/tienda', { useNewUrlParser: true }).then(
    ()=>{console.log('Conexion Realizada a la BD tienda.')}
).catch(err => console.log(err));
*/

// CONECCION CON CALLBACK
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); 
const url = 'mongodb://localhost:27017'; 
const dbName = 'tienda'; 
MongoClient.connect(url, (err, client)=> {
    assert.equal(null, err);
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
    });  
    */
