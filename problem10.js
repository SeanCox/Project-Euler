const sumPrimesUnder = (number)=>{
    let primesArray = []
    let answer = 0
    for(let i = 2; i < number; i++){
      if(isPrime(i)){
        console.log(i)
        primesArray.push(i)
      }
    }
    console.log(primesArray)
    answer = primesArray.reduce((total, current)=>{
      return total + current
    },0)

    console.log(answer)
    return answer
}

const isPrime = (number)=>{
  let bool = true
  for(let i = 2; i < Math.sqrt(number*2); i++){
    if(number%i === 0){
      bool = false
      break
    }
  }
  return bool
}

sumPrimesUnder(2000000)
