function bubbleSort(arr, n) {
    if (n == 0) {
      return arr;
    }
    for (var j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    return  bubbleSort(arr, n-1);
  }
  
  var arr = [1, 5, 6, 2, 4, 3];
  var n = 6;
  
  var ans = bubbleSort(arr, n);
  console.log(ans);
  