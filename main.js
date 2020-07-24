$.ajax({
    uri: 'https://www.parsehub.com/api/v2/projects/tKOTHZu4srR8/run',
    method: 'POST',
    crossDomain : false,
    form: {
      api_key: "tAtNUA5xWWyC",
      isLocal : false,
      start_url: "https://www.propertyguru.com.my/",
      start_template: "main_template",
      start_value_override: "{\"search\": \" \"}",
      send_email: "1"
    }
  },  {
    success: function (data, status, xhr) {// success callback function
        alert(data);
    }
});
