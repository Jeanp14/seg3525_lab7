// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/
function selectO(){
    document.getElementById("f").innerHTML = "Outdoor";
}

function selectA(){
    document.getElementById("f").innerHTML = "Outdoor(artificial)";
}

function selectI(){
    document.getElementById("f").innerHTML = "Indoor";
}

function selectUC(){
    document.getElementById("c").innerHTML = "U18s comp";
}

function selectUR(){
    document.getElementById("c").innerHTML = "U18s rec";
}

function selectAC(){
    document.getElementById("c").innerHTML = "Adults comp";
}

function selectAR(){
    document.getElementById("c").innerHTML = "Adults rec";
}

function selectS(){
    document.getElementById("c").innerHTML = "Seniors";
}

function selectBR(){
    document.getElementById("UC").innerHTML = "Boys regional";
}

function selectB1(){
    document.getElementById("UC").innerHTML = "Boys tier1";
}

function selectB2(){
    document.getElementById("UC").innerHTML = "Boys tier2";
}

function selectB3(){
    document.getElementById("UC").innerHTML = "Boys tier3";
}

function selectGR(){
    document.getElementById("UC").innerHTML = "Girls regional";
}

function selectG1(){
    document.getElementById("UC").innerHTML = "Girls tier1";
}

function selectG2(){
    document.getElementById("UC").innerHTML = "Girls tier2";
}

function selectG3(){
    document.getElementById("UC").innerHTML = "Girls tier3";
}

function selectBG1(){
    document.getElementById("UR").innerHTML = "U18 rec1";
}

function selectBG2(){
    document.getElementById("UR").innerHTML = "U18 rec2";
}

function selectBG3(){
    document.getElementById("UR").innerHTML = "U18 rec3";
}

function selectMR(){
    document.getElementById("AC").innerHTML = "Men's regional";
}

function selectM1(){
    document.getElementById("AC").innerHTML = "Men's tier1";
}

function selectM2(){
    document.getElementById("AC").innerHTML = "Men's tier2";
}

function selectM3(){
    document.getElementById("AC").innerHTML = "Men's tier3";
}

function selectWR(){
    document.getElementById("AC").innerHTML = "Women's regional";
}

function selectW1(){
    document.getElementById("AC").innerHTML = "Women's tier1";
}

function selectMW1(){
    document.getElementById("AR").innerHTML = "Adult's rec1";
}

function selectMW2(){
    document.getElementById("AR").innerHTML = "Adult's rec2";
}


function validateName(nm){
    var m = document.getElementById(nm).value;
    var regM = /^([A-Za-z]+(\s)?[A-Za-z]*)+$/; 
    if(regM.test(m)){
        return true;
    }else{
        return false;
    }
}

function validateEmail(mail){
    var e = document.getElementById(mail).value;
    var regE = /^[A-Za-z0-9]*@[A-Za-z0-9]*.(com|ca|fr|org)$/; 
    if(regE.test(e)){
        return true;
    }else{
        return false;
    }
}

function validateNumber(num){
    var n = document.getElementById(num).value;
    var regN = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if(regN.test(n)){
        return true;
    }else{
        return false;
    }
}

function validateCredit(cred) {
    var c = document.getElementById(cred).value;
    var regC = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
    if (regC.test(c)) {
        return true;
    }
    else {
        return false;
    }
}

var unavailableO = ["07/01/2020","12/25/2020"]
var unavailableA = ["07/01/2020","07/02/2020","07/03/2020","07/04/2020","07/05/2020","07/18/2020","09/30/2020","12/25/2020"]
var unavailableI = ["08/03/2020","07/01/2020","07/10/2020","08/15/2020","08/16/2020","12/25/2020"]
const setDateFormat = "mm/dd/yy";

function disableDatesO(date) {
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableO.indexOf(string) == -1 ]
}  

function disableDatesA(date) {
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableA.indexOf(string) == -1 ]
}  

function disableDatesI(date) {
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableI.indexOf(string) == -1 ]
}  

$(document).ready(function(){

    $("#book").hide();

    $("#chooseTxt").hide();
    $("#bookO").hide();
    $("#bookA").hide();
    $("#bookI").hide();

    $("#ucomp").hide();
    $("#urec").hide();
    $("#acomp").hide();
    $("#arec").hide();
    $("#age").hide();
    $("#reg").hide();

    $('[data-toggle="tooltip"]').tooltip();   

    $("#uc").on("click", function(){
        $("#ucomp").show();
        $("#urec").hide();
        $("#acomp").hide();
        $("#arec").hide();
        $("#age").show();
        $("#reg").hide();
    });

    $("#ur").on("click", function(){
        $("#ucomp").hide();
        $("#urec").show();
        $("#acomp").hide();
        $("#arec").hide();
        $("#age").show();
        $("#reg").hide();

    });

    $("#ac").on("click", function(){
        $("#ucomp").hide();
        $("#urec").hide();
        $("#acomp").show();
        $("#arec").hide();
        $("#age").hide();
        $("#reg").hide();

    });

    $("#ar").on("click", function(){
        $("#ucomp").hide();
        $("#urec").hide();
        $("#acomp").hide();
        $("#arec").show();
        $("#age").hide();
        $("#reg").hide();

    });

    $("#o").on("click", function(){
        $("#chooseTxt").show();
        $("#bookO").show();
        $("#bookA").hide();
        $("#bookI").hide();

    });

    $("#a").on("click", function(){
        $("#chooseTxt").show();
        $("#bookA").show();
        $("#bookO").hide();
        $("#bookI").hide();

    });

    $("#i").on("click", function(){
        $("#chooseTxt").show();
        $("#bookI").show();
        $("#bookA").hide();
        $("#bookO").hide();

    });

    $("#appt2").mouseenter(function(){
        if ((validateEmail("email2") && validateNumber("number2") && validateCredit("credit2") && validateName("name2"))==true){
            $("#reg").show();

        }
    });
    
    $("#appt").mouseenter(function(){
        if ((validateEmail("email") && validateNumber("number") && validateCredit("credit") && validateName("name"))==true){
            $("#book").show();

        }
    });

    $("#reg").on("click", function(){
        alert("Your registration has been confirmed!");
    });


    $("#book").on("click", function(){
        alert("Your booking has been confirmed!");
    });

    $("#name2").keyup(function(){
        if (!validateName("name2")){
            
            $("#name2").css("background-color", "pink");
 
        }
        else {
            $("#name2").css("background-color", "lightgreen");
        }
    });

    $("#email2").keyup(function(){
        if (!validateEmail("email2")){
            
            $("#email2").css("background-color", "pink");
 
        }
        else {
            $("#email2").css("background-color", "lightgreen");
        }
    });

    $("#number2").keyup(function(){
        if (!validateNumber("number2")){
            
            $("#number2").css("background-color", "pink");
            
        }
        else {
            $("#number2").css("background-color", "lightgreen");
            
        }
    });

    $("#credit2").keyup(function(){
        if (!validateCredit("credit2")){
            
            $("#credit2").css("background-color", "pink");
            
        }
        else {
            $("#credit2").css("background-color", "lightgreen");
        }
    });
  
    $("#name").keyup(function(){
        if (!validateName("name")){
            
            $("#name").css("background-color", "pink");
 
        }
        else {
            $("#name").css("background-color", "lightgreen");
        }
    });

    $("#email").keyup(function(){
        if (!validateEmail("email")){
            
            $("#email").css("background-color", "pink");
 
        }
        else {
            $("#email").css("background-color", "lightgreen");
        }
    });

    $("#number").keyup(function(){
        if (!validateNumber("number")){
            
            $("#number").css("background-color", "pink");
            
        }
        else {
            $("#number").css("background-color", "lightgreen");
            
        }
    });

    $("#credit").keyup(function(){
        if (!validateCredit("credit")){
            
            $("#credit").css("background-color", "pink");
            
        }
        else {
            $("#credit").css("background-color", "lightgreen");
        }
    });

    $("#bookO").datepicker(
        {
            dateFormat: setDateFormat,
            
            minDate: 0,  
            maxDate: '+6M',
            
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDatesO,
       
        }   
    );

    $("#bookA").datepicker(
        {
            dateFormat: setDateFormat,
            
            minDate: 0,  
            maxDate: '+6M',
            
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDatesA,
       
        }   
    );

    $("#bookI").datepicker(
        {
            dateFormat: setDateFormat,
            
            minDate: 0,  
            maxDate: '+6M',
            
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDatesI,
       
        }   
    );


});