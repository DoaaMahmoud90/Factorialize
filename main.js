function factorialize(n){
if(n === 0){
  return 1;

}else if(n>0){
  let result = n;
  for(let i = 1; i < n ; i++){
    result = result * (n-i);
  }
  return result;
}
}

console.log(`0! = ${factorialize(0)}`);
console.log(`5! = ${factorialize(5)}`);
console.log(`10! = ${factorialize(10)}`);
console.log(`20! = ${factorialize(20)}`);