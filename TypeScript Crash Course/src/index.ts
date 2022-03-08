//Basic types

let id: number = 5;
let company: string = 'Traversy';
let published: boolean = true;

//any type
let a: any = 'hello';
a = 4
a = true 

//arrays
let ids: number[] = [1,2,3,4,5,6];
ids.push(19);

//not allowed
//ids.push('hello')

let arr:any[] = [1, 'hello', true]

//tuple
let person: [number, string, boolean] = [1,'brad', true]
//tuple array
let emp: [number, string][]
emp = [
    [1,'brad'],
    [2,'ninja'],
    [3,'tanay']
]
//union 
let pid: string | number 
pid = 22

//enum
enum direction1{
    up = 1,      //by default 0
    down,        //1
    left,        //2
    rigth        //3
}

enum direction2{
    up='up',
    down = 'down',
    left = 'left'
}

//objects
// const user = {
//     id: 1,
//     name : 'brad'
// }
//type assertion
let cid: any = 1
// let customerid = <number>cid
let customerid = cid as number

//functions
function add(x:number ,y:number ):number//return type
{
    return x+y
}
//void 
function log(message: string| number): void{
    console.log(message)
}

//interface
// interface user {
//     id: number,
//     name : string,
//     age?:number  //optional
// }

// const user1: user = {
//     id: 2,
//     name: 'brad'
// }

//classes
class persons{
    id :number
    name: string

    constructor(id: number, name:string){
        this.id = id
        this.name = name
    }
}
const brad = new persons(1,'Brad Traversy');

//implement interface

interface user {
    id: number,
    name : string,
    register():string
}

class person1 implements user{
    id :number
    name: string

    constructor(id: number, name:string){
        this.id = id
        this.name = name
    }
    register(): string {
        return 'Implemented';
    }
}

//generics

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,4,5,6])
let strArray = getArray(['brad', 'shawn', 'jill'])

strArray.push('tanay')


//