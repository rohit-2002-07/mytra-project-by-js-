
let bagItems;
onload();



function onload(){
bagItemsStr=localStorage.getItem('bagItems');
bagItems=bagItemsStr?JSON.parse(bagItemsStr) : [];
displyitemsInhomePage();
displayBagCount() 
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagCount();
}

function displayBagCount() {
    let bagItemsElement=document.querySelector('.bagItomeCount');
    if(bagItems.length>0){
        bagItemsElement.innerText=bagItems.length;
        bagItemsElement.style.visibility='visible';
    }else{
        bagItemsElement.style.visibility='hidden';
    }
   
}

function displyitemsInhomePage(){
   
    
    let itemElement=document.querySelector(".items-Container");
     console.log(itemElement);
    if(!itemElement){
        return;
    }
let innerHtml='';
 items.forEach(item => {
    innerHtml +=`
             <div class="item-contener">
                <img class="image" src="${item.image}" alt="item image">
            
                <div class="rating">
                    ${item.rating.stars}⭐ |${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}
                </div>
                <div class="price">
                    <span class="current-price">Rs. ${item.current_price}</span>
                    <span class="orignle-price">Rs. ${item.original_price}  </span>
                    <span class="discount-persentage">(${item.discount_percentage}%OFF)</span>
                </div>
                <div class="add-tiem" onclick="addToBag(${item.id})">Add To Cart </div>
            </div>
`})
itemElement.innerHTML=innerHtml;
}
