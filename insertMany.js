const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=>{
    if(err) throw err;
    const dbo = db.db('runoob');
    const myobj = [
        {name:'张三', url:'https://blog.biogdream.com/', type: 'en'},
        {name:'李四', url:'https://www.biogdream.com/lisi', type: 'cn'},
        {name:'王五', url:'https://www.biogdream.com/wangwu', type: 'cn'},
        {name:'赵六', url:'https://www.biogdream.com/zhaoliu', type: 'en'},
        {name:'刘一', url:'https://www.biogdream.com/liuyi', type: 'en'},
        {name:'金', url:'https://jing.biogdream.com/', type: 'en'},
        {name:'木', url:'https://mu.biogdream.com/', type: 'cn'},
        {name:'水', url:'https://shui.biogdream.com/', type: 'cn'},
        {name:'火', url:'https://huo.biogdream.com/', type: 'en'},
        {name:'土', url:'https://tu.biogdream.com/', type: 'cn'},
        {name:'阴', url:'https://ying.biogdream.com/', type: 'en'},
        {name:'阳', url:'https://yang.biogdream.com/', type: 'en'}
    ]
    dbo.collection("site").insertMany(myobj, (err,res)=>{
        if (err) throw err;
        console.log("插入的文档数量为：" + res.insertedCount);
        db.close();
    });
});

