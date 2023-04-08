// Lambda statement

var ret = (A: number, B : number) => 
{
  console.log("inside lambda statement");
  return A+B
}

console.log(ret(10,11))