var c = 0
function subString(ans,str,n,i)
{
    if(i==n)
    {
        c++;
        if(ans.length>0)
        { 
            
            console.log(ans)
        }
        return
    }
    ans.push(str[i])
    subString(ans,str,n,i+1)
    ans.pop()
    subString(ans,str,n,i+1)
}
ans = []
subString(ans,"abcde",5,0)
console.log(c)


// (timecomplexity = 2*n)