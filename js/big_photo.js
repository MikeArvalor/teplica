let bigPhoto = document.getElementsByClassName("bigPhoto")
let BigslideBig = document.querySelectorAll(".bigSlideBig")
let modal_img_big = document.querySelector('.modal_img_small');
let modalImg_big = document.getElementById("img01_img_small");
let captionText_big = document.getElementById("caption_small");
let text_photo = document.querySelector('.text_modal');
let arrImg_big=[
    'img/первый_блок_1.jpg',
    'img/второй_блок_1.jpg',
    'img/третий_блок_1.jpg',
    'img/четвертый_блок_1.jpg',
    'img/пятый_блок_1.jpg',
    'img/восьмой_блок_1.jpg'
]; 
let arrText=[
    'Новая технологичная теплица ComfortProm',
    'Продуманная конструкция',
    'Новый кронштейн с четырехточечным креплением',
    'Вся фурнитура на болтах',
    'Нижняя поперечина лежит на земле',
    'Качественный поликаронат TitanPlast с УФ'
]
function startImg_big(){
    for( let q =0; q<BigslideBig.length;q++){
        BigslideBig[q].setAttribute('src', arrImg_big[q])    
         }
    for(let w = 0;w<BigslideBig.length;w++){
        BigslideBig[w].setAttribute('value',arrText[w])
    }
};
startImg_big()
for(let j=0; j<bigPhoto.length; j++){ 
    bigPhoto[j].addEventListener('click',function(e){
        let text 
        for (let j = 0; j<arrText.length; j++){
            text= arrText[j]
            if(text){
                p = j
            }
           }
       for(let i=0;i<arrImg_big.length;i++){
           let value =e.target.src.includes(arrImg_big[i])
           if(value){
            p=i
            console.log(p,'fixed',i)
           }
        }
       modal_img_big.style.display = "block";
       modalImg_big.src = this.src;
       text_photo.value = arrText[j]       
    })
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}
};
