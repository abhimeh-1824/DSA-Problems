var str1 = "XY";
var str2 = "12";
var output = "X1Y2";

function concrate(str1,str2,output)
{
    l1 = str1.length;
    l2 = str2.length;
    l3 = output.length;
    console.log(l1,l2,l3)

    i=0;
    j=0;
    k=0;
    f = 0;
    if((l1+l2)!==l3)
    {
        console.log("No","1")
        return 
    }else{
        while(k<l3)
        {
            if(i<l1 && str1[i]===output[k])
            {
                i++;
            }else if(j<l2 && str2[j]===output[k])
            {
                j++;
            }else{
                f = 1;
                break;
            }
            k++;
        }
    }
    if(f)
    {
        console.log("NO")
        return
    }else{
        console.log("Yes")
        return
    }
}
concrate(str1,str2,output)