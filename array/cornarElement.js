function cornerElelmentMaxSum(arr,n,k)
{
    var front_sum = 0
        for(var i=0; i<k; i++)
        {
            front_sum+=arr[i];

        }
        var max_sum = front_sum
        var count = 0;
        for(var i=0; i<k; i++)
        {
            front_sum = front_sum-arr[k-1-i];
            front_sum +=arr[n-1-i] 
            if(max_sum<front_sum)
            {
                max_sum = front_sum
            }
            count++;
        }
        console.log(max_sum,count)
}

arr = [8, 4, 4, 8, 12, 3, 2, 9]
k = 3
cornerElelmentMaxSum(arr,arr.length,k)