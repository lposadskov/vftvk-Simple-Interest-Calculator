function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var endyear = new Date().getFullYear() + parseInt(years, 10);
    //principal value check
    if (parseInt(principal,10) <= 0 || !(Number.isInteger(parseInt(principal,10))) || principal == "")
    {
        alert("Enter a positive number");
	document.getElementById("principal").focus();
    }
    else
    {
        var interest = (principal * years * rate)/ 100;
        document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,<br />at an interest rate of <mark>"+rate+"%</mark>.<br />You will receive an amount of <mark>"+interest+"</mark>,<br />in a year <mark>" + endyear + "</mark>";
    }
}
function rateUpdate()
{
    //Updating rate span based on slider value
    var rate = document.getElementById("rate").value;
    document.getElementById("rateres").innerHTML = rate + "%";    
}        
