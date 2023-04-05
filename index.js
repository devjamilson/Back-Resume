const express = require('express')
const resumeRoute = require("./routes/routes")
const bancoDeDados = require("./database/db")


const app = express()
const port  =port || 3003

bancoDeDados()
app.use(express.json())
app.use("/resume", resumeRoute)

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}!`)
})
