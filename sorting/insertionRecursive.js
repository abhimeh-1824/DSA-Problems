

function insertionSort(arr,n,i=1)
{
    if(i==n)
    {
        return arr
    }
        var value = arr[i];
        var index = i;
        while(index>0 && arr[index-1]<value)
        {
            arr[index] = arr[index-1]
            index = index-1;
        }
        arr[index] = value;

    return insertionSort(arr,n,i+1)
}

var arr = [1, 5, 6, 2, 4, 3];
var n = 6;

var ans = insertionSort(arr, n);
console.log(ans);