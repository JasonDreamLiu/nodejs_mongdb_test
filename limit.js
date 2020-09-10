const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology:true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db('runoob');
    let pageIndex = 4;
    let pageSize = 5;
    dbo.collection('site').find().sort({type:1}).skip((pageIndex-1)*pageSize).limit(pageSize).toArray((err,res)=>{
        if (err) throw err;
        if (res.length>0){
            console.log(res);
        }else{
            console.log("没有数据了！");
        }
        db.close();
    })
})