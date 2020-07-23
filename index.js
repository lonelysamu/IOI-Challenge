
document.getElementById('searchBtn').addEventListener("click",function(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('searchQuery').innerHTML;
    const url = 'https://www.parsehub.com/api/v2/projects/tKOTHZu4srR8/run';
    // Data to be sent to the API
    let data = {
        search : searchQuery
    }

    let fetchData = {
        uri : 'https://www.parsehub.com/api/v2/projects/tKOTHZu4srR8/run',
        method: 'POST',
        form: {
            api_key: "tAtNUA5xWWyC",
            start_url: "https://www.propertyguru.com.my/",
            start_template: "main_template",
            start_value_override: data,
            send_email: "1"
        }
    }
    
    fetch(url,fetchData)
        .then(function(err, resp, body) {
            console.log(body);
        });

})

/*


request({
    uri: 'https://www.parsehub.com/api/v2/projects/tKOTHZu4srR8/run',
    method: 'POST',
    form: {
      api_key: "tAtNUA5xWWyC",
      start_url: "https://www.propertyguru.com.my/",
      start_template: "main_template",
      start_value_override: "{\"search\": \" \"}",
      send_email: "1"
    }
  }, function(err, resp, body) {
    console.log(body);
  });
*/
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