const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db("runoob");
    const mysort = {type:1};
    dbo.collection('site').find().sort(mysort).toArray((err,res)=>{
        if (err) throw err;
        console.log(res);
        db.close();
    });
});