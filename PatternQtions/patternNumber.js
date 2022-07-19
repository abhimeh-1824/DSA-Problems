// 1
// 1 2
// 1 2 3
// 1 2 3 4

function pattern1Number(n)
{
    for(var i=1; i<=n; i++)
    {
        var str="";
       for(var j=1; j<=i; j++)
         {
            str+=j+" ";
        }
        console.log(str)
    }
}
pattern1Number(5)

function pattern1NumberReverse(n)
{
    for(var i=n; i>=1; i--)
    {
        var str ="";
        for(var j=i; j>=1; j--)
        {
            str+=j+" ";
        }
        console.log(str)
    }
}
pattern1NumberReverse(5)