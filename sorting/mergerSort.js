// ! merge solve into  2 part 
//  !  1 - divide 
//  ! 2 - merge


function divide(arr,first_index,last_index)
{
    if(first_index>=last_index)
    {
        return;
    }
   var mid = first_index + Math.floor((last_index-first_index)/2)
    divide(arr,first_index,mid)
    divide(arr,mid+1,last_index)
    merge(arr,first_index,mid,last_index)
}

function merge(arr,start,mid,end)
{
    var merged = []
    var i = start;
    var j = mid+1;
    var k = 0;

    while(i<=mid && j<=end )
    {
        if(arr[i]<=arr[j])
        {
            merged[k] = arr[i]
            k++;
            i++;
        }else{
            merged[k] = arr[j]
            k++;
            j++;
        }
    }
    while(i<=mid)
    {
        merged[k] = arr[i]
            k++;
            i++;
    }
    while(j<=end)
    {
        merged[k] = arr[j]
            k++;
            j++;
    }

    for(var i=0, j=start; i<merged.length; i++,j++)
    {
        arr[j] = merged[i]
    }
}

var arr = [1, 5, 6, 2, 4, 3];
var n = 6;

divide(arr,0,n-1);
console.log(arr);