let slideBig_price = document.querySelectorAll(".slideBigPrice")
let smallPict_price = document.getElementsByClassName("smallPictPrice"); 
let img_wrap_price = document.querySelectorAll('.img-wrap-price')
let span_img_price = document.getElementsByClassName("close_img")[0];
let arrImg_price = [
    'img/фото_цена_1.jpg',
    'img/фото_цена_1.jpg',
    'img/фото_цена_1.jpg',
    'img/фото_цена_1.jpg'

]; 
function startImg_price(){
    for( let q =0; q<slideBig_price.length;q++){
        slideBig_price[q].setAttribute('src', arrImg_price[q])
    }
};
startImg_price()
for(let j=0; j<smallPict.length; j++){    
    smallPict_price[j].addEventListener('click',function(e){
       for(let i=0;i<arrImg_price.length;i++){
           let value =e.target.src.includes(arrImg_price[i])
           if(value){
            p=i
            console.log(p,'fixed',i)
           }
       }      
    })
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}
};
span_img.onclick = function() { 
    modal_img.style.display = "none";
}