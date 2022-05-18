

// example code
function toggler(a,b,c) {
    count = 0
    return function (){
        if(count==0)
        {
            console.log(a)
            count++;
        }else if(count == 1)
        {
            console.log(b)
            count++;
        }else{
            console.log(c)
        }
    }
    
}
const toggle = toggler(1,2,3)
toggle()
// 1
toggle()
// 2
toggle()
// 3