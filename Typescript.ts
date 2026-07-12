class kunal{

    FirstName:string;
    LastName:string;

    constructor(FirstName:string, LastName:string){
     this.FirstName=FirstName;
     this.LastName=LastName;
    }

  getFullName(): string {
        return this.FirstName + " " + this.LastName;
    }

    // Another method with parameter
    greet(message: string): void {
        console.log(message + ", " + this.FirstName);
    }
 

}

const user=new kunal("kunal","Mahant");
const user2=new kunal("kunal2","Mahant")
