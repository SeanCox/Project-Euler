const smallestMutiple = ()=>{
let answer = false

  for(let i = 1; answer === false; i++){
    let test = true
    for(let j = 1; j <= 20; j++){
      if(i%j !== 0) test = false
    }
    if(test){
      answer = i
      break
    }
  }
  console.log(answer)
  return answer
}

smallestMutiple()
