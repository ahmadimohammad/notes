const chalk = require('chalk')
const fs = require('fs')
// add a new note wiyh title and body
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title===title)
    if (!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('your note added'))
    }else{
        console.log(chalk.red.inverse('The title is taken'))

    }

}
const loadNotes = () =>{
    try{
    const notesStr = fs.readFileSync('notes.json')
    const JsonNotes = JSON.parse(notesStr.toString())
    return JsonNotes
    }
    catch (e){
        return []
    }
}

const saveNotes = (notes) => {
    const notesStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesStr)
}
// you can remove a note by title
const removeNote = (title) => {
    debugger
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title)
    saveNotes(newNotes)
    console.log(chalk.green.inverse('your note Removed'))


}
// list all the notes
const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.green.inverse(note.title))
    });
}
//read a note by it's title
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.blue.inverse(note.body))
    }
    else{
        console.log(chalk.red.inverse('this title does not exist'))
    }
}


module.exports ={
    addNote : addNote,
    removeNote : removeNote,
    readNote : readNote,
    listNotes : listNotes
} 

