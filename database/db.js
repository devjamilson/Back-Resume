const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(
        process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true}
    ).then(()=> console.log("MongoDB conectado!")).catch((e)=>{
        console.log(e)
    })
}

module.exports = connectDatabase