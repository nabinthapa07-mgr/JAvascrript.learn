let count =10;
let interval=setInterval(function(){
    if (count>=1){
        count--
        console.log("countdown begins",count)
    }else{
       clearInterval(interval)
    }
},1000)