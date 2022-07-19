function triangle(n)
{
    for(var i=1; i<=n; i++)
    {
        var str = ""
        for(var j=1; j<=n-i; j++)
        {
            str+=" "
        }
        for(var j=1; j<=i; j++)
        {
            str+="* "
        }
        console.log(str)
    }
}
triangle(5)

function reversetriangle(n)
{
    for(var i=n; i>=1; i--)
    {
        var str = ""
        for(var j=1; j<=n-i; j++)
        {
            str+=" "
        }
        for(var j=1; j<=i; j++)
        {
            str+="* "
        }
        console.log(str)
    }
}
reversetriangle(5)




