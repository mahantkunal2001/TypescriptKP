/* method overloading & constructor overloading
*/
//constructor overloading 


class Calculator{
//kunal mahant
constructor();//if we don't pass any parameters in constructor it is called default constructor.
constructor(a:Number, b:Number)//parameterized constructor

constructor(a?:number, b?:number) //constructor overloading 
{
if(a!==undefined && b!==undefined)
{
    console.log("Sum of a & b:", (a+b));  
}
else{
    console.log("Default constructor called...");
    
}
}

//Method Overloading
add(a:number,b:number):number;
add(a:number,b:number,c:number):number;

add(a:number,b:number,c?:number):number{
if(c!==undefined)
{
 return a+b+c;
}
return a+b;
}

}

//Usage constructor overloading
let calc1=new Calculator();

//Usage method overloading
console.log("Adding 2 numbers :", calc1.add(10+20));
console.log("Adding 3 numbers :", calc1.add(10+20+30));




