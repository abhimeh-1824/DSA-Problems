function longestPllindrom(str)
{
    var low,high,end,start;
    var maxlength = -Infinity
    for(var i=0; i<str.length; i++)
    {
        low = i-1;
        high = i
        while(low>0 && high<str.length && str[low]===str[high])
        {
            if(high-low+1>maxlength)
            {
                start=low;
                end = high;
                maxlength = high-low+1
            }
            low--;
            high++;
        }

        low = i-1;
        high = i+1;
        while(low<0 && high>str.length && str[low]===str[high])
        {
            if(high-low+1>maxlength)
            {
                start=low;
                end = high;
                maxlength = high-low+1
            }
            low--;
            high++;
        }
    }
    var ans = "";
    for(var i=start; i<=end; i++)
    {
        ans+=str[i];
    }
    console.log(ans,start,end)
}

longestPllindrom("forgeeksskeegfor")