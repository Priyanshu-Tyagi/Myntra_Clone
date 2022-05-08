

// var testdata=JSON.parse(localStorage.getItem("savedata"))||[];

// shirtArr.forEach(function(el){
//         var card=document.createElement("div");
//         var image=document.createElement("img");
//         image.setAttribute("src",el.img);
//         var name=document.createElement("h3");
//         name.innerText=el.brand;
//         var desc=document.createElement("p");
//         desc.innerText=el.name;
//         var price=document.createElement("p");
//         price.innerText=el.price;
//         var strikedoffprice=document.createElement("p");
//         strikedoffprice.innerText=el.costprice;
//         var off=document.createElement("p");
//         off.innerText=el.discount;
//         var btn=document.createElement("button");
//         btn.innerText="Add to cart"
//         btn.addEventListener("click",function(){addtocart(el)})

//         card.append(image,name,desc,price,strikedoffprice,off,btn);
//         container.append(card);
//     })

//     function addtocart(el){
//         testdata.push(el);
//         localStorage.setItem("savedata",JSON.stringify(testdata));
//     }   



let imgarr=[{img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg" ,
         price:"1999",
         costprice:"3000",
         discount:"45% OFF",
         brand:"Roadster",
         name:"Cotton Shirt",

}]

document.querySelector("#wish").addEventListener("click",myfunction)

function myfunction(imgarr){
    
    var name=localStorage.setItem("wishlist",JSON.stringify(imgarr))

    
    window.location.reload();
}
myfunction(imgarr)
// console.log(imgarr)




