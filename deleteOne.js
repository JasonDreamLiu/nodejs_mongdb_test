const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology:true }, (err, db) => {
    if (err) throw  err;
    const dbo = db.db('runoob');
    const whereStr = {
        "name":'233333'
    }
    dbo.collection('site').deleteOne(whereStr, (err,obj) => {
        if (err) throw err;
        console.log('文档删除成功！');
        db.close();
    })
})