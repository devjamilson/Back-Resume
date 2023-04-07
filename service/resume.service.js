const Resume = require('../models/Resume')

const create = (body) => Resume.create(body)

const findAllService = () => Resume.find()

const deleteService = (id) => Resume.deleteOne(id)

const findByIdService = (id) => Resume.findById(id)

const updateService = (
    id, 
    titulo,
    conteudo
) => Resume.findOneAndUpdate({_id: id}, {titulo,
    conteudo})


const searchByTitleService = (title) => Resume.find({titulo: {$regex: `${title || ''}`, $options: 'i'}})

module.exports ={
    create,
    findAllService,
    findByIdService,
    updateService,
    searchByTitleService,
    deleteService
}