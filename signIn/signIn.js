document.querySelector("#inp_sub").addEventListener("click",clickFun);
var arr=JSON.parse(localStorage.getItem("userMobile")) || [];

function clickFun(){
    event.preventDefault();
    const mobNum = document.querySelector('#inp_num').value;
    if(mobNum<1000000000){
        alert("input valid Mobile Number");
    }
    else{
        var mobObj = {
            userMob: document.querySelector('#inp_num').value
        };
          arr.push(mobObj);
          console.log(arr);
          localStorage.setItem("userMobile", JSON.stringify(arr));
          // redirect to applied jobs
          window.location.href = "signup.html";
        }
    }
