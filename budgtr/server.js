// REQUIRE DEPENDENCIES
const express = require('express');
const budget = require("./models/budget.js")

// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));



// DEFINE OUR ROUTES
app.get("/budgets/" , (request, respond) => {
    respond.render("index.ejs", {
        allBudget: budget
    })

});
app.get("/budgets/new", (request, respond) => {
    respond.render("new.ejs")
});

app.get("/budgets/:index", (req, res)=>{
    res.render("show.ejs", {
        budgets: budget[req.params.index]
    })
});








// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});