const router = require('express').Router()


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