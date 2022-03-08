const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


// grandparent.addEventListener("click", e => {
//     console.log("gp capture")
// }, { capture : true}) // false by default

// grandparent.addEventListener("click", e => {
//     console.log("gp bubble")
// })

// parent.addEventListener("click", e => {
//     console.log("parent capture")
// }, { capture : true})

// parent.addEventListener("click", e => {
//     console.log("parent bubble")
// })

// child.addEventListener("click", e => {
//     console.log("child bubble")
//     e.stopPropagation()  // use to stop at this stage  but all previous bubble or capture will happen
// })

// //When clicked All the 3 will run since they are placed on each other
// child.addEventListener("click", e => {
//     console.log("child capture")
// }, { capture : true} )

// this is called bubbling  child -> parent -> grandp -> document
// capturing = document -> grandp -> parent -> child


grandparent.addEventListener("click", e => {
    console.log("gp bubble")
})

// parent.addEventListener("click", e => {
//     console.log("parent bubble")
// }, { once: true})  //only executes once and removes itself from remaining runs

function print(){
    console.log('hi')
}

parent.addEventListener("click",print)// cannot use arrow func

setTimeout(() => {
    parent.removeEventListener("click", print) // removes after 2 sec cannot use arrow func here
}, 2000)// 2sec

child.addEventListener("click", e => {
    console.log("child bubble")
})

