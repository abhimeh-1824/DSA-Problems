function RotedStringOrNot(s1,s2)
{
    for(var i=0; i<s1.length; i++)
    {
        var ans =`${s1[s1.length-1]}`;
        for(var j=0; j<s2.length-1; j++)
        {
            ans+=s1[j]
        }
        if(ans==s2)
        {
            return "Yes"
        }else{
            console.log(ans)
            s1 = ans
        }
    }
    return "No"
}

function findRotedstr(s1,s2)
{
    var s3 = s1+s1;
    if(s1.length!==s2.length)
    {
        return 'No';
    }else if (s3.match(s2)!==null)
    {
        pos = s3.match(s2)
        console.log(pos)
        return "Yes"
    }else {
        return "No"
    }
}




var s1 = "abacd";
var s2 = "cdaba";
let ans = findRotedstr(s1,s2)
console.log(ans)