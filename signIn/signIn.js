
var arr=localStorage.getItem(JSON.stringify("userMobile"))||[];
document.querySelector("#inp_sub").addEventListener("click",clickFun);
function clickFun(){
    event.preventDefault();
    var mobNum = document.querySelector('#inp_num').value;
    if(mobNum<1000000000){
        alert("input valid Mobile Number");
        window.location.reload;
    }
    else{
        arr.push(mobNum);
        JSON.parse(localStorage.setItem("userMobile","arr"));
        alert("mobile resistered");
    }
}