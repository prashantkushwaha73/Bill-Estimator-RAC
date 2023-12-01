
var tonn=0;
var timee=0;
var pricee=0;
function result(t1,tonn,timee,pricee,out){
    var cop=(t1+273)/(out-t1);
    var power=(tonn/cop)*timee*30*pricee*3.5;
    return power;
}

function assign(){
    tonn=document.getElementById("ton").value;
    timee=document.getElementById("hours").value;
    pricee=document.getElementById("cost").value;
    if(tonn<=0 || timee<=0 || pricee<=0){
    
        alert("please the valid data , data can't be negative neither 0 ,please have a look");
        return 0;
    }
    
    
    document.getElementById("50.1").innerText = Math.floor(result(18,tonn,timee,pricee,50));
    document.getElementById("50.2").innerText = Math.floor(result(20,tonn,timee,pricee,50));
    document.getElementById("50.3").innerText = Math.floor(result(22,tonn,timee,pricee,50));
    document.getElementById("50.4").innerText = Math.floor(result(24,tonn,timee,pricee,50));
    document.getElementById("50.5").innerText = Math.floor(result(26,tonn,timee,pricee,50));

    document.getElementById("45.1").innerText = Math.floor(result(18,tonn,timee,pricee,45));
    document.getElementById("45.2").innerText = Math.floor(result(20,tonn,timee,pricee,45));
    document.getElementById("45.3").innerText = Math.floor(result(22,tonn,timee,pricee,45));
    document.getElementById("45.4").innerText = Math.floor(result(24,tonn,timee,pricee,45));
    document.getElementById("45.5").innerText = Math.floor(result(26,tonn,timee,pricee,45));

    document.getElementById("40.1").innerText = Math.floor(result(18,tonn,timee,pricee,40));
    document.getElementById("40.2").innerText = Math.floor(result(20,tonn,timee,pricee,40));
    document.getElementById("40.3").innerText = Math.floor(result(22,tonn,timee,pricee,40));
    document.getElementById("40.4").innerText = Math.floor(result(24,tonn,timee,pricee,40));
    document.getElementById("40.5").innerText = Math.floor(result(26,tonn,timee,pricee,40));

    document.getElementById("35.1").innerText = Math.floor(result(18,tonn,timee,pricee,35));
    document.getElementById("35.2").innerText = Math.floor(result(20,tonn,timee,pricee,35));
    document.getElementById("35.3").innerText = Math.floor(result(22,tonn,timee,pricee,35));
    document.getElementById("35.4").innerText = Math.floor(result(24,tonn,timee,pricee,35));
    document.getElementById("35.5").innerText = Math.floor(result(26,tonn,timee,pricee,35));

    document.getElementById("front").style.display = "none";
    document.getElementById("back").style.display= "block";
}






