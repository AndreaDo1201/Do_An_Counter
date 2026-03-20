export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");

        // label Counter
        this.label = document.createElement("p");
        this.label.textContent = "Counter";
        container.appendChild(this.label);

        //Add Buttons, decrement, reset
        this.btnDecrement = document.createElement("button");
        this.btnDecrement.textContent = "Decrement";

        this.btnReset = document.createElement("button");
        this.btnReset.textContent = "Reset";

        //set button text
        this.btnIncrement = document.createElement("button");
        this.btnIncrement.textContent = "Increment";

        //Append display and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.btnDecrement);
        container.appendChild(this.btnReset);
        container.appendChild(this.btnIncrement);

        //Add Event Listener
        this.btnIncrement.addEventListener("click", ()=> this.increment());
        this.btnDecrement.addEventListener("click", ()=> this.decrement());
        this.btnReset.addEventListener("click",     ()=> this.reset());
    
        // when this first gets mounted update the display
        this.update();
    }

    //state methods
    increment(){
        this.count++;
        this.update();
    }

    decrement(){
        //if statement needed - not to count negatively
        this.count--;
        this.update();
    }

    reset(){
        this.count = 0;
        console.log("Reset Activated!!!");
        this.update(); // thêm ()
    }

    update() {
        //set initial display content
        this.display.textContent = `Count: ${this.count}`;

        //classList.toggle() this.count===0
    }
}

//Counter is supper class
// StepCounter is sub class
export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1){
        super(selector, initialValue);
        // add step property
        this.step = step;
        if (this.label) this.label.remove();

        const container = document.querySelector(selector);
        const label = document.createElement("p");
        label.classList.add("step-label");
        label.textContent = `Step: ${this.step}`;
        container.prepend(label);
    }

    increment(){
        this.count += this.step;
        this.update();
    }

    decrement(){
        if (this.count <= 0) return;
        this.count = Math.max(0, this.count - this.step);
        this.update();
    }
}