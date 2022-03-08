import { HasFormatter } from "../interface/HasFormatter.js"



//classes
//access modifiers -- public private readonly
//public by default, private - allows access only within class, 
//readonly - cannot change value once set , access outside class also

export class Invoice implements HasFormatter{

    // readonly client: string;   //when using access modifiers we can skip this and declare directly in constructor
    //private details: string;
    // public amount: number;
 
     constructor(
         readonly client: string,   
         private details: string,
         public amount: number,
     ){}
 
     // constructor(c: string, d: string, a:number){
     //     this.client = c;
     //     this.details = d;
     //     this.amount = a;
     // }
 
     format(){
         return `${this.client} owes ${this.amount} for ${this.details}`
     }
 }