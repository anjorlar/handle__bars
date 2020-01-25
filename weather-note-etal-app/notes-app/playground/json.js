// let obj = {
//     name: 'Anjy'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj)

// let personString = '{"name": "anjy", "Age": 289}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person)

const fs = require('fs');

let originalNote = {
    title: 'some title',
    body: 'some body'
};
let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("note.json", originalNoteString);

let noteString = fs.readFileSync('note.json');
let note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title); 