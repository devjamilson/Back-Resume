const express = require('express')
const router = express.Router()
const ResumeController = require('../controllers/resume.controller')

router.get('/search', ResumeController.searchByTitle)
router.get('/',ResumeController.findAllResumes)
router.post('/', ResumeController.create)



router.get('/:id', ResumeController.findById)
router.patch('/:id',ResumeController.update)

router.delete('/deletar', (req, res)=>{
    res.send("Pagina de listagem")
})


module.exports = router