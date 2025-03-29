const express = require('express');
const app = express();

const rappers = {
    '21 savage': {   
        'age': '29',
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'brithlocation': 'London, England'
    },
    
    'chance the rapper': {   
        'age': '29',
        'birthName': 'Chanclor Bennett',
        'brithlocation': 'Chicago, Illinois'
    },
    
    'doechii': {   
        'age': '26',
        'birthName': "Jaylah Ji'mya Hickmon",
        'brithlocation': 'Tampa, Florida, U.S.'
    },
    
    'noname': {   
        'age': '33',
        'birthName': 'Fatimah Nyeema Warner',
        'brithlocation': 'Chicago, Illinois'
    },
    
    
    'dylan': {   
        'age': 'Dylan age',
        'birthName': 'Dylan birthName',
        'brithlocation': 'Dylan brithlocation'
    },
    
}

port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


app.get('/api', (req, res) => {
        res.json(rappers);
})

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase();
    
    if(rappers[rappersName]){
        res.json(rappers[rappersName]);
    } else {
        res.json(rappers['Dylan']);
    }   
})


app.get('/api/:rapperName/age', (req, res) => {
    let rappersName = req.params.rapperName.age;
    
    if(rappers[rappersName]){
        res.json(rappers[rappersName]['age']);
    } else {
        res.json(rappers['dylan']['age']);
    }   
})


app.listen(process.env.port || port, () => {
    console.log(`listening on http://localhost:${port} 👍🏾`);
    
});