$(document).ready(function () {
    // --------------------- ON LOAD EVENTS - START ---------------------

    //Initialize the database
    //load DB first to use it
    var configFirebase = {
        apiKey: "AIzaSyDM_Q0lxG8Z1DBs02ldv3aoHH5xo_ZkSms",
        authDomain: "sports-betting-8a570.firebaseapp.com",
        databaseURL: "https://sports-betting-8a570.firebaseio.com",
        projectId: "sports-betting-8a570",
        storageBucket: "sports-betting-8a570.appspot.com",
        messagingSenderId: "464520081859"
    };
    firebase.initializeApp(configFirebase);

    //Verify if the user has logged in
    checkLoginStatus();

    // --------------------- ON LOAD EVENTS -   END ---------------------

//- - - - 

    // --------------------- INITIALIZE COMPONENTS - START ---------------------
    //Initialize the sidenav component for the mobile menu
    $('.sidenav').sidenav();

    //Initialize the collapse function for the betting lines
    $(".collapsible").collapsible();

    //Initialize the modal component for later usage
    $('.modal').modal();


    // --------------------- INITIALIZE COMPONENTS -   END ---------------------

    //- - - - 

    // --------------------- GLOBAL VARIABLES - START ---------------------

    var fullDB = firebase.database();
    var usersDB = fullDB.ref('/users');
    var userOnDB = false;

    var userDbRef;
    var userDbObject;
    var userUniqueID;

    var globalUser;

    // --------------------- GLOBAL VARIABLES -   END ---------------------

    //- - - - 

    // --------------------- EVENT LISTENERS - START ---------------------

    $('#open-favs-modal').on('click', function(){
        favModalFiller();
    });

    // --------------------- EVENT LISTENERS -   END ---------------------

    //- - - -

    // --------------------- FUNCTIONS - START ---------------------


    //Verify the user's auth status
    function checkLoginStatus() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                userOnDB = userIsLogged(user);
                if (userOnDB) {
                    favRowFiller();
                } else {
                    saveUserToDB(user);
                }
            } else {
                userIsNotLogged();
            }
        });
    }

    function userIsLogged(pUser) {
        userUniqueID = pUser.uid;
        usersDB.child(userUniqueID).on("value", function(snapshot) {
            userDbObject = snapshot.val()
            userOnDB = true;
        });
        return userOnDB;
    }

    function userIsNotLogged() {
        window.location.href='login.html';
    }

    function saveUserToDB(pUser) {
        //grab pUser.id and save it's data to the DB
        userUniqueID = pUser.uid;
        fullDB.ref('/users').child(userUniqueID).set({
            //save user to it's own node
            displayName: pUser.displayName,
            email: pUser.email,
            emailVerified: pUser.emailVerified,
            phoneNumber: pUser.phoneNumber,
            photoURL: pUser.photoURL,
            uid: pUser.uid,
            refreshToken: pUser.refreshToken
        }).then(() => {
            favRowFiller();//Should work without this, but will have to do, for now
        });
    }

    function favRowFiller() {

        fullDB.ref('/users/'+userUniqueID+'/favorites').on("child_added", function(snapshot){

            var oneFav = snapshot.val();

            var tdIcon = $('<td>');
            tdIcon.addClass('fav-icon');
            tdIcon.prepend($('.fav-row'));

            var aButton = $('<a>');
            aButton.addClass('btn-floating btn-large fav-button');
            aButton.text(oneFav.name);
            aButton.append(tdIcon);

            //https://stackoverflow.com/questions/45733537/materializecss-using-icon-as-fab-button-featurediscovery
            //Apparently making an img inside the icon is not as easy as I thought, will leave buttons with text for now

        }); 
    }

    function favModalFiller() {
        var insideModalSel = $("#favs-modal-container");
        var rowsAmmount = 1;
        var catIDadder = 1;
        var catCounter = 0;
        var maxLatCats = 4;

        var tr = $('<tr>');
        tr.addClass('fav-row');
        tr.attr('id', 'fav-row-'+rowsAmmount)
        insideModalSel.append(tr);

        //Get all the categories from firebase
        fullDB.ref('/categories').on("child_added", function(snapshot) {
            var catName = snapshot.val().name;
            catCounter++;
            if (catCounter < maxLatCats) {
                //create inside the already created row
                var td = $('<td>');
                td.addClass('fav-icon');
                td.attr('id', 'fav-icon-'+catIDadder);
                $('#fav-row-'+rowsAmmount).append(td);

                var a = $('<a>');
                a.addClass('btn-floating btn-large waves-effect waves-light red fav-button');
                a.text(snapshot.val().name);
                td.append(a);

            } else {
                catCounter = 1;
                rowsAmmount++;

                tr = $('<tr>');
                tr.addClass('fav-row');
                tr.attr('id', 'fav-row-'+rowsAmmount)
                insideModalSel.append(tr);
            }

        });
        //Check which favorites the user has
        //grey out (or remove?) the ones the user has, let him choose more
        //while user is choosing, it should be reflected immediately on the fav-bar
    }

    // --------------------- FUNCTIONS -   END ---------------------



//Need to pull from fav bar (firebase) the favorite categories

//Store the favorite categories in variable. Also get the categories, categoriesImages, and subcategoriesImages. For now, storing in array below to fulfill examaple.

//Just to complete the dynamic creation of the tables without using Firebase I'm creating some variables with the information I will be pulling from Firebase
var categories = ["basketball", "baseball", "hockey", "football"]
var categoriesImages = ["basketball-icon", "baseball-icon", "hockey-icon", "football-icon"]
var subcategories = ["nba", "mlb", "nhl", "nfl"];


//create the general collapsible call that will hold all the li's with the subcategories spreads
var collapsible = $("<ul>");
collapsible.addClass("collapsible");

//start the for loop with the subcategories lenght
for (i = 0; i < subcategories.length; i++) {

    // https://jsonodds.com/api/odds/{string: sport} -H "x-api-key: yourapikey"

    //search in the API the subcategories in favorites tab
    var APIkey = "9569048c-ae00-4a84-903d-e74247a22568";
    var queryURL = "https://jsonodds.com/api/odds/" + subcategories[i];

    //do the ajax call for the specific sports person
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa("jorgedelgado24:lakers24l"),
            "x-api-key": "9569048c-ae00-4a84-903d-e74247a22568"
        }
    }).then(function(response) {
        console.log(response);

    }).catch(function(error) {
        console.log(error);
    });

    //create the li that will hold the subcategories spreads and append it to the collapsible var
    var li = $("<li>");

    collapsible.append(li);

    //create the subcategory header called collapsibleHeader and append it to the li... 1 of 2
    var collapsibleHeader = $("<div>");
    collapsibleHeader.addClass("collapsible-header");

    li.append(collapsibleHeader);

    //create the first of two columns that will contain the information in the collapsible header with the category icon and the subcategory Name
    var headerColLogo = $("<div>");
    headerColLogo.addClass("col s2");
    headerColLogo.attr("id", "category-logo");

    collapsibleHeader.append(headerColLogo);

    //this is the image that goes inside of the headerColLogo
    var categoryLogo = $("<img>");
    categoryLogo.attr("src", "./assets/img/" + categoriesImages[i] + ".png");

    headerColLogo.append(categoryLogo);

    //create the second of two columns that will contain the information in the collapsible header with the category icon and the subcategory Name
    var headerColSubcategory = $("<div>");
    headerColSubcategory.addClass("col s3");
    headerColSubcategory.attr("id", "subcategory-name");
    headerColSubcategory.text(subcategories[i]);

    collapsibleHeader.append(headerColSubcategory);


    //create the subcategory Body called collapsibleHeader and append it to the li... 2 of 2
    var collapsibleBody = $("<div>");
    collapsibleBody.addClass("collapsible-body");

    li.append(collapsibleBody);

    //create the spreadSubcategory where we will have the game-header and game information
    var spreadSubcategory = $("<div>");
    spreadSubcategory.addClass("row");
    spreadSubcategory.attr("id", "spread-subcategory");

    collapsibleBody.append(spreadSubcategory);

    //create the game-header that will be appended to spreadSubcategory. 1 of 2. and will hold the game header information
    var gameHeader = $("<div>");
    gameHeader.addClass("row");
    gameHeader.attr("id", "game-header");

    spreadSubcategory.append(gameHeader);

    //create the columns that will go inside gameHeader. Column 1 of 4
    var gameHeaderColLogo = $("<div>");
    gameHeaderColLogo.addClass("col s1 offset-s1");
    gameHeaderColLogo.attr("id", "category-logo-game-header");

    gameHeader.append(gameHeaderColLogo);

    //create the image that will go inside the gameHeaderColLogo
    var gameHeaderCategoryLogo = $("<img>");
    gameHeaderCategoryLogo.attr("src", "./assets/img/" + categoriesImages[i] + ".png");

    gameHeaderColLogo.append(gameHeaderCategoryLogo);


    //column 2 of 4.. containing the name of the subcategory
    var gameHeaderColSubcategory = $("<div>");
    gameHeaderColSubcategory.addClass("col s3");
    gameHeaderColSubcategory.attr("id", "subcategory-name-game-header");
    gameHeaderColSubcategory.text(subcategories[i]);

    gameHeader.append(gameHeaderColSubcategory);

    //column 3 of 4.. containing the game details PULLED FROM API
    var gameHeaderColGameDescription = $("<div>");
    gameHeaderColGameDescription.addClass("col s4");
    gameHeaderColGameDescription.attr("id", "game-description");
    gameHeaderColGameDescription.text("Game Description API");

    gameHeader.append(gameHeaderColGameDescription);

    //column 4 of 4.. containing the game date PULLED FROM API
    var gameHeaderColGameDate = $("<div>");
    gameHeaderColGameDate.addClass("col s3");
    gameHeaderColGameDate.attr("id", "game-date");
    gameHeaderColGameDate.text("Game Date API");

    gameHeader.append(gameHeaderColGameDate);

    //clearfix gameHeader
    var gameHeaderClearFix = $("<div>");
    gameHeaderClearFix.addClass("clearfix");

    gameHeader.append(gameHeaderClearFix);


    //create the game div that will be appended to spreadSubcategory. 2 of 2 and will hold the game information
    var game = $("<div>");
    game.addClass("row");
    game.attr("id", "game");

    spreadSubcategory.append(game);

    //create the teams header that will go inside game 1 of 2.
    var teamsHeader = $("<div>");
    teamsHeader.addClass("row");
    teamsHeader.attr("id", "teams-header");

    game.append(teamsHeader);

    //adding columns that will go inside the teamsHeader containing the spread header 1 of 2
    var gameDateTime = $("<div>");
    gameDateTime.addClass("col s5");
    gameDateTime.attr("id", "game-date-time");
    gameDateTime.text("Game Date-Time API");

    teamsHeader.append(gameDateTime);

    //adding column that will hold the spread, total, and odds header 2 of 2
    var linesHeader = $("<div>");
    linesHeader.addClass("col s7");
    linesHeader.attr("id", "lines-header");

    teamsHeader.append(linesHeader);

    //Creating the 3 columns that will go inside the teamsHeader column containing the spread, total and odds header
    var spread = $("<div>");
    spread.addClass("col s4");
    spread.attr("id", "spread");
    spread.text("Spread");

    linesHeader.append(spread);

    var total = $("<div>");
    total.addClass("col s5");
    total.attr("id", "total");
    total.text("Total");

    linesHeader.append(total);

    var odds = $("<div>");
    odds.addClass("col s3");
    odds.attr("id", "odds");
    odds.text("Odds");

    linesHeader.append(odds);

    //clearfix teamsHeader
    var teamsHeaderClearFix = $("<div>");
    teamsHeaderClearFix.addClass("clearfix");

    teamsHeader.append(teamsHeaderClearFix);

    //create the teams that will go inside game 2 of 2.
    var teams = $("<div>");
    teams.addClass("row");
    teams.attr("id", "teams");

    game.append(teams);

    //create the awayTeam that will go inside teams 1 of 2.
    var awayTeam = $("<div>");
    awayTeam.addClass("row");
    awayTeam.attr("id", "away-team");

    teams.append(awayTeam);

    // create the 4 columns that will go inside awayTeam. 1/4
    var awayTeamBetNumber = $("<div>");
    awayTeamBetNumber.addClass("col s1");
    awayTeamBetNumber.attr("id", "away-team-bet-number");
    awayTeamBetNumber.text("API away team bet #");

    awayTeam.append(awayTeamBetNumber);

    // 2/4
    var awayTeamLogo = $("<div>");
    awayTeamLogo.addClass("col s1");
    awayTeamLogo.attr("id", "away-team-logo");
    awayTeamLogo.text("img away team logo");

    awayTeam.append(awayTeamLogo);

    //image that will go inside awayTeamLogo

    /*
    var awayTeamLogoImage = $("<img>");
    awayTeamLogoImage.attr("src", "./assets/img/" + AWAY TEAM NAME FROM API + ".png");

    awayTeamLogo.append(awayTeamLogoImage);
    */


    // 3/4
    var awayTeamName = $("<div>");
    awayTeamName.addClass("col s3");
    awayTeamName.attr("id", "away-team-name");
    awayTeamName.text("AWAY TEAM NAME FROM API");

    awayTeam.append(awayTeamName);

    // 4/4
    var linesAwayTeam = $("<div>");
    linesAwayTeam.addClass("col s7");
    linesAwayTeam.attr("id", "lines-away-team");

    awayTeam.append(linesAwayTeam);

    //AwayTeam clearfix
    var awayTeamClearFix = $("<div>");
    awayTeamClearFix.addClass("clearfix");

    awayTeam.append(awayTeamClearFix);

    //create the 3 columns that will go inside linesAwayTeam
    var awayTeamSpread = $("<div>");
    awayTeamSpread.addClass("col s4");
    awayTeamSpread.attr("id", "away-team-spread");
    awayTeamSpread.text("API away spread");

    linesAwayTeam.append(awayTeamSpread);

    var totalOver = $("<div>");
    totalOver.addClass("col s5");
    totalOver.attr("id", "total-over");
    totalOver.text("API Over");

    linesAwayTeam.append(totalOver);

    var awayTeamOdds = $("<div>");
    awayTeamOdds.addClass("col s3");
    awayTeamOdds.attr("id", "away-team-odds");
    awayTeamOdds.text("API away Odds");

    linesAwayTeam.append(awayTeamOdds);


    //create the homeTeam that will go inside teams 2 of 2.
    var homeTeam = $("<div>");
    homeTeam.addClass("row");
    homeTeam.attr("id", "home-team");

    teams.append(homeTeam);

    // create the 4 columns that will go inside homeTeam. 1/4
    var homeTeamBetNumber = $("<div>");
    homeTeamBetNumber.addClass("col s1");
    homeTeamBetNumber.attr("id", "home-team-bet-number");
    homeTeamBetNumber.text("API home team bet #");

    homeTeam.append(homeTeamBetNumber);

    // 2/4
    var homeTeamLogo = $("<div>");
    homeTeamLogo.addClass("col s1");
    homeTeamLogo.attr("id", "home-team-logo");
    homeTeamLogo.text("img home team logo");

    homeTeam.append(homeTeamLogo);

    //image that will go inside homeTeamLogo

    /*
    var homeTeamLogoImage = $("<img>");
    homeTeamLogoImage.attr("src", "./assets/img/" + HOME TEAM NAME FROM API + ".png");

    homeTeamLogo.append(homeTeamLogoImage);
    */


    // 3/4
    var homeTeamName = $("<div>");
    homeTeamName.addClass("col s3");
    homeTeamName.attr("id", "away-team-name");
    homeTeamName.text("HOME TEAM NAME FROM API");

    homeTeam.append(homeTeamName);

    // 4/4
    var linesHomeTeam = $("<div>");
    linesHomeTeam.addClass("col s7");
    linesHomeTeam.attr("id", "lines-away-team");

    homeTeam.append(linesHomeTeam);

    //AwayTeam clearfix
    var homeTeamClearFix = $("<div>");
    homeTeamClearFix.addClass("clearfix");

    homeTeam.append(homeTeamClearFix);


    //create the 3 columns that will go inside linesHomeTeam
    var homeTeamSpread = $("<div>");
    homeTeamSpread.addClass("col s4");
    homeTeamSpread.attr("id", "home-team-spread");
    homeTeamSpread.text("API home spread");

    linesHomeTeam.append(homeTeamSpread);

    var totalUnder = $("<div>");
    totalUnder.addClass("col s5");
    totalUnder.attr("id", "total-under");
    totalUnder.text("API Under");

    linesHomeTeam.append(totalUnder);

    var homeTeamOdds = $("<div>");
    homeTeamOdds.addClass("col s3");
    homeTeamOdds.attr("id", "home-team-odds");
    homeTeamOdds.text("API home Odds");

    linesHomeTeam.append(homeTeamOdds);


}



//append the whole collapsible div to the spreads-page id in the html
$("#spreads-page").append(collapsible);

});
