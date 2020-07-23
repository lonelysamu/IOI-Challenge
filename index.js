var ParseHub = require('parsehub');
var api = new ParseHub("tAtNUA5xWWyC");

const express = require('express');

api.getAllJobs(function(err, jobs)
{
    console.log(err);
    console.log(jobs);
});
api.getAllJobs({ include_last_run: true }, function(err, jobs)
{
    console.log(err);
    console.log(jobs);
});

api.runJob({ token: 'tKOTHZu4srR8' }, function(err, runToken)
{
    console.log(err);
    console.log(runToken);
});

/*
// Set up express app
const app = express();

app.use(express.static(__dirname));

app.get('/get', function(req,res) {
    console.log('GET Request');
    res.send({name : 'Test'});
});

// listen for requests
app.listen(process.env.port || 4000, function() {
    console.log('Now listening for requests');
});*/