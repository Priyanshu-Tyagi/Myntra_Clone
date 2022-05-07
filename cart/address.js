var savedaddress=JSON.parse(localStorage.getItem("adddata"))||[];

document.getElementById("addbutton").addEventListener("click",function(){saveaddressinstorage()});

function saveaddressinstorage(){
    var somedata={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        pin:document.getElementById("pin").value,
        house:document.getElementById("house").value,
        local:document.getElementById("local").value,
        incity:document.getElementById("incity").value,
        insatte:document.getElementById("instate").value,
    } 

    savedaddress.push(somedata);
    localStorage.setItem("adddata",JSON.stringify(savedaddress));
}