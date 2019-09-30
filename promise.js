const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/tienda';
let pro = function(){
    return new Promise(function(resolve, reject){    
      MongoClient.connect(url, (err, client)=> {
        if(err) reject(err);
          client.collection('producto').findOne({},function(err, docs){
              resolve(docs);
            client.close();          
          }); 
      });      
    });
}
  pro().then(function(message){
    console.log('Funciono promise: '+ message);
  });