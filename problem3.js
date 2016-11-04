//largest prime factor
//600851475143

const largestPrimeFactor = (number)=>{
  let answer
  let largestPossibleAnswer = Math.floor(Math.sqrt(number))
  for(let i = largestPossibleAnswer; i !== 0; i--){
      if(isPrime(i)){
        if(number%i === 0){
          answer = i
          break
        }
      }
  }
  console.log(answer)
  return answer
}

const isPrime = (number)=>{
  let bool = true
  for(let i = 2; i < number; i++){
    if(number%i === 0){
      bool = false
      break
    }
  }
  return bool
}

largestPrimeFactor(600851475143)
