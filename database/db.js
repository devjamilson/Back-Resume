const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(
        "mongodb+srv://jamilsonfs:147208jose@cluster0.kad73po.mongodb.net/resumos?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true}
    ).then(()=> console.log("MongoDB conectado!")).catch((e)=>{
        console.log(e)
    })
}

module.exports = connectDatabase