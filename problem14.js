const rules = (number)=>{
  if(number%2 === 0) return number/2
  return (3*number)+1
}

const chainLength = (number)=>{
  let length = 1
  while(number !== 1){
    length++
    number = rules(number)
  }
  return length
}

const findLongestChain = (number)=>{
  let biggestChain = 0
  let answer = 0
  for(let i = 1; i < number; i++){
    if(chainLength(i) >= biggestChain) {
      biggestChain = chainLength(i)
      answer = i
    }
  }
  console.log(answer)
  return(answer)
}
//console.log(chainLength(35655))
findLongestChain(1000000)
