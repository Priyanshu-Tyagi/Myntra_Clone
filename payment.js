//            SHOWMORE AND SHOWLESS

function showmore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
     if(moreText.style.display === "block"){
        moreText.style.display = "none"
    }
    else {
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "block";
    }
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


document.getElementById("button").addEventListener("click",function(){
    codes=document.getElementById("code").value;
    if(codes==="39462"){
        alert("Payment Successful");
        window.location.href="index.html";
    }else{
        alert("Enter Correct Captcha")
    }
})