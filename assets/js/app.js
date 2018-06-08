$(document).ready(function () {
                    //Called to initiliaze the different materialize components
     
     //Initialize the sidenav component for the mobile menu
    $('.sidenav').sidenav();
    //Initialize the collapse function for the betting lines
    $(".collapsible").collapsible();
});

$(document).ready(function(){
    $("button").click(function(){
        prompt("Insert Password:");
        alert("Straight\nTicket Number: 148962017-1\nCleveland Cavaliers vs Golden State Warriors\nCleveland Cavaliers\nSpread | +11.5 -115 |\nGame Risk 5 To Win 4.35\nGame Date: 06/03/2018 8:10 pm "  );
    });
});

$(document).ready(function(){
    $('.modal').modal();
  });
  
  $(document).ready(function(){
  var container = $("#cont");


  var betSpecs = $("<div>");
  betSpecs.addClass("row");
  betSpecs.attr("id", "bet-specs");

  var betType = $("<div>");
  betType.addClass("col s4");
  betType.attr("id", "bet-type");

  var betDate = $("<div>");
  betDate.addClass("col s4");
  betDate.attr("id", "bet-date");

  var betId = $("<div>");
  betId.addClass("col s4");
  betId.attr("id", "bet-id");
  
  betType.text("STRAIGHT");
  betDate.text("05/29/18 09:55");
  betId.text("14898368362-1");
 
  betSpecs.append(betType);
  betSpecs.append(betDate);
  betSpecs.append(betId);
  container.append(betSpecs);
  
  //container 2
  var container2 = $("#cont2");

  var betLogo = $("<div>");
  betLogo.addClass("col s2");
  betLogo.attr("id", "bet-logo");
  
  var imageLogo = $("<img>");
  imageLogo.attr("id", "team-logo");
  imageLogo.attr("src", "assets/img/NBA/Cleveland Cavaliers.png");
  imageLogo.attr("width", "45px");
  imageLogo.attr("height", "25px");
  betLogo.append(imageLogo);

  var betName = $("<div>");
  betName.addClass("col s4");
  betName.attr("id","bet-name");

  var nSpread = $("<div>");
  nSpread.addClass("col s3")
  nSpread.attr("id", )
betName.text("Cleveland Cavaliers");
  container2.append(betLogo);
  container2.append(betName);
  });
  /*
  var container = $(".container");

  var betSpecs = $("<div>");
  betSpecs.addClass("row");
  betSpecs.attr("id", "bet-specs");

  var betType = $("<div>");
  betType.addClass("col s4");
  betType.attr("id", "bet-type");

  var betDate = $("<div>");
  betDate.addClass("col s4");
  betDate.attr("id", "bet-date");

  var betID = $("<div>");
  betId.addClass("col s4");
  betID.attr("id", "bet-id");

  var betLogo = $("<img>");
  betLogo.addClass();
  
  betType.text("STRAIGHT");
  betDate.text("05/29/18 09:55");
  betID.text("14898368362-1");
  container.append(betSpecs);
  container.append(betType);
  container.append(betDate);
  container.append(betID);
  */
