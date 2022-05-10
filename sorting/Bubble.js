function bubbleSort(arr,n)
{
    for(var i=0; i<n-1; i++)
    {
        for(var j=0; j<n-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var arr = [1, 5, 6, 2, 4, 3];
var n = 6;

var ans = bubbleSort(arr, n);
console.log(ans);
