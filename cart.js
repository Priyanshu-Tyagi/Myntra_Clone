//            SHOWMORE AND SHOWLESS

function showmore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showmore");
  
     if(moreText.style.display === "block"){
        moreText.style.display = "none"
    }
    else {
      btnText.innerHTML = "Show less"; 
      moreText.style.display = "block";
    }
  }

  document.querySelector("#filterdiv>div").addEventListener("click",function(){
    document.querySelector("#filterdiv>div").style.border="1px solid #ff3f6c";
    document.querySelector("#filterdiv>div").style.color="#ff3f6c"
  })

  //            YOU MAY ALSO LIKE:

  window.addEventListener("load",function(){displayyoumayalsolike(Data)});

  function displayyoumayalsolike(Data){
    Data.map(function(el){
      var card=document.createElement("div");
      card.id="card";

      var image=document.createElement("img");
      image.setAttribute("src",el.image);

      var name=document.createElement("div");
      name.innerText=el.name;

      var desc=document.createElement("div");
      desc.innerText=el.desc;
      desc.id="youlikedesc";

      var prices=document.createElement("div");
      prices.id="pricesdiv";
      var price=document.createElement("p");
      price.innerText=el.price;
      price.id="youlikeprice";
      var pricecut=document.createElement("p");
      pricecut.innerText=el.pricecut;
      pricecut.id="youlikepricecut";
      var off=document.createElement("p");
      off.innerText=el.off;
      off.id="youlikeoff";
      prices.append(price,pricecut,off)

      var addtocart=document.createElement("div");
      addtocart.innerText="ADD TO CART";
      addtocart.id="addtocart";

      card.append(image,name,desc,prices,addtocart);
      document.getElementById("cardcontainer").append(card);
    })
  }

  var Data=[
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/17066222/2022/2/7/d3689563-7fb4-47e7-92c3-c450fa5af4d71644212682390ELLISMenBlueSolid1.jpg",
        name:"ELLIS",
        desc:"Men Printed Ascot Tie",
        price:"₹349",
        pricecut:"₹999",
        off:"(65% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/16922798/2022/1/25/8da04c85-cca4-4fb7-90c6-00b33424e3901643049088352CalvadossPremiumDesignWovenbroadTie1.jpg",
        name:"Calvadoss",
        desc:"Floral Woven Design Broad...",
        price:"₹319",
        pricecut:"₹999",
        off:"(68% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15272206/2021/8/26/7655c463-6edd-4b90-b2fb-d4ab932a27591629989456322GlamvedaMenBeardGrowthShofteningOil15ml1.jpg",
        name:"GLAMVEDA",
        desc:"Beard Oil - 15ml",
        price:"₹330",
        pricecut:"₹350",
        off:"(Rs. 20 OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/14988930/2021/7/30/c08a4c77-ebfe-4d68-b512-7967011778591627664459341AlvaroCastagninoPurpleBlackColouredNecktieforMen1.jpg",
        name:"Alvaro Vastagnino",
        desc:"Men Striped Broad Tie",
        price:"₹349",
        pricecut:"₹999",
        off:"(65% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/4/8/e311beaa-900f-4362-8790-6b2723dfbe2c1617890175348-2.jpg",
        name:"Alvaro Castagnino",
        desc:"Men Pack of 3 Patterned S...",
        price:"₹314",
        pricecut:"₹699",
        off:"(55% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15144930/2021/8/13/84735b0c-68e8-4423-bb67-3414d0901d701628874255040AlvaroCastagninoBlackGreyBlueColouredSockscomboforMen1.jpg",
        name:"Alvaro Castagnino",
        desc:"Men Pack Of 3 Assorted A...",
        price:"₹274",
        pricecut:"₹499",
        off:"(45% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/16345204/2021/12/2/78894e6e-667d-45ac-a376-1c5f2cefc3b31638442840731MancodeClarifyingAcneControlTeaTreeFoamingFaceWash150ml1.jpg",
        name:"MANCODE",
        desc:"Acne Control Face Wash",
        price:"₹325",
        pricecut:"₹450",
        off:"(Rs. 125 OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/17106450/2022/2/9/770946e3-0e9d-4de1-8348-aaf74b247be71644403481708FUZOKUMenBlack1.jpg",
        name:"FUZOKU",
        desc:"Men Round Sunglasses",
        price:"₹359",
        pricecut:"₹799",
        off:"(55% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/6/1/0b3afc6b-6ffd-45da-a99b-8963268a9ad41622538553698-1.jpg",
        name:"Creature",
        desc:"Pack Of 3 Calf-Length Socks",
        price:"₹386",
        pricecut:"₹899",
        off:"(57% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/11968086/2020/6/24/8b1b9e48-f52f-4b51-9cd1-ee1719c5d9a41592990730505BlacksmithMenBlueBlackCheckedPocketSquare1.jpg",
        name:"Blacksmith",
        desc:"Men Checked Pocket Square",
        price:"₹359",
        pricecut:"₹399",
        off:"(10% OFF)",
    },
    {
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15031988/2021/8/4/f9bcf80a-b8be-4c1e-9850-a7f8e827382b1628094703523LIMESTONEAnalogWatchforMen1.jpg",
        name:"LIMESTONE",
        desc:"Men Brass Dial & Watch",
        price:"₹399",
        pricecut:"₹1999",
        off:"(80% OFF)",
    },{
        image:"https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/14869910/2021/7/19/f996a4ea-299c-4023-ab5b-64281932c99a1626713129153AlvaroCastagninoMenPinkSolid1.jpg",
        name:"Alvaro Castagnino",
        desc:"Cufflinks",
        price:"₹399",
        pricecut:"₹799",
        off:"(50% OFF)",
    },
]

//                      ADD TO CART

var cartDatas=JSON.parse(localStorage.getItem("cartdata"))

cartDatas.forEach(function(ele){
    var biggercartcard=document.createElement("div");
    biggercartcard.id="biggercartcard";
    var cartcard=document.createElement("div");
    cartcard.id="cartcard"

    var itemimg=document.createElement("img");
    itemimg.setAttribute("src",ele.img);
    
    var cartdetails=document.createElement("div");
    cartdetails.id="cartdetails";
    var brand=document.createElement("div");
    brand.innerText=ele.brand;
    brand.id="brand";

    var desc=document.createElement("div");
    desc.innerText=ele.name;
    desc.id="desc";

    var sizes=document.createElement("div");
    sizes.id="sizes";
    var size=document.createElement("select");
    size.id="size";
    var size1=document.createElement("option");
    size1.innerText="38";
    var size2=document.createElement("option");
    size2.innerText="40";
    var size3=document.createElement("option");
    size3.innerText="42";
    var size4=document.createElement("option");
    size4.innerText="44";
    size.append(size1,size2,size3,size4)

    var qty=document.createElement("select");
    qty.id="qty";
    var qty1=document.createElement("option");
    qty1.innerText="1";
    qty1.setAttribute("value","1")
    var qty2=document.createElement("option");
    qty2.innerText="2";
    qty2.setAttribute("value","2")
    var qty3=document.createElement("option");
    qty3.innerText="3";
    qty3.setAttribute("value","3")
    var qty4=document.createElement("option");
    qty4.innerText="4";
    qty4.setAttribute("value","4")
    qty.append(qty1,qty2,qty3,qty4);
    sizes.append(size,qty);

    var prices=document.createElement("div");
    prices.id="prices";
    var rate=document.createElement("p");
    rate.innerText="₹ "+ele.price;
    rate.id="rate";
    var costprices=document.createElement("p");
    costprices.innerText="₹ "+ele.costprice;
    costprices.id="costprices";
    var discounts=document.createElement("p");
    discounts.innerText =ele.discount;
    discounts.id="discounts";
    prices.append(rate,costprices,discounts);

    var deliverydate=document.createElement("div");
    deliverydate.innerText="Delivery by "
    deliverydate.id="date";
    var date=document.createElement("span");
    date.innerText="tomorrow";
    date.style.color="#03a685";
    deliverydate.append(date);

   
    cartdetails.append(brand,desc,sizes,prices,deliverydate);
    cartcard.append(itemimg,cartdetails);
    biggercartcard.append(cartcard);
    document.getElementById("items").append(biggercartcard);
})

var totalmrpsum='';
totalmrpsum="3000*"+cartDatas.length;
document.querySelector("#totalmrp").append(eval(totalmrpsum))

var totaldiscount=[];
for(var i=0;i<cartDatas.length;i++){
    totaldiscount.push(eval("-"+cartDatas[i].price))
}
document.querySelector("#discountmrp").append(eval(totaldiscount.join('')))

var final=eval(totalmrpsum)+eval(totaldiscount.join(''));
document.querySelector("#totalamount").append(eval(final))