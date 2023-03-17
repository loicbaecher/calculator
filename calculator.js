//Math functions:

function add(x,y){
    x=parseInt(x);
    y=parseInt(y);
    return(x+y);
}

function substract(x,y){
    return(x-y);
}

function multiply(x,y){
    return(x*y);
}

function divide(x,y){
    if(y=="0"){
        return("ERROR")
    }
    else{
        return(Math.round((x/y)*100)/100);
    }
}

function operate(x,y,ope){
    return(ope(x,y));
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
screen=document.querySelector("div.screen");
opers=Array.from(opers);
let store=[];
let ope="";
opers.forEach((oper)=>{
    oper.addEventListener('click',function(e){
        if(store.length==0){
            store.push(screen.textContent);
        }
        currentnumber=[];
        if(ope==""){
            ope=e.target.getAttribute("class");
        }
        else{
            switch(ope){
                case "add":screen.textContent=operate(store,screen.textContent,add) 
                break;
                case "substract":screen.textContent=operate(store,screen.textContent,substract)
                break;
                case "multiply":screen.textContent=operate(store,screen.textContent,multiply)
                break;
                case "divide":screen.textContent=operate(store,screen.textContent,divide)
                console.log(operate(store,screen.textContent,divide));
                    if((operate(store,screen.textContent,divide))==NaN){
                        return("ERROR");
                    }
                    else{
                        screen.textContent=operate(store,screen.textContent,divide);
                    }
                break;
            };
            store=screen.textContent;
            ope=e.target.getAttribute("class");
        }
    })
})

equal=document.querySelector("button.equal")
equal.addEventListener('click',function(e){
    switch(ope){
        case "add":screen.textContent=operate(store,screen.textContent,add) 
        break;
        case "substract":screen.textContent=operate(store,screen.textContent,substract)
        break;
        case "multiply":screen.textContent=operate(store,screen.textContent,multiply)
        break;
        case "divide":
            if(operate(store,screen.textContent,divide)=="ERROR"){
                return("ERROR");
            }
            else{
                screen.textContent=operate(store,screen.textContent,divide);
            }
        break;
    };
})

//Add the number to the display when pressing a key
buttons=document.querySelectorAll("button#number");
buttons=Array.from(buttons);
screen=document.querySelector("div.screen");
var currentnumber=[];
buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        currentnumber.push(e.target.textContent)
        if(screen.textContent==0 && e.target.textContent=="0"){
            currentnumber=[]
        }
        else{
        screen.textContent=currentnumber.join(",").replaceAll(",","");
        }
    })
})

//add clear function
clear=document.querySelector("button.clear");
clear.addEventListener('click',function(e){
    screen.textContent=0;
    currentnumber=[];
    store=[];
    ope="";
})

