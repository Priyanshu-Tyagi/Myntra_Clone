
document.querySelector("#form").addEventListener("submit",subFun);
var arr=JSON.parse(localStorage.getItem("userData"))||[];
function subFun(){
    event.preventDefault();
    var obj={
        mob:document.querySelector('#mobile').value,
        pwd:document.querySelector('#pwd').value,
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        alt_mob:document.querySelector('#altmobile').value,
    };
   

    arr.push(obj);
    console.log(arr);
//setiing user signup data to localstorage//
    localStorage.setItem("userData",JSON.stringify(arr));
    window.location.href="signIn.html";

}
