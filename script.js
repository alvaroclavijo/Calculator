var history2="";
var lastclicked = "";
var result = "";

function buttonPressed(value){
    if (lastclicked == "=" && (value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9 || value == 0 || value == "." )){
        history2 = "";
        history2 = history2 + value;
    }else if (lastclicked == "=" && (value == "+" || value == "-" || value == "*" || value == "/")){
        history2 = result + value;
    }else if (value=="ac"){
        history2="";
        let screenResult = document.getElementById("screen-result");
        screenResult.innerHTML="0";
    }else if(value=="del"){
        history2=history2.slice(0,-1);
    }else if(value=="="){
        result = eval(history2);
        result = result.toFixed(7);
        let screenResult = document.getElementById("screen-result");
        screenResult.innerHTML="="+result;
        
    }else{
        history2=history2+value;
    }    
    historyUpdate();
    lastclicked = value;    
}

function historyUpdate(){
    let screenOperations=document.getElementById("screen-operations");
    screenOperations.innerHTML=history2;
}


  



