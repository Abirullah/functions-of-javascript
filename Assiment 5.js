function factctrol(F){
    if( F<0){
        return NaN;
}
let result=1;
for(let i=2 ; i<=F ; i++){
    result *=i;
}
return result;

} 
console.log(factctrol(6));
console.log(factctrol(-5));
console.log(factctrol(8));
console.log(factctrol(1));
