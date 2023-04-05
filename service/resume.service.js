const Resume = require('../models/Resume')

const create = (body) => Resume.create(body)

const findAllService = () => Resume.find()

const findByIdService = (id) => Resume.findById(id)

const updateService = (
    id, 
    titulo,
    conteudo
) => Resume.findOneAndUpdate({_id: id}, {titulo,
    conteudo})


const searchByTitleService = (title) => Resume.find({titulo: {$regex: `${title || ''}`, $options: 'i'}}).sort({_id: -1})

module.exports ={
    create,
    findAllService,
    findByIdService,
    updateService,
    searchByTitleService
}