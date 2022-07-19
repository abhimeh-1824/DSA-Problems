function selectionSort(arr,n)
{
    for(var i=0; i<n-1; i++)
    {
        var min = i;
        for(var j = i+1; j<n; j++)
        {
            if(arr[j]<arr[min])
            {
                min = j;
            }
            
        }
        var temp = arr[i]
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

var arr = [1, 5, 6, 2, 4, 3];
var n = 6;

var ans = selectionSort(arr, n);
console.log(ans);
