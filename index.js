const checkbox=document.getElementById("textbox");
const tofehrenheit=document.getElementById("tofehrenheit");
const tocelcius=document.getElementById("tocelcius");
const result=document.getElementById("result");
const button=document.getElementById("button");
let temp;
function convert(){
    if(tofehrenheit.checked){
        temp=Number(checkbox.value);
        temp=temp*9/5+32;
        result.textContent=`${temp}°F`;

    }
    else if(tocelcius.checked){
        temp=Number(checkbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=`${temp}°C`;
    }
    else{
        result.textContent=`select a unit`;
    }
}