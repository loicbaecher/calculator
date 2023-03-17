//Math functions:

function add(x,y){
    return(x+y);
}

function substract(x,y){
    return(x-y);
}

function multiply(x,y){
    return(x*y);
}

function divide(x,y){
    return(x/y);
}

function operate(x,y,choos){
    return(choos(x,y));
}

//add clear function
clear=document.querySelector("button.clear");
clear.addEventListener('click',function(e){
    screen.textContent=0;
})

//Add click sound to each key
buttons=document.querySelectorAll("button");
buttons=Array.from(buttons);
buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        audio=new Audio ("Sounds/key.mp3");
        audio.play();
    })
})

//When clicking on an operator, store the first number
opers=document.querySelectorAll("button#operator");
opers=Array.from(opers);
opers.forEach((oper)=>{
    oper.addEventListener('click',function(e){
        if(store!=[]){
            store=screen.textContent;
        }
        else(){
            
        }
        store=screen.textContent;
        ope=
    })
})

//Add the number to the display when pressing a key
buttons=document.querySelectorAll("button#number");
buttons=Array.from(buttons);
screen=document.querySelector("div.screen");
let currentnumber=[];
buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        currentnumber.push(e.target.textContent)
        if(screen.textContent==0 && e.target.textContent=="0"){
            currentnumber=[]
        }
        else{
        screen.textContent=currentnumber.join(",").replaceAll(","," ");
        }
    })
})

//add clear function
clear=document.querySelector("button.clear");
clear.addEventListener('click',function(e){
    screen.textContent=0;
    currentnumber=[];
})

