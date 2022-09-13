let slideBigPict = document.querySelector('.slideBigPict')
let slideBig = document.querySelectorAll(".slideBig")
let img_gal1 = document.querySelector('.img_gal1')
let smallPict = document.getElementsByClassName("smallPict")
let img_wrap = document.querySelectorAll('.img-wrap')
let bigPict = document.getElementById("bigPict")
let modal_img = document.getElementById('myModal_img')
let modalImg = document.getElementById("img01_img")
let captionText_modal = document.getElementById("caption_modal")
let span_img_modal = document.getElementsByClassName("close_img_modal")[0]
let arrImg=[
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg',
    'img/4м_2.jpg'

]; 
function startImg(){
    for( let q =0; q<slideBig.length;q++){
        slideBig[q].setAttribute('src', arrImg[q])
    }
};
startImg()
for(let j=0; j<smallPict.length; j++){ 
    
    smallPict[j].addEventListener('click',function(e){
       for(let i=0;i<arrImg.length;i++){
           let value =e.target.src.includes(arrImg[i])
           if(value){
            p=i
            console.log(p,'fixed',i)
           }
       }
       modal_img.style.display = "block";
       modalImg.src = this.src;
        const smallPictClone = e.target.cloneNode(false)
        let event_c = e.target
              cleanNode(bigPict)
              bigPict.append(smallPictClone)          
    })
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}
};
span_img_modal.onclick = function() { 
    modal_img.style.display = "none";
}
// SMALL PHOTO
let smallPict_small = document.getElementsByClassName("smallPict_small"); 
let img_wrap_small = document.querySelectorAll('.img-wrap-small')
let modal_img_small = document.querySelector('.modal_img_small');
let modalImg_small = document.getElementById("img01_img_small");
let captionText_small = document.getElementById("caption_small");
let span_img_small = document.getElementsByClassName("close_img_small")[0];
let text_photo_small = document.querySelector('.text_modal');
let arrImg_small=[
    'img/первый_блок_3.png',
    'img/первый_блок_2.jpg',
    'img/второй_блок_3.jpg',
    'img/второй_блок_2.jpg',
    'img/третий_блок_3.jpg',
    'img/третий_блок_2.jpg',
    'img/четвертый_блок_3.jpg',
    'img/четвертый_блок_2.jpg',
    'img/пятый_блок_3.jpg',
    'img/пятый_блок_2.jpg',
    'img/восьмой_блок_3.jpg',
    'img/восьмой_блок_2.jpg'

]; 
let arrText_small=[
    'Крепление на уголок',
    'Старый сварной шов',
    'Поперечина в плоскости дуги',
    'Поликарбонат не выдерживает снеговой нагрузки',
    'Соединения не прокручиваются',
    'Один болт соединения способствует вращению',
    'Крепление насквозь к трубе',
    'Неправильный способ крепления фурнитуры',
    'Легкая установка на любую поверхность за счет фундамента-обвязки',
    'Нижняя поперечина не достает до земли',
    'Поликарбонат с УФ защитой',
    'Поликарбонат без УФ защиты'
]
function startImg_small(){
    for( let q =0; q<slideBig.length;q++){
        slideBig[q].setAttribute('src', arrImg_small[q])
        slideBig[q].style.height = "180px"
    }
    for(let w = 0;w<BigslideBig.length;w++){
        BigslideBig[w].setAttribute('value',arrText_small[w])
    }
};
startImg_small()
for(let j=0; j<smallPict_small.length; j++){ 
    
    smallPict_small[j].addEventListener('click',function(e){
        let text_small
        for (let j = 0; j<arrText.length; j++){
            text_small = arrText_small[j]
            if(text_small){
                p = j
            }
           }
       for(let i=0;i<arrImg_small.length;i++){
           let value =e.target.src.includes(arrImg_small[i])
           if(value){
            p=i
            console.log(p,'fixed',i)
           }
       }
       modal_img_small.style.display = "block";
       modalImg_small.src = this.src;
       text_photo_small.value = arrText_small[j]    
        const smallPictClone = e.target.cloneNode(false)
        let event_c = e.target
              cleanNode(bigPict)
              bigPict.append(smallPictClone)          
    })
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}
};
span_img_small.onclick = function() { 
    modal_img_small.style.display = "none";
}

