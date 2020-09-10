const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology:true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db("runoob");
    const whereStr = {
        "type":"cn"
    }
    var updateStr = {$set: {"type":"en"}};
    dbo.collection('site').updateMany(whereStr, updateStr, (err, res) => {
        if (err) throw err;
        console.log(`${res.result.nModified} 条文档被更新！`);
        db.close();
    });
});