var num = [18 , 23, 45, 64, 57, 89, 90];
numbers = function(list){
  var defoult = 0;
  for (var i = 0; i< list.length; i++){
    defoult+= list[i];
  }
  return defoult;
}

console.log(numbers(num));
