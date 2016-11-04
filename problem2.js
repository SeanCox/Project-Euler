let fib = [1,2]
let answer = 0

while(fib[fib.length-1] <= 4000000){
  fib.push(fib[fib.length-1] + fib[fib.length-2])
}

answer = fib.reduce((acc,cur)=>{
  if(cur % 2 === 0) return acc + cur
  return acc
},0)

console.log(answer)
return answer
