const router = require('express').Router()
const {createNote} = require('../lib/notes')
const {db} = require('../db/db.json')

router.get('/notes', (req, res)=> {
    let results = db;
    res.json(results)
})

router.post('/notes', (req, res)=> {
    req.body.id = db.length.toString();
    const note = createNote(req.body, notes);
    res.json(note)
})






module.exports = router