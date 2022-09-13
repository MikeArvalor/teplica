let slideBig_photo = document.querySelectorAll(".slideBigPhoto")
let smallPict_photo = document.getElementsByClassName("smallPictPhoto"); 
let img_wrap_photo = document.querySelectorAll('.img-wrap-photo')
let modal_img_modal = document.querySelector('.modal_img_modal');
let modalImg_modal = document.getElementById("img01_img_modal");
let captionText_modal_blog = document.getElementById("caption_modal");
let span_img_modal_blog = document.getElementsByClassName("close_img_modal")[0];
let arrImg_photo=[
    'img/фотогалерея_1.jpg',
    'img/фотогалерея_2.jpg',
    'img/фотогалерея_3.jpg',
    'img/фотогалерея_4.jpg',
    'img/фотогалерея_5.jpg',
    'img/фотогалерея_6.jpg'

]; 
function startImg_photo(){
    for( let q =0; q<slideBig_photo.length;q++){
        slideBig_photo[q].setAttribute('src', arrImg_photo[q])
    }
};
startImg_photo()
for(let j=0; j<smallPict_photo.length; j++){ 
    smallPict_photo[j].addEventListener('click',function(e){
       for(let i=0;i<arrImg_photo.length;i++){
           let value =e.target.src.includes(arrImg_photo[i])
           if(value){
            p=i
            console.log(p,'fixed',i)
           }
       }
       modal_img_modal.style.display="block"
       modalImg_modal.src = this.src;        
    })
    
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}
};
span_img_modal.onclick = function() { 
    modal_img_modal.style.display = "none";
}

