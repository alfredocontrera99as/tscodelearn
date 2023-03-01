class Stack {
    constructor(){
        this.stack = [];
        this.top = 0;
    }
    push(newValue){
        this.stack.push(newValue);
        this.top += 1;
    }
    pop(){
        if(this.top !== 0){
            this.top -= 1;
            return this.stack.pop();
        }
        throw new Error("Stack underflow")
    }
    get length (){
        return this.top
    }
    get isEmpty () {
        return this.top === 0
    }
    get last (){
        if(this.top !== 0){
            return this.stack[this.stack.length - 1]
        }
        return null
    }
    static isStack (el){
        return el instanceof Stack
    }

}
const testStack = new Stack();

console.log("It's working")
const menu = document.getElementById("menu");
const text = document.getElementById("text");
const buttonTest = document.getElementById("testButton");
const deleteBtn = document.getElementById("deletebutton");
const lengthStack = document.getElementById("length");
const isEmptyStack = document.getElementById("isEmpty");
let value = "";
isEmptyStack.innerHTML = 'isEmpty <br/>'
isEmptyStack.innerHTML += testStack.isEmpty
function renderStack (value){
    menu.innerHTML = "";
    menu.innerHTML = value.stack.map((element) => `<div class="stack">${element}</div>`)
    lengthStack.innerHTML = "Size <br/>";
    lengthStack.innerHTML += testStack.length;
    isEmptyStack.innerHTML = 'isEmpty <br/>'
    isEmptyStack.innerHTML += testStack.isEmpty

}
text.addEventListener("change", (e) => {
    value = e.target.value
})
buttonTest.addEventListener("click", (e)=> {
    e.preventDefault();
    if(value === ""){
        value = testStack.length + 1
    }
    testStack.push(value)
    renderStack(testStack)
    text.value = ""
    value = ""
})
deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(testStack.length > 0){
        testStack.pop();
        renderStack(testStack)
    }
})