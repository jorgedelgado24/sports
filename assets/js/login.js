// Initialize Firebase
var configFirebase = {
    apiKey: "AIzaSyDM_Q0lxG8Z1DBs02ldv3aoHH5xo_ZkSms",
    authDomain: "sports-betting-8a570.firebaseapp.com",
    databaseURL: "https://sports-betting-8a570.firebaseio.com",
    projectId: "sports-betting-8a570",
    storageBucket: "sports-betting-8a570.appspot.com",
    messagingSenderId: "464520081859"
};
firebase.initializeApp(configFirebase);

/*Take the user to the search page (for local work)*/
var oldURL = window.location.href;
var newURL = oldURL.replace("login", "index");
/*Otherwise, use the full url for index*/

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: newURL,
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '' //we'll get there...
};
// Initialize the FirebaseUI Widget using Firebase.
var loginUI = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
loginUI.start('#login-ui', uiConfig);