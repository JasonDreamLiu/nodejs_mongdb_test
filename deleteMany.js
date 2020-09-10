const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology:true }, (err, db) => {
    if (err) throw  err;
    const dbo = db.db('runoob');
    const whereStr = {
        "type":'cn'
    }
    dbo.collection('site').deleteMany(whereStr, (err,obj) => {
        if (err) throw err;
        console.log(`${obj.result.n} 条文档删除成功！`);
        db.close();
    })
})