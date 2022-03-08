//classes
//access modifiers -- public private readonly
//public by default, private - allows access only within class, 
//readonly - cannot change value once set , access outside class also
export class Invoice {
    // readonly client: string;   //when using access modifiers we can skip this and declare directly in constructor
    //private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // constructor(c: string, d: string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
