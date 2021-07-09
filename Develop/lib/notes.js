const fs = require('fs')
const path = require('path')


const findByID = (id, noteArray) => {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
}



function createNote(body, noteArray) {
   
    noteArray.push(body);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: noteArray }, null, 2)
    );
    return body;
}



module.exports = {createNote, findByID}