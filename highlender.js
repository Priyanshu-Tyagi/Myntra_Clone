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

