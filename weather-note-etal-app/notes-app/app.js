// const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');
const titleOptions = {
    describe: 'title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'body of the note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove all notes', {
        title: titleOptions
    })
    .help().argv;
let command = argv._[0];
// console.log('command', command);
// console.log("Process", process.argv);   
// console.log("Yargs", argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note creation successful');
        notes.logNote(note)
    } else {
        console.log('title taken')
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    let note = notes.readNote(argv.title)
    if (note) {
        notes.logNote(note)
    } else {
        console.log(`note not found`);
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'note was removed' : `note wasn't removed`;
    console.log(message)
}
else {
    console.log('command not recognised');
}