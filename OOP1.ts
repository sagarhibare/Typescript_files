// class = Data + Function
// class = Characteristics + Behaviour
class Student
{
    //characteristics = Data
  Name : string;
  Marks : number;
  Age : number;
  City : string;
 //Behaviour = Function
  constructor(N : string, M : number, A : number, C : string)
  {
    console.log("Inside constructor");
    this.Name = N;
    this.Marks =M;
    this.Age=A;
    this.City=C;

  }

  Display() : void
  {
    console.log("Name of student :"+this.Name);
    console.log("Mark of student :"+this.Marks);
    console.log("Age of student :"+this.Age);
    console.log("City of student :"+this.City);
  }
}

var Obj131 = new Student("sagar",98,22,"latur");
var Obj123 = new Student("dnyanu",99,22,"latur");

Obj131.Display();
Obj123.Display();