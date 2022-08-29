const express = require("express");

const app = express();

const port = 3000;

app.get("/greeting/:name", function(request, response){
    response.send("Hello, Stranger " + request.params.name)

});

app.get("/tip/:total/:tipPercentage", function(request, response){
    response.send('Your tip will be: ' + request.params.tipPercentage)

})


app.listen(3000, function(){
    console.log("express is listening to the port")
});