function showmore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
     if(moreText.style.display === "block"){
        moreText.style.display = "none"
    }
    else {
      btnText.innerHTML = "Show less"; 
    //   document.querySelector("#arrow").setAttribute("src","./imgs/showlessarrow.png");
      moreText.style.display = "block";
    }
  }