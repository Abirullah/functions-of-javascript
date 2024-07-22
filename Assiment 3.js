function AverageArry(AA){
    if (AA.length=== 0){
        return 0;
    }

    let sum= 0;
for(i=0 ; i<AA.length ; i++){
    sum += AA[i]
}
let average = sum / AA.length;
return average;

}
console.log (AverageArry( [3 ,5 ,7 ]));
console.log (AverageArry( [4 , -10 ]));
console.log (AverageArry( [6 ,8]));
console.log (AverageArry( [ ]));

