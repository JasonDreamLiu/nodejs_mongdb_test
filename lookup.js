const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, { useUnifiedTopology:true }, (err, db) =>{
    if (err) throw err;
    const dbo = db.db("runoob");
    dbo.collection('orders').aggregate([
        { $lookup:
            {
                from:'site',
                localField: 'siteType',
                foreignField:'type',
                as:'ordersToSiteTypeData'
            }
        }
    ]).toArray((err, res) => {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    })
})