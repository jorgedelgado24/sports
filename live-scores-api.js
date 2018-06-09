// Event listener for document live scores
$(document).ready(function () {
    // Array of leagues to have as favorites
    var sportLeague = ["mlb", "nba", "nfl", "nhl"];
    var categorieImages = []; // get the names of the images to be used

    // initialize firebase
    var config = {
        apiKey: "AIzaSyDM_Q0lxG8Z1DBs02ldv3aoHH5xo_ZkSms",
        authDomain: "sports-betting-8a570.firebaseapp.com",
        databaseURL: "https://sports-betting-8a570.firebaseio.com",
        projectId: "sports-betting-8a570",
        storageBucket: "sports-betting-8a570.appspot.com",
        messagingSenderId: "464520081859"
    };
    firebase.initializeApp(config);

    var fullDB = firebase.database();
    var baseSubsRef = fullDB.ref("/categories/baseball/subcategories");
    var footSubsRef = fullDB.ref("/categories/football/subcategories");
    var basketSubsRef = fullDB.ref("/categories/basketball/subcategories");

    //var database = firebase.database().ref("/categories/baseball/subcategories");
    // console.log(database);
    //bring the users data based on favorites sports choosen
    //baseSubsRef.on("child_added", function (snapshot) {
      //  var baseSubCat = snapshot.val();
        //if (baseSubCat.name === "MLB") {
          //  console.log("True");
            //$("#mlbContainer").show();
        //return fillBaseball();
         //} else { 
           //$("#toHideBase").hide();
        //}
    //});

    //footSubsRef.on("child_added", function (snapshot) {
      //  var footSubCat = snapshot.val();
        //if(footSubCat.name === "NFL"){
          //  console.log("trueF");
            //$("#nflContainer").show();
        //return fillFootball();
        //} else { 
          //  $("#toHideFoot").hide();
       // }
    //});

    //basketSubsRef.on("child_added", function (snapshot) {
      //  var basketSubCat = snapshot.val();
        //if(basketSubCat.name === "NBA"){
          //  console.log("TrueN");
            //$("#nbaContainer").show();
        //return fillBasket();
       //} else {
         //  $("#toHideBasket").hide();
       // }
    //});

    // Constructing a URL to search API for the favorite sport choose by user to reflect games, scores and time

    //function fillBaseball() {
        var queryURLmlb = "https://api.mysportsfeeds.com/v1.2/pull/mlb/2017-regular/scoreboard.json?fordate=20170910";
        // Performing our AJAX GET request
        $.ajax({
            type: "GET",
            url: queryURLmlb,
            dataType: "JSON",
            async: false,
            headers: {
                "Authorization": "Basic " + btoa("jorgedelgado24:lakers24l")
            },
        })
            //After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.scoreboard.gameScore;
                console.log(results);

                /// Looping over every result item
                // only taking action if there are games to display in current date
                var date = ["2017-09-10"];

                for (var i = 0; i < results.length; i++) {
                    if (results[i].game.date === date[0]) {
                        // creating a container to show MLB data
                        var container = $("#mlbContainer");
                        // creating div and adding class and attribute to show away team logo
                        var logoDiv = $("<div>");
                        logoDiv.addClass("col s2");
                        logoDiv.attr("id", "away-team-logo");
                        // creating div and adding class and attribute to show away team name    
                        var nameDiv = $("<div>");
                        nameDiv.addClass("col s4");
                        nameDiv.attr("id", "away-team-name");
                        // creating div and adding class and attribute to show away team city    
                        var cityDiv = $("<div>");
                        cityDiv.addClass("col s2");
                        cityDiv.attr("id", "away-team-city");
                        // creating div and adding class and attribute to show away team score    
                        var divScore = $("<div>");
                        divScore.addClass("col s2");
                        divScore.attr("id", "away-team-score");
                        // creating div and adding class and attribute to show game time    
                        var divGameTime = $("<div>");
                        divGameTime.addClass("col s2");
                        divGameTime.attr("id", "game-time");
                        // creating div and adding class and attribute to show home team logo    
                        var logoDivHome = $("<div>");
                        logoDivHome.addClass("col s2");
                        logoDivHome.attr("id", "home-team-logo");
                        // creating div and adding class and attribute to show home team name    
                        var nameDivHome = $("<div>");
                        nameDivHome.addClass("col s4");
                        nameDivHome.attr("id", "home-team-name");
                        // creating div and adding class and attribute to show home team city    
                        var cityDivHome = $("<div>");
                        cityDivHome.addClass("col s2");
                        cityDivHome.attr("id", "home-team-city");
                        // creating div and adding class and attribute to show home team score    
                        var divScoreHome = $("<div>");
                        divScoreHome.addClass("col s2");
                        divScoreHome.attr("id", "home-team-score");
                        // creating div and adding class clearfix
                        var breakLine = $("<div>");
                        breakLine.addClass("clearfix");

                        // calling away team name in the DOM
                        nameDiv.text(results[i].game.awayTeam.Name);
                        // calling away team city in the DOM 
                        cityDiv.text(results[i].game.awayTeam.City);
                        // calling home team name in the DOM
                        nameDivHome.text(results[i].game.homeTeam.Name);
                        // calling home team city in the DOM
                        cityDivHome.text(results[i].game.homeTeam.City);
                        // calling away team score in the DOM
                        divScore.text(results[i].awayScore);
                        // calling home team score in the DOM
                        divScoreHome.text(results[i].homeScore);
                        // calling game time in the DOM
                        divGameTime.text("Time " + results[i].game.time);
                        // calling away team logo in the DOM
                        logoDiv.text("AwayLogoTeam");
                        // calling home team logo in the DOM
                        logoDivHome.text("HomeLogoTeam");

                        // calling away team logo to container
                        container.append(logoDiv);
                        // calling away team city to container
                        container.append(cityDiv);
                        // calling away team name to container
                        container.append(nameDiv);
                        // calling away team score to container
                        container.append(divScore);
                        // calling game time to container
                        container.append(divGameTime);
                        // calling home team logo to container
                        container.append(logoDivHome);
                        // calling home team city to container
                        container.append(cityDivHome);
                        // calling home team name to container
                        container.append(nameDivHome);
                        // calling home team score to container
                        container.append(divScoreHome);
                        // calling clearfix to container
                        container.append(breakLine);
                        // calling hr to container
                        container.append("<hr>");
                    }
                }
            })
   // }

  //  function fillFootball() {
    var queryURL = "https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/scoreboard.json?fordate=20170910";
    // Performing our AJAX GET request
    $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "JSON",
        async: false,
        headers: {
            "Authorization": "Basic " + btoa("jorgedelgado24:lakers24l")
        },
    })
        //After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.scoreboard.gameScore;
            console.log(results);

            /// Looping over every result item
            // only taking action if there are games to display in current date and by sport provided by app

            var date = ["2017-09-10"];

            for (var i = 0; i < results.length; i++) {
                if (results[i].game.date === date[0]) {
                    // creating a container to show MLB data
                    var container = $("#nflContainer");
                    // creating div and adding class and attribute to show away team logo
                    var logoDiv = $("<div>");
                    logoDiv.addClass("col s2");
                    logoDiv.attr("id", "away-team-logo");
                    // creating div and adding class and attribute to show away team name    
                    var nameDiv = $("<div>");
                    nameDiv.addClass("col s4");
                    nameDiv.attr("id", "away-team-name");
                    // creating div and adding class and attribute to show away team city    
                    var cityDiv = $("<div>");
                    cityDiv.addClass("col s2");
                    cityDiv.attr("id", "away-team-city");
                    // creating div and adding class and attribute to show away team score    
                    var divScore = $("<div>");
                    divScore.addClass("col s2");
                    divScore.attr("id", "away-team-score");
                    // creating div and adding class and attribute to show game time    
                    var divGameTime = $("<div>");
                    divGameTime.addClass("col s2");
                    divGameTime.attr("id", "game-time");
                    // creating div and adding class and attribute to show home team logo    
                    var logoDivHome = $("<div>");
                    logoDivHome.addClass("col s2");
                    logoDivHome.attr("id", "home-team-logo");
                    // creating div and adding class and attribute to show home team name    
                    var nameDivHome = $("<div>");
                    nameDivHome.addClass("col s4");
                    nameDivHome.attr("id", "home-team-name");
                    // creating div and adding class and attribute to show home team city    
                    var cityDivHome = $("<div>");
                    cityDivHome.addClass("col s2");
                    cityDivHome.attr("id", "home-team-city");
                    // creating div and adding class and attribute to show home team score    
                    var divScoreHome = $("<div>");
                    divScoreHome.addClass("col s2");
                    divScoreHome.attr("id", "home-team-score");
                    // creating div and adding class clearfix
                    var breakLine = $("<div>");
                    breakLine.addClass("clearfix");

                    // calling away team name in the DOM
                    nameDiv.text(results[i].game.awayTeam.Name);
                    // calling away team city in the DOM 
                    cityDiv.text(results[i].game.awayTeam.City);
                    // calling home team name in the DOM
                    nameDivHome.text(results[i].game.homeTeam.Name);
                    // calling home team city in the DOM
                    cityDivHome.text(results[i].game.homeTeam.City);
                    // calling away team score in the DOM
                    divScore.text(results[i].awayScore);
                    // calling home team score in the DOM
                    divScoreHome.text(results[i].homeScore);
                    // calling game time in the DOM
                    divGameTime.text("Time " + results[i].game.time);
                    // calling away team logo in the DOM
                    logoDiv.text("AwayLogoTeam");
                    // calling home team logo in the DOM
                    logoDivHome.text("HomeLogoTeam");

                    // calling away team logo to container
                    container.append(logoDiv);
                    // calling away team city to container
                    container.append(cityDiv);
                    // calling away team name to container
                    container.append(nameDiv);
                    // calling away team score to container
                    container.append(divScore);
                    // calling game time to container
                    container.append(divGameTime);
                    // calling home team logo to container
                    container.append(logoDivHome);
                    // calling home team city to container
                    container.append(cityDivHome);
                    // calling home team name to container
                    container.append(nameDivHome);
                    // calling home team score to container
                    container.append(divScoreHome);
                    // calling clearfix to container
                    container.append(breakLine);
                    // calling hr to container
                    container.append("<hr>");
                }
            }
        })
   //}

   // function fillBasket(){
    var queryURL = "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/scoreboard.json?fordate=20171204";
    // Performing our AJAX GET request
    $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "JSON",
        async: false,
        headers: {
            "Authorization": "Basic " + btoa("jorgedelgado24:lakers24l")
        },
    })
        //After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.scoreboard.gameScore;
            console.log(results);

            /// Looping over every result item
            // only taking action if there are games to display in current date and by sport provided by app

            var date = ["2017-12-04"];

            for (var i = 0; i < results.length; i++) {
                if (results[i].game.date === date[0]) {
                    // creating a container to show MLB data
                    var container = $("#nbaContainer");
                    // creating div and adding class and attribute to show away team logo
                    var logoDiv = $("<div>");
                    logoDiv.addClass("col s2");
                    logoDiv.attr("id", "away-team-logo");
                    // creating div and adding class and attribute to show away team name    
                    var nameDiv = $("<div>");
                    nameDiv.addClass("col s4");
                    nameDiv.attr("id", "away-team-name");
                    // creating div and adding class and attribute to show away team city    
                    var cityDiv = $("<div>");
                    cityDiv.addClass("col s2");
                    cityDiv.attr("id", "away-team-city");
                    // creating div and adding class and attribute to show away team score    
                    var divScore = $("<div>");
                    divScore.addClass("col s2");
                    divScore.attr("id", "away-team-score");
                    // creating div and adding class and attribute to show game time    
                    var divGameTime = $("<div>");
                    divGameTime.addClass("col s2");
                    divGameTime.attr("id", "game-time");
                    // creating div and adding class and attribute to show home team logo    
                    var logoDivHome = $("<div>");
                    logoDivHome.addClass("col s2");
                    logoDivHome.attr("id", "home-team-logo");
                    // creating div and adding class and attribute to show home team name    
                    var nameDivHome = $("<div>");
                    nameDivHome.addClass("col s4");
                    nameDivHome.attr("id", "home-team-name");
                    // creating div and adding class and attribute to show home team city    
                    var cityDivHome = $("<div>");
                    cityDivHome.addClass("col s2");
                    cityDivHome.attr("id", "home-team-city");
                    // creating div and adding class and attribute to show home team score    
                    var divScoreHome = $("<div>");
                    divScoreHome.addClass("col s2");
                    divScoreHome.attr("id", "home-team-score");
                    // creating div and adding class clearfix
                    var breakLine = $("<div>");
                    breakLine.addClass("clearfix");

                    // calling away team name in the DOM
                    nameDiv.text(results[i].game.awayTeam.Name);
                    // calling away team city in the DOM 
                    cityDiv.text(results[i].game.awayTeam.City);
                    // calling home team name in the DOM
                    nameDivHome.text(results[i].game.homeTeam.Name);
                    // calling home team city in the DOM
                    cityDivHome.text(results[i].game.homeTeam.City);
                    // calling away team score in the DOM
                    divScore.text(results[i].awayScore);
                    // calling home team score in the DOM
                    divScoreHome.text(results[i].homeScore);
                    // calling game time in the DOM
                    divGameTime.text("Time " + results[i].game.time);
                    // calling away team logo in the DOM
                    logoDiv.text("AwayLogoTeam");
                    // calling home team logo in the DOM
                    logoDivHome.text("HomeLogoTeam");

                    // calling away team logo to container
                    container.append(logoDiv);
                    // calling away team city to container
                    container.append(cityDiv);
                    // calling away team name to container
                    container.append(nameDiv);
                    // calling away team score to container
                    container.append(divScore);
                    // calling game time to container
                    container.append(divGameTime);
                    // calling home team logo to container
                    container.append(logoDivHome);
                    // calling home team city to container
                    container.append(cityDivHome);
                    // calling home team name to container
                    container.append(nameDivHome);
                    // calling home team score to container
                    container.append(divScoreHome);
                    // calling clearfix to container
                    container.append(breakLine);
                    // calling hr to container
                    container.append("<hr>");
                }
            }
        });
   // };
});

