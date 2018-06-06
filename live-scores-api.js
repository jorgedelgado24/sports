// Event listener for document live scores
$(document).ready(function () {
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
        //success: function () {
        //   console.log("thanks for your comments!");
        //},
    })
        //After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.scoreboard.gameScore;
            console.log(results);


            /// Looping over every result item
            // only taking action if there are games to display in current date and by sport provided by app

            var date = ["2017-07-09"];

            for (var i = 0; i < results.length; i++) {
            if (results[i].game.date === date[0]) {
                var container = $("#mlbContainer");

                var logoDiv = $("<div>");
                logoDiv.addClass("col s2");
                logoDiv.attr("id", "away-team-logo");
                
                var nameDiv = $("<div>");
                nameDiv.addClass("col s6");
                nameDiv.attr("id", "away-team-name");
                
                var divScore = $("<div>");
                divScore.addClass("col s2");
                divScore.attr("id", "away-team-score");
                
                var divGameTime = $("<div>");
                divGameTime.addClass("col s2");
                divGameTime.attr("id", "game-time");
                
                var logoDivHome = $("<div>");
                logoDivHome.addClass("col s2");
                logoDivHome.attr("id","home-team-logo");
                
                var nameDivHome = $("<div>");
                nameDivHome.addClass("col s6");
                nameDivHome.attr("id", "home-team-name");
                
                var divScoreHome = $("<div>");
                divScoreHome.addClass("col s2");
                divScoreHome.attr("id", "home-team-score");

                var breakLine = $("<div>");
                breakLine.addClass("clearfix");

                nameDiv.text("Name " + results[i].game.awayTeam.Name);
                nameDivHome.text("Name " + results[i].game.homeTeam.Name);
                divScore.text(results[i].awayScore);
                divScoreHome.text(results[i].homeScore);
                //divGameTime.text("Time " + results[i].game.time);

                // container.append(logoDiv);
                container.append(nameDiv);
                container.append(divScore);
                //container.append(divGameTime);
                //container.append(logoDivHome);
                container.append(nameDivHome);
                container.append(divScoreHome);
                container.append(breakLine);
            }
        }
    });
});
