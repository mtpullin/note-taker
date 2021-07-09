const router = require('express').Router()
const {createNote, findByID} = require('../lib/notes')
const {notes} = require('../db/db')
console.log({notes})

router.get('/notes', (req, res)=> {
    res.json(notes)
})

router.post('/notes', (req, res)=> {
   if(!req.body.id) {
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
   
    res.json(note)
   }
    
})





module.exports = router