var testdata=JSON.parse(localStorage.getItem("cartdata"))||[];


document.querySelector(".bag").addEventListener("click",function(){

    var imgarr={
        img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9260157/2019/6/1/7e59185c-0a70-4c35-88f4-314a3e8610e11559376771551-HERENOW-Men-Shirts-5171559376770146-1.jpg",
        price:"799",
        costprice:"3000",
        discount:"55% OFF",
        brand:"Mufti",
        name:"Men Slim Fit Shirt",
    }

    testdata.push(imgarr);

    localStorage.setItem("cartdata",JSON.stringify(testdata))
})


var data=JSON.parse(localStorage.getItem("wishdata"))||[];


document.querySelector("#wish").addEventListener("click",function(){

    var imgarr={
        img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9260157/2019/6/1/7e59185c-0a70-4c35-88f4-314a3e8610e11559376771551-HERENOW-Men-Shirts-5171559376770146-1.jpg",
        price:"799",
        costprice:"3000",
        discount:"55% OFF",
        brand:"Mufti",
        name:"Men Slim Fit Shirt",
    }

    data.push(imgarr);

    localStorage.setItem("wishdata",JSON.stringify(data))
})