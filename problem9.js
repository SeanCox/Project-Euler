const pythagoreanTriplet = (total)=>{
  for(let a = 1; a < total; a++){
    for(let b = 1; b < total; b++){
      for(let c = 1; c < total; c++){
        if(a*a + b*b === c*c && a+b+c === total){
          console.log(a,b,c)
          return a*b*c
        }
      }
    }
  }
}

pythagoreanTriplet(1000)
