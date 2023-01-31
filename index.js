function wrong(params) 
{
    var content = document.getElementById("labels").innerText="Wrong Answer";
    document.getElementById("labels").style.color="red";
}

function correct(params) {
    var content = document.getElementById("labels").innerText="Right Answer";
    document.getElementById("labels").style.color="green";
}