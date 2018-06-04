// Event listener for document live scores
$(document).ready(function() {
// In this case, the "this" keyword refers to the button that was clicked
var sportLeague = $(this).attr("data-sport-league");
// Constructing a URL to search Giphy for the name of the person who said the quote
var queryURL = "https://api.mysportsfeeds.com/v1.2/pull/mlb/2017-regular/scoreboard.json?fordate=20170709";
// Performing our AJAX GET request
$.ajax({
    type: "GET",
    url: "https://api.mysportsfeeds.com/v1.2/pull/mlb/2017-regular/scoreboard.json?fordate=20170709",
    dataType: "JSON",
    async: false,
    headers: {
        "Authorization": "Basic " + btoa("jorgedelgado24:lakers24l")
    },
    success: function(){
        console.log("thanks for your comments!");
    },
 })
//After the data comes back from the API
    .then(function(response) {
// Storing an array of results in the results variable
        var results = response.data;
        console.log(response);
        });
        });
/// Looping over every result item
//for (var i = 0; i < results.length; i++) {
// only taking action if there are games to display in current date and by sport provided by app
//if (results[i].rating === "date" && results[i].rating === "sport") {
//} 
