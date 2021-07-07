const fs = require('fs')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiroutes')
const htmlRoutes = require('./routes/htmlroutes')

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

app.listen(PORT, () => {
    console.log(`API server not on port ${PORT}`)
})
