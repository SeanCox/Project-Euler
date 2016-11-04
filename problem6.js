const squareSumDifference = (number)=>{
  let num_1 = 0
  let num_2 = 0
  let difference

  for(let i = 0; i <= number; i++){
    num_1 += i * i
    num_2 += i
  }
  num_2 *= num_2
  difference = num_2 - num_1

  console.log(difference)
  return difference
}

squareSumDifference(100)
