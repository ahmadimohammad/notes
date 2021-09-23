const notes = require('./notes')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            demandOption: true,
            type: 'string',
            describe : 'title for your new note!'
        },
        body:{
            demandOption:true,
            type:'string',
            describe:'Body of your note!'
        }
        
    },
    handler: function(argv){
        notes.addNote(argv.title , argv.body)
    }
}
)
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            demandOption: true,
            type: 'string',
            describe : 'title for your new note!'
        }        
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}
)
debugger
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes()
    }
}
)
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            demandOption: true,
            type: 'string',
            describe : 'title for your new note!'
        }        
    },
    handler(argv){
        notes.readNote(argv.title)
    }
}
)

yargs.parse()