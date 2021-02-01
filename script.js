function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate)/ 100;
    var endyear = new Date().getFullYear() + years;
    document.getElementById("rateres").innerHTML = "If you deposit "+principal+",\nat an interest rate of "+rate+"%.\nYou will receive an amount of "+interest+",/nin a year " + endyear;
}

document.getElementById("rate").onchange = function() {rateUpdate()};

function rateUpdate() 
{
    document.getElementById("rateres").innerHTML = rate + "%";    
}        
