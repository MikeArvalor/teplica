let modal_btn = document.getElementById("myModal_btn_send")
let btn = document.getElementById("myBtn")
let btn1 = document.getElementById("myBtn")
let btn2 = document.getElementById("myBtn")
let btn3 = document.getElementById("myBtn")
let btn4 = document.getElementById("myBtn")
let btn5 = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0]
    
    btn.onclick = function() {
      modal_btn.style.display = "block";
      console.log(111)
    }
    
     btn1.onclick = function() {
      modal_btn.style.display = "block";
    }
     btn2.onclick = function() {
      modal_btn.style.display = "block";
    }
      btn3.onclick = function() {
     modal_btn.style.display = "block";
    }
        btn4.onclick = function() {
      modal_btn.style.display = "block";
    }
        btn5.onclick = function() {
      modal_btn.style.display = "block";
    }
     span.onclick = function() {
      modal_btn.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
   