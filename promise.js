const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/runoob";
MongoClient.connect(url, { useUnifiedTopology:true }).then((conn)=>{
    console.log('数据库已连接！');
    const dbase = conn.db("runoob");
    dbase.createCollection('ceshi').then((res) => {
        console.log("已创建集合！");
    }).catch((err)=>{
        console.error(err);
    }).finally(()=>{
        conn.close();
    })
}).catch((err)=>{
    console.error(err);
    console.error("数据库连接失败！");
})