// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/
function selectF(){
    document.getElementById("b").innerHTML = "Frank";
}

function selectG(){
    document.getElementById("b").innerHTML = "George";
}

function selectJ(){
    document.getElementById("b").innerHTML = "Juan";
}

function selectRC(){
    document.getElementById("s").innerHTML = "Regular cut";
}

function selectFade(){
    document.getElementById("s").innerHTML = "Fade";
}

function selectBT(){
    document.getElementById("s").innerHTML = "Beard trim";
}

function selectSD(){
    document.getElementById("s").innerHTML = "Special design";
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

var unavailableF = ["07/01/2020","12/25/2020"]
var unavailableG = ["07/01/2020","07/02/2020","07/03/2020","07/04/2020","07/05/2020","07/18/2020","09/30/2020","12/25/2020"]
var unavailableJ = ["08/03/2020","07/01/2020","07/10/2020","08/15/2020","08/16/2020","12/25/2020"]
const setDateFormat = "mm/dd/yy";

function disableDatesF(date) {
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableF.indexOf(string) == -1 ]
}  

function disableDatesG(date) {
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableG.indexOf(string) == -1 ]
}  

function disableDatesJ(date) {
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableJ.indexOf(string) == -1 ]
}  

$(document).ready(function(){

    $("#book").hide();

    $("#chooseTxt").hide();
    $("#bookF").hide();
    $("#bookG").hide();
    $("#bookJ").hide();

    $('[data-toggle="tooltip"]').tooltip();   

    $("#f").on("click", function(){
        $("#chooseTxt").show();
        $("#bookF").show();
        $("#bookG").hide();
        $("#bookJ").hide();

    });

    $("#g").on("click", function(){
        $("#chooseTxt").show();
        $("#bookG").show();
        $("#bookF").hide();
        $("#bookJ").hide();

    });

    $("#j").on("click", function(){
        $("#chooseTxt").show();
        $("#bookJ").show();
        $("#bookG").hide();
        $("#bookF").hide();

    });


    $("#appt").mouseenter(function(){
        if ((validateEmail("email") && validateNumber("number") && validateCredit("credit") && validateName("name"))==true){
            $("#book").show();

        }
    });

    $("#book").on("click", function(){
        alert("Your booking has been confirmed!");
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

    $("#bookF").datepicker(
        {
            dateFormat: setDateFormat,
            
            minDate: 0,  
            maxDate: '+6M',
            
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDatesF,
       
        }   
    );

    $("#bookG").datepicker(
        {
            dateFormat: setDateFormat,
            
            minDate: 0,  
            maxDate: '+6M',
            
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDatesG,
       
        }   
    );

    $("#bookJ").datepicker(
        {
            dateFormat: setDateFormat,
            
            minDate: 0,  
            maxDate: '+6M',
            
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDatesJ,
       
        }   
    );


});