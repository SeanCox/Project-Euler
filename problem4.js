const largestPalindrome = ()=>{
  let answer = 0
  for(let i = 999; i !== 0; i--){
    for(let j = 999; j !== 0; j--){
      let temp = i * j
      if(isPalindrome(temp)){
        if(temp > answer)answer = temp
      }
    }
  }
  console.log(answer)
  return answer
}

const isPalindrome = (number)=>{
  let bool = false
  let backwords = number.toString().split('').reverse().join('')
  if(number+'' === backwords) bool = true


  return bool
}

largestPalindrome()
