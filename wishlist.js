var wish=JSON.parse(localStorage.getItem("wishdata"))||[]
    var bagarr=JSON.parse(localStorage.getItem("cartdata"))||[];

    displaydata(wish)

    function displaydata(wish){

        wish.forEach(function(element,index){

            var wishcard =document.createElement("div")

            var imagewish=document.createElement("img")
            imagewish.src=element.img;
            imagewish.style.width="100%";

            var itemdelete=document.createElement("button")
            itemdelete.innerText="X"
            itemdelete.setAttribute("class","deletebutton")
            itemdelete.style.cursor="pointer";
            itemdelete.addEventListener("click",function(){
                deleteitem(element,index)
            })

        
        // var probrand=document.createElement("p")
        // probrand.innerText=element.brand; 

        var proname=document.createElement("p")
        proname.innerText=element.name;

        // var prosize=document.createElement("p")
        // prosize.innerText=element.size;

        // var proid=document.createElement("p")
        // proid.innerText=element.productID;

        // var procat=document.createElement("p")
        // procat.innerText=element.catagory;

        var protag=document.createElement("h4")
        protag.innerText="₹";
        protag.style.display="inline"

        var proprice=document.createElement("h4")
        proprice.innerText=element.price;
        proprice.style.display="inline";
        proprice.style.marginRight="20px"  
           
        var cp=document.createElement("p")
        cp.innerText=element.costprice;
        cp.style.display="inline";
        cp.style.marginRight="20px" 
        cp.style.textDecoration= "line-through";
        cp.style.color="gray"; 

        var discounted=document.createElement("P")
        discounted.innerText=element.discount;
        discounted.style.display="inline";
        discounted.style.color="#ff905a"

        var close=document.createElement("p");
        close.innerText="OFF)"
        close.style.display="inline";
        close.style.color="#ff905a";

            var itemmove=document.createElement("div");
            itemmove.innerText="MOVE TO BAG";
            itemmove.setAttribute("class","bagmove")
            itemmove.style.cursor="pointer";
            itemmove.addEventListener("click",function(){
                wishmove(element,index)
            })

            wishcard.append(imagewish,itemdelete,proname,protag,proprice,cp,discounted,close,itemmove)
            document.querySelector("#wishbody").append(wishcard)
            console.log(element)
        });
    }

    function wishmove(element,index){
        bagarr.push(element)
        localStorage.setItem("cartdata",JSON.stringify(bagarr))
        deleteitem(element,index)
    }

    function deleteitem(element,index){
        wish.splice(index,1)
        localStorage.setItem("wishdata",JSON.stringify(wish))
        window.location.reload()
    }