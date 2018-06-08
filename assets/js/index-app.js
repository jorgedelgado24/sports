$(document).ready(function () {
    // --------------------- INITIALIZE COMPONENTS - START ---------------------
    //Initialize the sidenav component for the mobile menu
    $('.sidenav').sidenav();

    //Initialize the collapse function for the betting lines
    $(".collapsible").collapsible();
    
    //Initialize the database
    var configFirebase = {
        apiKey: "AIzaSyDM_Q0lxG8Z1DBs02ldv3aoHH5xo_ZkSms",
        authDomain: "sports-betting-8a570.firebaseapp.com",
        databaseURL: "https://sports-betting-8a570.firebaseio.com",
        projectId: "sports-betting-8a570",
        storageBucket: "sports-betting-8a570.appspot.com",
        messagingSenderId: "464520081859"
    };
    firebase.initializeApp(configFirebase);

    // --------------------- INITIALIZE COMPONENTS -   END ---------------------

//- - - - 

    // --------------------- ON LOAD EVENTS - START ---------------------

    //fav-row onload filler, will check Firebase for all the user's favorites

    // --------------------- ON LOAD EVENTS -   END ---------------------

//- - - - 

    // --------------------- EVENT LISTENERS - START ---------------------

    //add-fav click listener, will open a modal that will pull Firebase data for favorites

    // --------------------- EVENT LISTENERS -   END ---------------------

//- - - -

    // --------------------- FUNCTIONS - START ---------------------
    
    // --------------------- FUNCTIONS -   END ---------------------

    //Initialize the sidenav component for the mobile menu
    $('.sidenav').sidenav();
    //Initialize the collapse function for the betting lines
    $(".collapsible").collapsible();
});

//Just to complete the dynamic creation of the tables without using Firebase I'm creating some variables with the information I will be pulling from Firebase
var categories = ["basketball", "baseball", "hockey", "football"]
var categoriesImages = ["basketball-icon", "baseball-icon", "hockey-icon", "football-icon"]
var subcategories = ["nba", "mlb", "nhl", "nfl"];

//create the general collapsible call that will hold all the li's with the subcategories spreads
var collapsible = $("<ul>");
collapsible.addClass("collapsible");

//start the for loop with the subcategories lenght
for (i = 0; i < subcategories.length; i++) {

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
    categoryLogo.attr("src", "assets/img/" + categoriesImages[i] + ".png");

    headerColLogo.append(categoryLogo);

    //create the second of two columns that will contain the information in the collapsible header with the category icon and the subcategory Name
    var headerColSubcategory = $("<div>");
    headerColSubcategory.addClass("col s3");
    headerColSubcategory.attr("id", "subcategory-name");
    headerColSubcategory.text(toUpperCase(subcategories[i]));

    collapsibleHeader.append(headerColSubcategory);


    //create the subcategory Body called collapsibleHeader and append it to the li... 2 of 2
    var collapsibleBody = $("<div>");
    collapsibleHeader.addClass("collapsible-header");

    li.append(collapsibleHeader);






}

//append the whole collapsible div to the spreads-page id in the html
$("#spreads-page").append(collapsible);