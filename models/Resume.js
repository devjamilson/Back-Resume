const mongoose = require('mongoose')
const { Schema } = mongoose;

const resumeSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume