$(document).ready(function () {
    //Called to initiliaze the different materialize components

    //Initialize the sidenav component for the mobile menu
    $('.sidenav').sidenav();
    //Initialize the collapse function for the betting lines
    $(".collapsible").collapsible();
});

$(document).ready(function () {
    $("button").click(function () {
        prompt("Insert Password:");
        alert("Straight\nTicket Number: 148962017-1\nCleveland Cavaliers vs Golden State Warriors\nCleveland Cavaliers\nSpread | +11.5 -115 |\nGame Risk 5 To Win 4.35\nGame Date: 06/03/2018 8:10 pm ");
    });
});

$(document).ready(function () {
    $('.modal').modal();
});

//container 1 confirm tickets
$(document).ready(function () {
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

    //container 2 confirm tickets
    var container2 = $("#cont2");

    var betLogo = $("<div>");
    betLogo.addClass("col s2");
    betLogo.attr("id", "bet-logo");

    var imageLogo = $("<img>");
    imageLogo.attr("id", "team-logo");
    imageLogo.attr("src", "./assets/img/NBA/Chicago Bulls.png");

    betLogo.append(imageLogo);

    var betName = $("<div>");
    betName.addClass("col s4");
    betName.attr("id", "bet-name");

    var nSpread = $("<div>");
    nSpread.addClass("col s3");
    nSpread.attr("id", "spread-specs");

    var BetGameTime = $("<div>");
    BetGameTime.addClass("col s3");
    BetGameTime.attr("id", "bet-game-time");

    betName.text("Cleveland Cavaliers");
    nSpread.text("+11.5 -110");
    BetGameTime.text("03/06/18 7:00 PM")

    container2.append(betLogo);
    container2.append(betName);
    container2.append(nSpread);
    container2.append(BetGameTime);

    //container 3 confirm tickets

    var container3 = $("#cont3");

    var form1 = $("<div>");
    form1.addClass("row quitar-margin");
    form1.attr("id", "risk-win-straight");
    
    var form2 = $("<div>");
    form2.addClass("col s6");
    form2.attr("id", "risk");

    var form3 = $("<div>");
    form3.addClass("row quitar-margin");

    var form4 = $("<form>");
    form4.addClass("col s12");

    var form5 = $("<div>");
    form5.addClass("row");

    var form6 = $("<div>");
    form6.addClass("input-field col s6 quitar-margin");

    var form7 = $("input");
    form7.attr("id", "bet-amount-straight");
    form7.attr("type", "text");
    form7.addClass("validate");

    var form8 = $("<label>");
    form8.attr("for", "bet-amount-straight");

    var form9 = $("<div>");
    form9.addClass("input-field col s6 quitar-margin");

    var form10 = $("<input>");
    form10.attr("id", "to-win");
    form10.attr("type", "text");
    form10.addClass("validate");

    var form11 = $("<label>");
    form11.attr("for", "to-win");

    form5.append(form9);
    form9.append(form10);
    form9.append(form11);
    form6.append(form8);
    form6.append(form7);
    form5.append(form6);
    form4.append(form5);
    form3.append(form4);
    form2.append(form3);
    form1.append(form2);
    container3.append(form1);

    form8.text("Your Risk");
    form11.text("To Win");

    //container 1 current tickets

    var container4 = $("#cont4");

    var money = $("<div>");
    money.addClass("row");
    money.attr("id", "available-pending")

    var available = $("<div>");
    available.addClass("col s6");
    available.attr("id", "available");

    var pending = $("<div>");
    pending.addClass("col s6");
    pending.attr("id", "pending");

    var balance = $("<div>");
    balance.addClass("col s6");
    balance.attr("id", "balance");

    available.text("Available: ");
    pending.text("Pending: ");
    balance.text("Balance: ")

    money.append(available);
    money.append(pending);
    money.append(balance);
    container4.append(money)

    //container 2 current tickets
    
    var container5 = $("#cont5");

    var bet1 = $("<div>");
    bet1.addClass("row");
    bet1.attr("id", "bet");

    var betType1 = $("<div>");
    betType1.addClass("col s4");
    betType1.attr("id", "bet-type");

    var betDate1 = $("<div>");
    betDate1.addClass("col s4");
    betDate1.attr("id", "bet-date");

    var betId1 = $("<div>");
    betId1.addClass("col s4");
    betId1.attr("id", "bet-id");

    betType1.text("STRAIGHT");
    betDate1.text("05/29/18 09:55");
    betId1.text("14892834-1");

    bet1.append(betType1);
    bet1.append(betDate1);
    bet1.append(betId1);
    container5.append(bet1);

   //container 3 current tickets

    var container6 = $("#cont6")

    var newRow = $("<div>");
    newRow.addClass("row");
    

    var betLogo1 = $("<div>");
    betLogo1.addClass("col s2");
    betLogo1.attr("id", "bet-logo");

    var imageLogo1 = $("<img>");
    imageLogo1.attr("id", "team-logo");
    imageLogo1.attr("src", "./assets/img/NBA/Cleveland Cavaliers.png");

    betLogo1.append(imageLogo);

    var betName1 = $("<div>");
    betName1.addClass("col s4");
    betName1.attr("id", "bet-name");

    var nSpread1 = $("<div>");
    nSpread1.addClass("col s3");
    nSpread1.attr("id", "spread-specs");

    var BetGameTime1 = $("<div>");
    BetGameTime1.addClass("col s3");
    BetGameTime1.attr("id", "bet-game-time");

    betName1.text("Cleveland Cavaliers");
    nSpread1.text("+11.5 -110");
    BetGameTime1.text("03/06/18 7:00 PM")

    newRow.append(betLogo1);
    newRow.append(betName1);
    newRow.append(nSpread1);
    newRow.append(BetGameTime1);
    container6.append(newRow);

    //container 4 current tickets

    var container7 = $("#cont7");

    var newRow1 = $("<div>");
    newRow1.addClass("row");
    newRow1.attr("id", "risk-win");

    var risk1 = $("<div>");
    risk1.addClass("col s4");
    risk1.attr("id", "risk");

    var toWin = $("<div>");
    toWin.addClass("col s6");
    toWin.attr("id", "to-win");

    risk1.text("Risk: ");
    toWin.text("To Win: ")

    newRow1.append(risk1);
    newRow1.append(toWin);
    container7.append(newRow1);



});
  