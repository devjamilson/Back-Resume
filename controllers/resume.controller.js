const ResumeService = require('../service/resume.service')
const mongoose = require('mongoose')

const create = async (req, res) =>{
    const {titulo, conteudo} = req.body

    if(!titulo || !conteudo){
       res.status(400).send({message: "Erro ao submeter o resumo, verifique os campos!"})
    }

    const Resume = await ResumeService.create(req.body)
    if(!Resume){
        return res.status(400).send({message: "Erro ao criar resumo!"})
    }

    res.status(201).send({
        Resume:{
            titulo,
            conteudo
        },
        message: "Resumo criado com sucesso!"
    })
}
const findAllResumes = async (req, res) =>{
    try{
        const Resumes = await ResumeService.findAllService()

        if(Resumes.length === 0){
                return res.status(400).send({message: "Não existe resumo!"})
        }
        res.json(Resumes)
    }catch(err){
        res.status(500).send({message: err.message})
    }
    
}
const findById = async (req, res)=>{
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Id inválido!"})
    }

    const resume = await ResumeService.findByIdService(id)

    if(!resume){
        return res.status(400).send({message: "Resumo não encontrado!"})
    }

    res.send(resume)
}

const update = async (req, res)=>{
    const {titulo, conteudo} = req.body

    if(!titulo && !conteudo){
       res.status(400).send({message: "Submeter pelo menos um campo para atualizar!"})
    }


    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Id inválido!"})
    }

    const ResumeU = await ResumeService.findByIdService(id)

    if(!ResumeU){
        return res.status(400).send({message: "Resumo não encontrado!"})
    }

    await ResumeService.updateService(
        id,
        titulo,
        conteudo
    )

    res.send({message: "Resumo atualizado com sucesso!"})
}

const searchByTitle = async (req, res)=>{
    try{
        const {title} = req.query

        const resumos = await ResumeService.searchByTitleService(title)


        if(resumos.length === 0 ){
            return res.status(400).send({message: "Resumo(s) inexistente(s)!"})
        }
        
        return res.send({
            results: resumos.map((item)=>({
                id: item._id,
                titulo: item.titulo,
                conteudo: item.conteudo
            })),
        })
        
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

const deletar = async(req, res)=>{
    try{
        await ResumeService.deleteService()
        res.send({message: "Resumo deletado com sucesso!"})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}


module.exports = {
    create,
    findAllResumes,
    findById,
    update,
    searchByTitle,
    deletar
}