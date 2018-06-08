$(document).ready(function () {
    // --------------------- ON LOAD EVENTS - START ---------------------

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
    var userDbInfo;
    var userUniqueID;

    /*Just to complete the dynamic creation of the tables without using Firebase I'm creating some variables with the information I will be pulling from Firebase
    var categories = ["basketball", "baseball", "hockey", "football"]
    var categoriesImages = ["basketball-icon", "baseball-icon", "hockey-icon", "football-icon"]
    var subcategories = ["nba", "mlb", "nhl", "nfl"];
    */


    // --------------------- GLOBAL VARIABLES -   END ---------------------

//- - - - 

    // --------------------- EVENT LISTENERS - START ---------------------

    //add-fav click listener, will open a modal that will pull Firebase data for favorites
    $('.fav-button').on('click', function(){
        //get all the categories
        fullDatabase.ref('/tickets').on("child_added", function(snapshot) {
            //paint them dinamically
        });
    });

    //onclick listener for the categories
    //Opens function that hides the categories modals, and shows the respective subcat modals
    //adds or removes the favorites on click


    // --------------------- EVENT LISTENERS -   END ---------------------

//- - - -

    // --------------------- FUNCTIONS - START ---------------------

    //Verify the user's auth status
    function checkLoginStatus() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                userOnDB = userIsLogged(user);
                if (!userOnDB) {
                    saveUserToDB(user);
                }
            } else {
                userIsNotLogged();
                }
            }, function(error) {
                console.log("Problem getting auth data; Error: " + error);
        });
    }

    function userIsLogged(pUser) {
        userUniqueID = pUser.uid;
        fullDB.ref('users/').child(userUniqueID).on("value", function(snapshot) {
            userDbInfo = snapshot.val()
            userOnDB = true;
            favRowFiller(); //user is logged in and in the DB, fill the fav-row
            return userOnDB;
        }, function(error) {
            console.log("Problem getting user from DB; Error: " + error);
        });
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
            accessToken: pUser.accessToken,
            providerData: pUser.providerData
        }, function(error) {
            console.log("Problem saving user to the DB; Error: " + error);
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
        //Get all the favorites from firebase
        //Check which favorites the user has
        //grey out (or remove?) the ones the user has, let him choose more
        //while user is choosing, it should be reflected immediately on the fav-bar
    }

    // --------------------- FUNCTIONS -   END ---------------------

});

/*
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
    headerColSubcategory.text(subcategories[i].toUpperCase());

    collapsibleHeader.append(headerColSubcategory);


    //create the subcategory Body called collapsibleHeader and append it to the li... 2 of 2
    var collapsibleBody = $("<div>");
    collapsibleHeader.addClass("collapsible-header");

    li.append(collapsibleHeader);






}



//append the whole collapsible div to the spreads-page id in the html
$("#spreads-page").append(collapsible);

*/