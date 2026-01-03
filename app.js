const yargs = require('yargs');
const argv = yargs.argv;
const db = require("./guestdb");


//guest - id, name, address, contact_no, visit_date
//console.log(process.argv);

//add
yargs.command({
    command:"add",
    describe:"add user",
    builder:{
        name:{
            describe:"Name",
            demandOption:true,
            type:"String"
        },
        address:{
            describe:"user address",
            demandOption:true,
            type:"string"
        }, 
        contact_no:{
            describe:"Contact no",
            demandOption:true,
            type:"String"
        }, 
        visit_date:{
            describe:"visit date",
            demandOption:true,
            type:"String"
        }
    },
    handler(argv){
        db.addGuest(argv.name, argv.address, argv.contact_no, argv.visit_date); 
    } 
});

//update
yargs.command({
    command:"update",
    describe:"update user",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"String"
        },
        name:{
            describe:"Name",
            demandOption:true,
            type:"String"
        },
        address:{
            describe:"user address",
            demandOption:true,
            type:"string"
        }, 
        contact_no:{
            describe:"Contact no",
            demandOption:true,
            type:"String"
        }, 
        visit_date:{
            describe:"visit date",
            demandOption:true,
            type:"String"
        }
    },
    handler(argv){
        db.updateGuest(argv.id, argv.name, argv.address, argv.contact_no, argv.visit_date); 
    } 
});

//delete
yargs.command({
    command:"delete",
    describe:"delete user",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"String"
        }
    },
    handler(argv){
        db.deleteGuest(argv.id); 
    } 
});

//list
yargs.command({
    command:"list",
    describe:"list user",
    handler(){
        db.listGuest(); 
    } 
});

//read
yargs.command({
    command:"read",
    describe:"read user",
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"String"
        }
    },
    handler(argv){
        db.readGuest(argv.id); 
    } 
});
//console.log(yargs.argv)
yargs.parse();