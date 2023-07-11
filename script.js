let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
}

var ul= document.querySelector('.navbar ul')
var menuBtn = document.querySelector('#burguer')

function MenuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}