// Write application which performs addition and substraction of two

//kay karyacha ahe ? (methods) -> Addition & substraction

//Te karyala ky lagnar aahe ? (Data) -> 2 numbers


class Arithematic
{
  //Data or characteristic

  No1 : number;
  No2 : number;

   constructor(A : number, B : number)
    {
          this.No1 = A;
          this.No2 = B;
    }
      Addition(): number
      {
        return this.No1+this.No2;
      }
      
      Substraction() : number
      {
        return this.No1-this.No2;
      }
}

var obj1 = new Arithematic(11,10);
var obj2 =new Arithematic(21,15);
var Ret : number =0;
Ret = obj1.Addition();
console.log("Addition of obj1 :"+Ret);
Ret = obj1.Substraction();
console.log("Substraction of obj1 :"+Ret);
console.log("------------------------obj2-------------------------")
Ret = obj2.Addition();
console.log("Addition of obj2 :"+Ret);
Ret = obj2.Substraction();
console.log("Substraction of obj2 :"+Ret);