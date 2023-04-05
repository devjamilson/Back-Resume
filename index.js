const express = require('express')
const resumeRoute = require("./routes/routes")
const bancoDeDados = require("./database/db")
const dotEnv = require('dotenv')
dotEnv.config()
const cors = require('cors')


const app = express()
const porta  =process.env.PORT || 3003

bancoDeDados()
app.use(cors())
app.use(express.json())
app.use("/resume", resumeRoute)

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}!`)
})
