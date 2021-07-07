const fs = require('fs')
const path = require('path')






function createNote(body, noteArray) {
   
    noteArray.push(body);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: noteArray }, null, 2)
    );
    return note;
}

module.exports = {createNote}