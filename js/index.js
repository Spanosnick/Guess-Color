// Selection
var restartbtn=document.getElementById("res");
var hardbtn=document.querySelector(".hard");
var easybtn=document.querySelector(".easy");
var boxtitle=document.querySelector(".box-title");
var container=document.getElementsByClassName("container")[1];
var textscore=document.querySelector(".score");
var message=document.getElementsByClassName("message")[0];

$('.rgbcolor').css("color",'red');
// Event listeners to the buttons
restartbtn.addEventListener('click',init);
easybtn.addEventListener('click',easymode);


// Ιnitialization
var score=0;
var randomnumbers=[];
var randbox;
var boxes=document.querySelectorAll(".box");
var color_random_numbers=[];

/// Functions////////////////////////////
function init(){
score=0;
randomnumber();
boxes=document.querySelectorAll(".box");
changecolor();
boxtitle.style.opacity=1;
textscore.style.opacity=1;

}

//Generate Random Numbers
function randomnumber(){
    for (let i=0;i<3;i++){
        randomnumbers[i]=Math.floor(Math.random()*255);
    }
    for (i=0;i<3;i++){
        document.getElementById("num"+(i+1)).innerHTML=randomnumbers[i];
    }
    let numbox=document.querySelectorAll(".box").length;
    randbox=Math.floor(Math.random()*numbox);
}

//Change Colors to the boxes
function changecolor(){
    boxes.forEach(box => {
        for (let i=0;i<3;i++){
            color_random_numbers[i]=Math.floor(Math.random()*255);
        }
        box.style.backgroundColor='rgb('+color_random_numbers[0]+','+color_random_numbers[1]+','+color_random_numbers[2]+")";
        box.style.color='rgb('+color_random_numbers[0]+','+color_random_numbers[1]+','+color_random_numbers[2]+")";
        box.style.border='rgb('+color_random_numbers[0]+','+color_random_numbers[1]+','+color_random_numbers[2]+")";
    });
    boxes[randbox].style.backgroundColor='rgb('+randomnumbers[0]+','+randomnumbers[1]+','+randomnumbers[2]+")";
    boxes[randbox].style.color='rgb('+randomnumbers[0]+','+randomnumbers[1]+','+randomnumbers[2]+')';
}

//Taking the color which clicked
boxes.forEach(box => {
        box.addEventListener('click',function boxcheck(){
        let rgb=this.style.backgroundColor;
        rgb = rgb.substring(4, rgb.length-1)
        .replace(/ /g, '')
        .split(',');
        checking(rgb);
})});




//Checking if the color which clicked is equal to "randomnumbers"
function checking(color){   
    if (color[0]==randomnumbers[0] && color[1]==randomnumbers[1] && color[2]==randomnumbers[2] ){
       score++
       randomnumber()
       changecolor();
       changeui()
    }else if(score>0){
    score --;
    changeui()
    }else if (score==0){
        message.classList.add("messageloser");
        setTimeout(function (){
            message.classList.remove("messageloser");
            init();
        },3001);
        
       }

}

function changeui(){
    textscore.innerHTML='Score:'+score;
}


function easymode(){
    hardbtn.classList.remove('active');
    easybtn.classList.add('active');
    boxes=document.querySelectorAll(".box")
    let boxlength=boxes.length;
    if (boxlength ==8){
        for (let i=0;i<4;i++){
            container.removeChild(boxes[i])
        }
        init();
    }else{
        console.log("boxes are 4");
    }

    boxes=document.querySelectorAll(".box")
}
// To be continued ..... 
