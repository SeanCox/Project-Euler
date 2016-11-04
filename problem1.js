var answer = 0;

var MutiplesOfThreeAndFive = function (num){
  if (num === 0) return answer;
  
  if (num % 3 === 0){
    answer += num;
    return MutiplesOfThreeAndFive(num-1);
  }
  if(num % 5 === 0){
    answer += num;
    return MutiplesOfThreeAndFive(num-1);
  }else {
    return MutiplesOfThreeAndFive(num-1);
  }
}

console.log(MutiplesOfThreeAndFive(999));
