// 8
// 8 8
// 8 8 8
// 8 8 8 8
// 8 8 8 8 8

function pattern1(n) {
  for (var i = 0; i < n; i++) {
    var str = "";
    for (j = 0; j <= i; j++) {
      str += "8 ";
    }
    console.log(str);
  }
}
// pattern1(5)
function pattern1Reverce(n) {
  for (var i = n; i >= 1; i--) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str += "8 ";
    }
    console.log(str);
  }
}
// pattern1Reverce(5-1)

function patternFull(n) {
    // pattern1(n)
    // pattern1Reverce(n-1)
    for(var row=1; row<n*2; row++)
    {
        var totalcol = row>n?2*n-row:row;

        var str = "";
        for(var col=1; col<=totalcol; col++)
        {
            str+="* "
        }
        console.log(str)
    }
}
patternFull(5);
