//optional parameter
function Area(Rad : number,PI ?: number) : number
{
    let Ans : number = 0;
    if(PI == undefined)
    {
        PI =3.14;
    }
    Ans = PI * Rad *Rad;
    return Ans
}

var Ret : number =0;
Ret = Area(20.3,3.14);
console.log("area is :"+Ret)

//optional param
Ret = Area(20.3);
console.log("area is :"+Ret)