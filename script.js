const nums = document.querySelector('nums');
let btn = document.querySelectorAll('.a');
const eraseall = document.querySelector('.eraseall')
// const erase = document.querySelector('.erase');
const equal = document.querySelector('.equal');
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const mult = document.querySelector('.mult');
const divide = document.querySelector('.divide');
const func = document.querySelectorAll('.c');
const para = document.querySelector('p')

const input = document.querySelector('.x');
const rinput = document.querySelector('.z');

let calc = null;
let num1 = null;
let num2 = null;
let num3 = null;
let num4 = null;

function neg(num){
    num = Number(num);
    return -1 * num;
}
function addEvent(but){
    but.addEventListener('click', ()=>{
        rinput.value += but.textContent;
        input.value += Number(but.textContent);
        rinput.classList.add('rep');})
}

btn.forEach(addEvent)

/*btn.forEach((but) =>{
        but.addEventListener('click', ()=>{
        rinput.value += but.textContent;
        input.value += Number(but.textContent);
        rinput.classList.add('rep');


    })
});*/




divide.addEventListener('click', () =>{
    input.classList.add('mtp');
    if(input.value > 0){

        if(input.classList.contains('i') && (input.classList.contains('tulp') || input.classList.contains('mtp') && input.classList.contains('i'))){
            num1 -= num4;
            num1 -= num3;
        }

        switch(para.textContent){
            case ' ÷ ':
                num3 = num3 / Number(input.value);
            break;
            case ' x ':
               num4 = num4 * Number(input.value);
                
            default:
                num3 += Number(input.value);
        }
    }

    input.value = null;
    input.classList.remove('tulp');
});




mult.addEventListener('click', () =>{
    if(input.value > 0){
        
        if(input.classList.contains('i') && input.classList.contains('tulp') || input.classList.contains('mtp') && input.classList.contains('i')){
            num1 -= num4;
            num1 -= num3;
        }
        input.classList.add('tulp');
        switch(para.textContent){
            case ' ÷ ':
                num3 = num3 / Number(input.value);
            // num1 += num3;
            break;
            case ' x ':
                num4 = num4 * Number(input.value);
            break;
            default:
                num4 += Number(input.value)
        }
    }
    input.value = '';
    input.classList.remove('mtp');
});



add.addEventListener('click', () =>{

    if(input.classList.contains('tulp')){
        num4 = num4 * Number(input.value);              // MULTIPLICATION
    }else if(input.classList.contains('mtp')){
        num3 = num3 / Number(input.value);              //DIVISION
    }else if(input.classList.contains('di')){
        num1 -= Number(input.value);                 //JUST ADD
    }else{ num1 += Number(input.value)} 

    if(input.classList.contains('i')){
        num1 -= num4;
        num1 -= num3;
    }else{
        num1 += num4;
        num1 += num3;
    }

    //num1 += num3;
    num4 = null;
    num3 = null;
    input.classList.remove('tulp');
    input.classList.remove('i');
    input.classList.remove('mtp');
    input.value = null;
    
});


add.addEventListener('click', () =>{

    if(input.classList.contains('tulp')){
        num4 = num4 * Number(input.value);              // MULTIPLICATION
    }else if(input.classList.contains('mtp')){
        num3 = num3 / Number(input.value);              //DIVISION
    }else if(input.classList.contains('di')){
        num1 -= Number(input.value);                 //JUST ADD
    }else{ num1 += Number(input.value)} 

    if(input.classList.contains('i')){
        num1 -= num4;
        num1 -= num3;
    }else{
        num1 += num4;
        num1 += num3;
    }

    //num1 += num3;
    num4 = null;
    num3 = null;
    input.classList.remove('tulp');
    input.classList.remove('i');
    input.classList.remove('mtp');
    input.value = null;
    
});

func.forEach((fun) =>{
    fun.addEventListener('click', () =>{
        para.textContent = fun.textContent;
//Added the following code to make the function symbol change whenever typed again with a function
        if(rinput.classList.contains('rep')){
            rinput.value += para.textContent;
        }else{
            rinput.value = rinput.value.slice(0, rinput.value.length -3);
            rinput.value  += para.textContent;
        }
        if(fun !== ' - '){
           input.classList.replace('di', 'de');
        }
        rinput.classList.remove('rep');
    })
})




minus.addEventListener('click', () =>{
    if(input.value == ''){
        input.classList.replace('de', 'di');
    }else{
            if(input.classList.contains('mtp') && input.classList.contains('di')){
                num3 = num3 / neg(Number(input.value));
            }else if(input.classList.contains('mtp') && input.classList.contains('de')){
                num3 = num3 / Number(input.value);
            }else if(input.classList.contains('tulp')){
                num4 = num4 * Number(input.value);
            }else if(input.classList.contains('mtp')){
                num3 = num3 / Number(input.value);
            }
                // ABOVE IS THE CODE FOR DIVISION
            else if(input.classList.contains('i')){
                num2 += Number(input.value);
            }else{
                num1 += Number(input.value);
            };

            if(input.classList.contains('di')){
                num1 -= num4;
                num1 -= num3;
            }else{
                num1 += num4;
                num1 += num3;
            }
            input.classList.add('i');
            input.classList.replace('de', 'di');
            num3 = null;
            num4 = null;
            input.classList.remove('mtp');
            input.classList.remove('tulp');
            input.value = null;
        } 
        
});

// WE WILL USE THE SWITCH HERE LATER ON !!!
// THE WAY I BUILD IT IS THAT THE EQUAL SIGN IS MAINLY INVOLVED WITH THE LAST INPUT VALUE THE REST OF THE CALCULATIONS ARE DONE BY THE ARITHMETIC FUNCTIONS

equal.addEventListener('click', () =>{
    if(para.textContent == ' + '){
    rinput.value = num1 + neg(num2) + Number(input.value);
}else if(para.textContent == ' - '){
    rinput.value = num1 + neg(num2) - Number(input.value);
}else if(para.textContent == ' ÷ '){
    if(input.classList.contains('i')){
        rinput.value = num1 + neg(num2) - num3 / Number(input.value);
    }else{
        rinput.value = num1 + neg(num2) + num3 / Number(input.value);
    }
}else if(para.textContent == ' x '){
    if(input.classList.contains('i')){
    rinput.value = num1 + neg(num2) - num4 * Number(input.value);
    }else{
        rinput.value = num1 + neg(num2) + num4 * Number(input.value);
    };
}
    num1 = Number(rinput.value);
    input.classList.replace('di', 'de');
    input.classList.remove('i');
});

eraseall.addEventListener('click', () =>{
    input.value = '';
    rinput.value = '';
    num1 = null;
    num2 = null;
    num3 = null;
    num4 = null;
    input.classList.replace('di', 'de');
    input.classList.remove('mtp','tulp','i','rep');
    para.textContent = '';

})


