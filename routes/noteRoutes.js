const express = require("express")
const router = express.Router()

// controllers imports
const noteController = require('../controllers/noteController')


//notes routes
router.get('/notes', noteController.getAllNotes)
router.get('/notes/:id', noteController.getNote)
router.post('/notes', noteController.createNote)
router.put('/notes/:id', noteController.updateNote)
router.delete('/notes/:id', noteController.deleteNote)


module.exports = router