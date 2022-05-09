var products=document.querySelector("#imgbox")

var shirtArr=[
  {
  brand: "Roadster",
  name: "cotton shirt",
  rating:"4.5*| 2.3K",
  tag:"Rs.",
  price: "1999",
  costprice:"Rs.3000",
  discount:"(45%",
  size: "38,40,42,44,46",
  productID: "shirt1",
  color:"Blue",
  datapage:"./roadster.html",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg",
},
{
  brand: "Louis Philippe",
  name: "Men Slim Fit Shirt",
  rating:"4.3*| 3.1K",
  tag:"Rs.",
  price: "399",
  costprice:"Rs.3000",
  discount:"(65%",
  size: "38,40,42,44,46",
  productID: "shirt2",
  color:"Gray",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
},
{
  brand: "Mufti",
  name: "Men Slim Fit Shirt",
  rating:"4.7*| 2.8K",
  tag:"Rs.",
  price: "799",
  costprice:"Rs.3000",
  discount:"(58%",
  size: "38,40,42,44,46",
  productID: "shirt3",
  color:"Blue",
  datapage:"./here&now.html",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9260157/2019/6/1/7e59185c-0a70-4c35-88f4-314a3e8610e11559376771551-HERENOW-Men-Shirts-5171559376770146-1.jpg",
},
{
  brand: "Louis Philippe",
  name: "Men Slim Fit Shirt",
  rating:"3.9*| 1.1K",
  tag:"Rs.",
  price: "2449",
  costprice:"Rs.3000",
  discount:"(15%",
  size: "38,40,42,44,46",
  productID: "shirt4",
  color:"White",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/fe1322b7-9e53-4b6e-8423-0a4f5a9e8b4b1565006161882-Roadster-Men-Shirts-8701565006159466-1.jpg",
},
{
  brand: "HIGHLANDER",
  name: "Men Slim Fit Shirt",
  rating:"4.5*| 3.3K",
  tag:"Rs.",
  price: "1347",
  costprice:"Rs.3000",
  discount:"(25%",
  size: "38,40,42,44,46",
  productID: "shirt5",
  color:"White",
  datapage:"highlender.html",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
},
{
  brand: "Nautica",
  name: "Printed Shirt",
  rating:"4.6*| 2.7K",
  tag:"Rs.",
  price: "979",
  costprice:"Rs.3000",
  discount:"(45%",
  size: "38,40,42,44,46",
  productID: "shirt6",
  color:"Gray",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2347555/2019/12/3/8a890851-860a-4acb-9070-f31f6daf026c1575361938604-HIGHLANDER-Men-White--Blue-Slim-Fit-Striped-Casual-Shirt-304-6.jpg",
},
{
  brand: "HIGHLANDER",
  name: "Cotton Shirt",  
  rating:"4.8*| 4.3K",
  tag:"Rs.",
  price: "2000",
  costprice:"Rs.3000",
  discount:"(45%",
  size: "38,40,42,44,46",
  productID: "shirt7",
  color:"Green",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg",
},
{
  brand: "Nautica",
  name: "Printed Shirt",
  rating:"4.5*| 4.3K",
  tag:"Rs.",
  price: "1347",
  costprice:"Rs.3000",
  discount:"(45%",
  size: "38,40,42,44,46",
  productID: "shirt8",
  color:"Gray",
  img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
},
]

localStorage.setItem("Myntra_Shirts",JSON.stringify(shirtArr))

displayData(shirtArr)

// sorting-----------------------

      function handlepricesort()
      {
        var selected=document.querySelector("#sortprice").value
        console.log(selected)

        if(selected == "none")
        {
            window.location.reload();

        }

        if(selected == "HTL"){
            shirtArr.sort(function(a,b){
                return b.price - a.price;
            });
            displayData(shirtArr);
        }
        if(selected == "LTH"){
            shirtArr.sort(function(a,b){
                return a.price-b.price
            })
            displayData(shirtArr);
        }
      }
  // -------------------------------  

// filter----------------------------

      function filterFun(){
        var brandfilter=document.querySelector("#brandSelect").value
        console.log(brandfilter)

        if(brandfilter == "Brand Name"){
          console.log(shirtArr)
          displayData(shirtArr)
        }
        else{
          var filterlist=shirtArr.filter(function(elem){
            return elem.brand == brandfilter
          })
          console.log(filterlist)
          displayData(filterlist)
        }
        

            
          
          }
        

// ----------------------------------------


// CLEAR ALL---------------------------


    document.querySelector("#clear").addEventListener("click",handleclear)

    function handleclear(){
      window.location.reload();
    }

// --------------------------------------




    function displayData(data)
        {

        document.querySelector("#imgbox").innerHTML="";
      data.forEach(function(elem){
      var card=document.createElement("div");
      card.setAttribute("id","card")


      var image=document.createElement("img");
      image.src=elem.img;
      
      

      var rating=document.createElement("p")
      rating.innerText=elem.rating; 
      rating.setAttribute("id","rating")   
      
      

      var brand=document.createElement("p")
      brand.innerText=elem.brand;
      brand.setAttribute("class","div_style")
      var ancor=document.createElement("a");
      ancor.setAttribute("href",elem.datapage)
      ancor.append(brand);
      ancor.style.textDecoration="none";
      ancor.style.color="black"




      var text=document.createElement("p")
      text.innerText=elem.name;
      text.setAttribute("class","name_style")



      var tag=document.createElement("span");
      tag.innerText=elem.tag
      tag.style.color="rgb(15, 15, 15)"
      tag.style.fontSize="13px"
      tag.style.fontWeight="bold"



      var price=document.createElement("span");
      price.innerText=elem.price
      price.setAttribute("class","price_style")


      var costprice=document.createElement("span")
      costprice.innerText=elem.costprice
      costprice.setAttribute("class","cost_style")

          
      var discount=document.createElement("span")
      discount.innerText=elem.discount
      discount.setAttribute("class","discount_style")

      var off=document.createElement("span")
      off.innerText="OFF)"
      off.style.color= "#ff905a";
      off.style.fontSize="12px"
      off.style.marginLeft="2px"

      
      card.append(image,rating,ancor,text,tag,price,costprice,discount,off)
      products.append(card)

    })
  
// need to connect mamta's page here


  // document.querySelector("#card").addEventListener("click",clickFun)
  // function clickFun(){
  // window.location.href="https://www.cricbuzz.com/"
  // }
}




