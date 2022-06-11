




    //start from here 













    //steps:

    //function of get total 
    //create function
    //save local storage
    //clear for inputs
    //read or display 
    //count
    //delete
    //update
    //search
    //clean data or correct data






















    //input class or create inputs :

    let title=document.getElementById('title');
    let price=document.getElementById('price');
    let taxes=document.getElementById('taxes');
    let ads=document.getElementById('ads');
    let discount=document.getElementById('discount');
    let total=document.getElementById('total');

    let count=document.getElementById('count');
    let category=document.getElementById('category');

    let submit=document.getElementById('submit');

    let mood='create';// by this var u will get the mood if the mood is (create or update)
    let temp;// by this var u will gain ur i or index of array 

    //console.log(title,price,taxes,ads,discount,total,count,category,submit);

























    //1)function of get total

    function gettotal(){
        
        if((price.value !== '' || price.value != '') 
        && (taxes.value !== '' || taxes.value != '') 
        && (ads.value !== '' || ads.value != '')  )//&& (discount.value !== '' || discount.value != '')
        {
            //the + sign can convert any string to number
            let result= (+(price.value)+ +(taxes.value)+ +(ads.value) )- +(discount.value);
            
            
            total.innerHTML=' '+ result;
            total.style.background="green";
            total.style.margin=" 0 8px ";
            
        }
        else{
            total.style.background=" rgb(145, 9, 9)";
            total.innerHTML=null;
        }
        
        
    }











    //class input
    //2) create function()  how to create new product in webpage .... with array ... array is the best choice!!


    let productsdata;

    if(localStorage.products != null)
    {
        productsdata=JSON.parse(localStorage.products)
    }
    else{
        productsdata=[];
    }

    submit.onclick=()=>{

        let productsdataobject={

            title:title.value.toLowerCase(),
            price:price.value,
            taxes:taxes.value,
            ads:ads.value,
            discount:discount.value,
            total:total.innerHTML,
            count:count.value,
            category:category.value.toLowerCase()
        }






    if(mood == "create" || mood === "create")
    {

        //title
        if(title.value == "" || title.value === "")
        {
            if(confirm('Your Title Is Empty !!'))
            {return true ;}
            else{}
        }
        
        //price
        if(price.value == "")
        {
            if(confirm('Your Price Is Empty !!'))
            {return true;}
            else{}
        }
        //taxes
        if(taxes.value == "")
        {
            if(confirm('Your Taxes Is Empty !!'))
            {return true;}
            else{}
        }
        //ads
        if(ads.value == "")
        {
            if(confirm('Your Ads Is Empty !!'))
            {return true;}
            else{}
        }
      
      
        //count
        if(+productsdataobject.count > 0)
        {
            for(counter=0 ; counter < +productsdataobject.count ; counter++)
            {
                productsdata.push(productsdataobject);// add values from object to array 
            }

            
        }

        else if(+productsdataobject.count < 0)
        {
            //alert(" ");
            if(confirm('your count must be > 0 !'))
            {
                return true;
            }
            else{ }
        

        }

        else if(+productsdataobject.count == 0 || +productsdataobject.count === 0)
        {
            if(confirm('you did not add any product \n reason : your count is 0'))
                 {
            return true;
              }
                 else{}
        }
        else{
            productsdata.push(productsdataobject);// add values from object to array 
        }
 
    

    }

    
    else{
        productsdata[temp]=productsdataobject;
        mood='create';
        submit.innerHTML="create";
        count.style.display="block";

    }







        localStorage.setItem("products",    JSON.stringify(productsdata)  );// localstorage only takes string 
    // console.log(localStorage.getItem("products"));

    cleardata();
    setTimeout("location.reload(true);", 100);// here u will refresh ur web page at same location 


    }


    function cleardata(){
        
        title.value=null;
        price.value=null;
        taxes.value=null;
        ads.value=null;
        discount.value=null;
        total.value=null;
        count.value=null;
        category.value=null;
    }




















    //class output
    //3)create showdata function:

    function showdata(){
        

    let tbody=document.getElementById('tbody');
    let deletebt=document.getElementById('delete');





    for(let i =0  ;  i<productsdata.length   ; i++ )//tr
    {


    

        let tabledata=String(`
        
        <tr>
        <td>`+(i+1)+`</td>
        <td>`+productsdata[i].title+`</td>
        <td>`+productsdata[i].price+`</td>
        <td>`+productsdata[i].taxes+`</td>
        <td>`+productsdata[i].ads+`</td>
        <td>`+productsdata[i].discount+`</td>
        <td>`+productsdata[i].total+`</td>
        <td>`+productsdata[i].category+`</td>
        <td><button onclick="updatedata(`+i+`)" id="update" title="@Ahmed update button">Update</button></td>
        <td><button  onclick=" deleteproducts(`+i+`) " title="@Ahmed delete button" id="delete">delete</button></td>
    </tr>

    `);





    tbody.innerHTML+=tabledata;



    }




    }
    showdata();









    //class ouput
    //4)delete product function:
    function deleteproducts(numberofproduct)
    {

        if(confirm('are you sure you want to delete this product ?'))
        {
            
        productsdata.splice(numberofproduct,1);
        localStorage.products=JSON.stringify( productsdata );
        setTimeout("location.reload(true);", 500);// here u will refresh ur web page at same location 
        

        }
        else{}
        
    
    
    }










    //class output
    //5) delete all function:

    (function deletealldata(){
    "use strict";
    let classoutput=document.querySelectorAll(' .outputs .searchblock .btnsearch');
    let deleteallbtn=document.createElement('button');
    deleteallbtn.innerHTML="DeleteAll";
    deleteallbtn.style.cssText=` 
    width:100%;
    height: 30px;
    position:relative;
    border: none;
    border-radius: 20px;
    cursor:pointer;
    color: #ffff;
    background: rgb(73, 4, 73);
    text-transform: capitalize;
    left:-30px;
    `;



    for(let i=0 ; i<productsdata.length ; i++)
    {
        if(productsdata.length > 0)
        {
        
            classoutput[0].appendChild(deleteallbtn);
            //deleteallbtn.id="deleteallproducts";

        deleteallbtn.onclick=function(){

            if(confirm('are you sure you want to delete all products ?'))
            {
            productsdata.splice(0,productsdata.length);//here u will delete all producs from index 0 to the end
            localStorage.products=JSON.stringify(productsdata);// new localstorage after delte
            setTimeout("location.reload(true);", 100);// here u will refresh ur web page at same location 
            }
            else{
                
                return true;
                
            }
            
        }
            

        
        }
    }

    })();



    //class outputs:
    //6)function update():

    function updatedata(indexofproduct){
        "use strict";
        title.value=productsdata[indexofproduct].title;
        price.value=productsdata[indexofproduct].price;
        taxes.value=productsdata[indexofproduct].taxes;
        ads.value=productsdata[indexofproduct].ads;
        discount.value=productsdata[indexofproduct].discount;
        gettotal();
    count.style.display="none";
        category.value=productsdata[indexofproduct].category;
        submit.innerHTML="update";
        mood='update';
        temp=indexofproduct;
        scroll(
            {
                top:0,
                behavior:"smooth"
            }
        )


    }











    //class outputs
    //7) search mood
    let searchmood='title';//global var 


        getsearchmood=(button_id)=>{
        "use strict";
    
    let searchbar=document.getElementById('searchbar');

    if(button_id == "searchtitle" || button_id === "searchtitle")
    {
    searchmood="title";
    searchbar.placeholder="Search By Title";
    //searchbar.setAttribute("placeholder","Search By Category");
    }
    else
    {
        searchmood="category";
        //searchbar.setAttribute("placeholder","Search By Category");
        searchbar.placeholder="Search By Category";
    }

    searchbar.focus();
    searchbar.value=null;
    //here also u will delete all array
    tbody.innerHTML="";// start array from 
    showdata();   
   //setTimeout("location.reload(true);", 100);// here u will refresh ur web page at same location 
   




    }






    //class outputs
    //8) create function search()


    searchofdata=(valueofproduct)=>{
        "use strict";
        
        let filteredtable="";// new var and global
        if(searchmood == "title" || searchmood === "title")
        {
            for(let i=0 ; i< productsdata.length ; i++)
            {
                if(productsdata[i].title.includes(valueofproduct.toLowerCase()) )
                {
                    
            

                    filteredtable+=`
        
                    <tr>
                    <td>`+(i+1)+`</td>
                    <td>`+productsdata[i].title+`</td>
                    <td>`+productsdata[i].price+`</td>
                    <td>`+productsdata[i].taxes+`</td>
                    <td>`+productsdata[i].ads+`</td>
                    <td>`+productsdata[i].discount+`</td>
                    <td>`+productsdata[i].total+`</td>
                    <td>`+productsdata[i].category+`</td>
                    <td><button onclick="updatedata(`+i+`)" id="update" title="@Ahmed update button">Update</button></td>
                    <td><button  onclick=" deleteproducts(`+i+`) " title="@Ahmed delete button" id="delete">delete</button></td>
                </tr>
                
                `;
                
            

                }
            }
        }else{
            
            for(let i=0 ; i<productsdata.length ; i++)
            {
                if(productsdata[i].category.includes(valueofproduct.toLowerCase()))
                {
                

                    filteredtable+=`
        
                    <tr>
                    <td>`+(i+1)+`</td>
                    <td>`+productsdata[i].title+`</td>
                    <td>`+productsdata[i].price+`</td>
                    <td>`+productsdata[i].taxes+`</td>
                    <td>`+productsdata[i].ads+`</td>
                    <td>`+productsdata[i].discount+`</td>
                    <td>`+productsdata[i].total+`</td>
                    <td>`+productsdata[i].category+`</td>
                    <td><button onclick="updatedata(`+i+`)" id="update" title="@Ahmed update button">Update</button></td>
                    <td><button  onclick=" deleteproducts(`+i+`) " title="@Ahmed delete button" id="delete">delete</button></td>
                </tr>
                
                `;
                

                }
            }

        }
    
        tbody.innerHTML=filteredtable;
        
    }











