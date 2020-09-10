const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost/";

async function dataOperate(){
    let conn = null;
    try{
        conn = await MongoClient.connect(url,{ useUnifiedTopology: true });
        console.log("数据库已连接！");
        const test = conn.db("testDB").collection("test");
        //增加
        await test.insertOne({"site":"runoob.com"});
        //查询
        let arr = await test.find().toArray();
        console.log(arr);
        //更改
        await test.updateMany({"site":"runoob.com"},
            {$set:{"site":"example.com"}});
        //查询
        arr = await test.find().toArray();
        console.log(arr);
    }catch (err){
        console.error(`错误：${err.message}`);
    }finally {
        if (conn != null) conn.close();
    }
}


dataOperate();