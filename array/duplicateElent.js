



function duplicateElement(arr)
{
    var slow = arr[0];
    var fast = arr[0];

    do{
        slow = arr[slow];
        fast = arr[arr[fast]]
    }while(slow!==fast)
    fast = arr[0];
    while(slow!=fast)
    {
        slow = arr[slow];
        fast = arr[fast];
    }
    console.log(slow)
}
// arr = [1, 2, 3, 4 ,3]
arr = [1, 2, 5, 6, 3, 5, 1]

duplicateElement(arr)

///////////////////////////////////////////


function duplicateElementmultiple(arr)
{
    for(var i=0; i<arr.length; i++)
    {
        arr[arr[i]%arr.length] = arr[arr[i]%arr.length]+arr.length;
    }

    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>=arr.length*2)
        {
            console.log(i);
        }
    }
}
duplicateElementmultiple(arr)