const divideTriangleNumber = (number)=>{
  answer = false
  hold = 0
  for(let i = 1; answer === false; i++){
    hold += i

    if(hold%180 === 0){
      let divisors = 0
      for(let j = 1; j <= hold; j++){
        if(hold%j === 0) divisors++
      }
      console.log(divisors)
      if(divisors >= number) answer = hold
    }
  }
  console.log(answer)
}

divideTriangleNumber(500)
