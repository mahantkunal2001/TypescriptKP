/*
hii kunal here i'm automation QA
1.class
2.read only properties
3.Optional properties.
4.static variable & properties :
-----> 1. static properties/methods are common ton  all the objects.
2. static properties/methods can be accessed through class name directly.
3. static properties/methods can be modified using any objects. (is you cange in one place it'll reflect in all the objects)
4.this keywoard we can't use in static methods or objects we directly use className in static method.

Function Overloading
*/

class student{
   readonly studentId:number;// we can not reassign or modify the readOnly values 
    name:string;
    email?:string; //optional property (can be undefined) at the time of passing the data we can ignore thw value or no need to pass the value
    static SchoolName:string="B.R.High.school katol"; // common to all objects just like java 
    //constructor
    constructor(sid:number,sname:string,email:string){
        this.studentId=sid;
        this.name=sname;
        this.email=email;//you don't pass email then it is undefined
    }

    //Method
    displayInfo():void{
        console.log("student ID:", this.studentId);
        console.log("student Name:", this.name);

        if(this.email)
        {
            console.log("Email:", this.email);
        }
        else{
            console.log("Email is not provided"); 
        }
        console.log("Email:");
        
    }
   static changeSchoolName(newName:string):void{
        student.SchoolName=newName;
    }
}

//usages
let s1=new student(101,"John","john@gmail.co");
let s2=new student(102,"Bob","bob@gmail.com");

//display
s1.displayInfo();
s2.displayInfo();

//change the schoolName using static method.
student.changeSchoolName("Nagarparishad high school, Name");
