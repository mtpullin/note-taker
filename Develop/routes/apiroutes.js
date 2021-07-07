const router = require('express').Router()
const {createNote} = require('../lib/notes')
const {notes} = require('../db/db.json')
const {v4: uuidv4} = require('uuid')

router.get('/notes', (req, res)=> {
    let results = db;
    res.json(results)
})

router.post('/notes', (req, res)=> {
    req.body.id = uuidv4();
    const note = createNote(req.body, notes);
    res.json(note)
    
})






module.exports = router