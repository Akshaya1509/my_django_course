function caught_speeding(speed, is_birthday){
  //Code Goes Here
  if(is_birthday){
    if(speed<=65)
      return 0
    else if(speed>=66 && speed<=85)
      return 1
    else if(speed>=85)
      return 2
  }
  else{
    if(speed<=60)
      return 0
    else if(speed>=61 && speed<=80)
      return 1
    else if(speed>=81)
      return 2
  }
}

console.log(caught_speeding(65, true))
