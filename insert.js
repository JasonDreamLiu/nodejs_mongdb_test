var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { _id: 1, siteType: "cn", status:1 };
    dbo.collection("orders").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});