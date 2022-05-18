
function callbackfun()
{
    alert("Fetch is Susscefull")
}
const callThrottler = throttler(callbackfun,5000)

document.querySelector("#btn").addEventListener("click",callThrottler)





function throttler(fun,delay)
{
    var flag = true
    var  i =5;
    let timer;
    return function (){
        if(flag)
        {
            
            fun()
            flag = false
            timer =  setInterval(()=>{
                document.querySelector("#message").innerHTML=""
                if(i)
                    document.querySelector("#message").append(`Button is anactive active in 5 second :-${i--}`)
                    else
                    document.querySelector("#message").append(`Button is active plc click`)
                },800)
           
                setTimeout(()=>{
                    console.log(i)
                    flag = true
                    clearInterval(timer)
                    i =5;
                },delay)
      
        }
        
    }  
}
