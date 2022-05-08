
document.querySelector("#inp_sub").addEventListener("click",clickFun);
function clickFun(){
    const mobile = document.querySelector('#inp_num').value;
    const pwd = document.querySelector('#inp_pwd').value;

    var x=JSON.parse(localStorage.getItem("userData"));
    console.log(x);
    x.forEach(element => {
        if(mobile==element.mob && pwd==element.pwd){
            // alert("login successful");
            window.location.href="index.html";
        }
        else{
            alert("incorrect Mobile or Password");
        }
    });
   
}