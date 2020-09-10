var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    const dbo = db.db("runoob");
    let whereStr = {
        "url":/www/
    }
    dbo.collection("site"). find(whereStr).toArray((err, result) => { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});