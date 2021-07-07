const router = require('express').Router()
const {createNote, findByID} = require('../lib/notes')
const {notes} = require('../db/db.json')
const {v4: uuidv4} = require('uuid')
console.log({notes})

router.get('/notes', (req, res)=> {
    res.json(notes)
})

router.post('/notes', (req, res)=> {
   if(!req.body.id) {
    req.body.id = uuidv4();
    createNote(req.body, notes);
   }
    res.json(req.body)
    
})






module.exports = router