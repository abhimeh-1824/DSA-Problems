function selectionSort(arr,n,k=0)
{
    if(k==n)
    {
        return arr
    }
    var min = k;
    for(var j = k+1; j<n; j++)
    {
        if(arr[j]<arr[min])
        {
            min = j;
        }
    }
    var temp  = arr [k];
    arr[k] = arr[min];
    arr[min] = temp;

    return selectionSort(arr,n,k+1)

}

var arr = [1, 5, 6, 2, 4, 3];
var n = 6;

var ans = selectionSort(arr, n);
console.log(ans);







