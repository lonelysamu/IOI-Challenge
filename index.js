var request = require('request');

request({
    uri: 'https://www.parsehub.com/api/v2/projects/tKOTHZu4srR8/run',
    method: 'POST',
    form: {
      api_key: "tAtNUA5xWWyC",
      start_url: "http://www.example.com",
      start_template: "main_template",
      start_value_override: "{\"query\": \"San Francisco\"}",
      send_email: "1"
    }
  }, function(err, resp, body) {
    console.log(body);
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