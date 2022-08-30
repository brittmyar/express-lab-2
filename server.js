const express = require("express");

const app = express();

const port = 3000;

const magic8Ball = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

let answers = magic8Ball[Math.floor(Math.random() * magic8Ball.length)];
//console.log(answers)

app.get("/greeting/:name", function(request, response){
    response.send("Hello, Stranger " + request.params.name)

});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Tip: " + req.params.total * (req.params.tipPercentage/100))
});


app.get("/magic/:answer", function(request, response){
    response.send(`<h1>${answers}</h1>`)
    

});


app.listen(3000, function(){
    console.log("express is listening to the port")
});