const fs = require('fs')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001;
const app = express();
const {db} = require('./develop/db/db.json')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function createNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './develop/db/db.json'),
        JSON.stringify({notes: noteArray}, null, 2)
    );
    return note;
}

app.get('/api/notes', (req, res)=> {
    let results = db;
    res.json(results)
})
app.post('/notes', (req, res)=> {
    req.body.id = db.length.toString();
    const note = createNote(req.body, notes);
    res.json(note)
})

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, './develop/public/index.html'))
})

app.get('/notes', (req,res)=> {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'))
})

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, './develop/public/index.html'))
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})