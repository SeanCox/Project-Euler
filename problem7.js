const primePlace = (place)=>{
  let primes = []

  for(let i = 2; primes.length < place; i++){
    if(isPrime(i)) primes.push(i)
  }

  const answer = primes[primes.length-1]
  console.log(answer)
  return(answer)
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

primePlace(10001)
