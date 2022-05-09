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



var cartdata=JSON.parse(localStorage.getItem("cartdata"))


var totalmrpsum='';
totalmrpsum="3000*"+cartdata.length;
document.querySelector("#totalmrp").append(eval(totalmrpsum))

var totaldiscount=[];
for(var i=0;i<cartdata.length;i++){
    totaldiscount.push(eval("-"+cartdata[i].price))
}
document.querySelector("#discountmrp").append(eval(totaldiscount.join('')))

var final=eval(totalmrpsum)+eval(totaldiscount.join(''));
document.querySelector("#totalamount").append(eval(final))