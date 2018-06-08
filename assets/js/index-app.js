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

});


