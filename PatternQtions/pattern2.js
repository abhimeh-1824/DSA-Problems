// ----5
// ---45
// --345
// -2345
// 12345

function pattern2(n)
{
    for(var i=n; i>=1; i--)
    {
        var str ="";
        for(var j=1; j<=n; j++)
        {
            if(j>=i)
            {
                str+=j+" "
            }else{
                str+="  "
            }
        }
        console.log(str)
    }
}

pattern2(4)