//  Dependencies //
const express = require("express");
const path = require("path");
// ========================================================================
//  Setting Express App //
let app = express();
let PORT = 3000;
//  ===========================================================================
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==================================================================
//   Mock Data for people that made reservation   //
let people = [];
// ==================================================================


//  Routes that sends the user first to the AJAX homepage //
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "html/index.html"));
});
//  Route to View Tables page //
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "html/viewtables.html"));
});
//  Route to Make a Reservation page //
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "html/reservation.html"));
});
// ========================================================================
// Adds new people to reservation //
app.post("/api/people", function(request, response){
    let newPeople = req.body;
    console.log(newPeople);
    // people.push(newPeople);
    res.json(newPeople);
})

app.listen(PORT, function(){
    console.log("App is tuned in on PORT " + PORT);
});