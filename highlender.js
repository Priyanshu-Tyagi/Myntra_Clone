var testdata=JSON.parse(localStorage.getItem("cartdata"))||[];


document.querySelector(".bag").addEventListener("click",function(){

    var imgarr={
        img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
        price:"1347",
        costprice:"3000",
        discount:"25% OFF",
        brand:"Highlander",
        name:"Men White Slim Fit Casual Shirt",
    }

    testdata.push(imgarr);

    localStorage.setItem("cartdata",JSON.stringify(testdata))
})


var data=JSON.parse(localStorage.getItem("wishdata"))||[];


document.querySelector("#wish").addEventListener("click",function(){

    var imgarr={
        img:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
        price:"1347",
        costprice:"3000",
        discount:"25% OFF",
        brand:"Highlander",
        name:"Men White Slim Fit Casual Shirt",
    }

    data.push(imgarr);

    localStorage.setItem("wishdata",JSON.stringify(data))
})