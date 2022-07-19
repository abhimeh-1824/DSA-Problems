


function diamond(n)
{
    for(var i=1; i<n*2; i++)
    {
        var str = ""
        numberOfCol = i>n?2*n-i:i;
        numberOfSpace = n-numberOfCol;
        for(var k=1; k<=numberOfSpace; k++)
        {
            str+=" "
        }
        for(var j=1; j<=numberOfCol; j++)
        {
            str+="* "
        }
        console.log(str)
    }
}
diamond(5)