const express = require('express')
const router = express.Router()
const ResumeController = require('../controllers/resume.controller')

router.get('/search', ResumeController.searchByTitle)
router.get('/',ResumeController.findAllResumes)
router.post('/', ResumeController.create)



router.get('/:id', ResumeController.findById)
router.patch('/:id',ResumeController.update)

router.delete('/', ResumeController.deletar)


module.exports = router