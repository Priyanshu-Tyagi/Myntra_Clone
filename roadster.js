var testdata=JSON.parse(localStorage.getItem("cartdata"))||[];


document.querySelector(".bag").addEventListener("click",function(){

    var imgarr={
        img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg",
        price:"1999",
        costprice:"3000",
        discount:"45% OFF",
        brand:"Roadster",
        name:"Cotton Shirt",
    
    }

    testdata.push(imgarr);

    localStorage.setItem("cartdata",JSON.stringify(testdata))
})
    


var data=JSON.parse(localStorage.getItem("wishdata"))||[];


document.querySelector("#wish").addEventListener("click",function(){

    var imgarr={
        img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg",
        price:"1999",
        costprice:"3000",
        discount:"45% OFF",
        brand:"Roadster",
        name:"Cotton Shirt",
    }

    data.push(imgarr);

    localStorage.setItem("wishdata",JSON.stringify(data))
})
