const button = document.querySelectorAll(".btn-c");
const screen = document.querySelector('.screen');
let string = "";

// printing number of buttons on the black screen;
function printNum(e){
    try{
        let value=e.target.closest('button').innerHTML;
        if(value == "="){
            screen.innerHTML= eval(string);//*evaluating the value
            string=screen.innerHTML;
        }else if(value == "AC"){
            screen.innerHTML="";//*screen blank
            string=screen.innerHTML;
        }else if(value == "DEL"){
            const total = screen.innerHTML;
            if(total.length>0){
                const delString = total.slice(0,-1);
                console.log(delString);
                screen.innerHTML=delString;//*delete the last number
            }
        }else{
            string=string+value;
            screen.innerHTML=string;//*assigning values through buttons
        }
    }catch(e){
        alert(e);
        screen.innerHTML="Syntax Error";
        setTimeout(() => {
            screen.innerHTML="";
        }, 1000);//*handelling the error
    }
}

if(button){
    button.forEach((e)=>{
        e.addEventListener("click",printNum);
    })
}
