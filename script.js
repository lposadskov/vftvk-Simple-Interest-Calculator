function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var endyear = new Date().getFullYear() + parseInt(years, 10);
    if (parseInt(principal,10) >= 0)
    {
        alert("Enter a positive number");
    }
    else
    {
        var interest = (principal * years * rate)/ 100;
        document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,<br />at an interest rate of <mark>"+rate+"%</mark>.<br />You will receive an amount of <mark>"+interest+"</mark>,<br />in a year <mark>" + endyear + "</mark>";
    }
}
function rateUpdate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rateres").innerHTML = rate + "%";    
}        
