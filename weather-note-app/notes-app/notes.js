const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (err) {
        console.log(err)
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes)
        return note;
    }
};

let getAll = () => {
    return fetchNotes()
};

let readNote = (title) => {
    let notes = fetchNotes();
    let readingNote = notes.filter(note => note.title === title);
    console.log(readingNote)
    return readingNote[0]
    // console.log("reading this page", title)
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let delNote = notes.filter((note) => note.title !== title)
    saveNotes(delNote)
    return notes.length !== delNote.length
    console.log("delete a note", delNote)
}

let logNote = (note) => {
    console.log('--');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`)
}
module.exports = {
    addNote, getAll, readNote, removeNote, logNote
}