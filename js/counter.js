export class Counter {
  constructor(selector, initialValue = 0) {
    this.count = initialValue;
    this.selector = selector;
    this.mount();
  }

  mount() {
    const container = document.querySelector(this.selector);

    this.label = document.createElement("p");
    this.label.textContent = "Counter";
    container.appendChild(this.label);

    this.display = document.createElement("div");

    this.btnDecrement = document.createElement("button");
    this.btnDecrement.textContent = "Decrement";

    this.btnReset = document.createElement("button");
    this.btnReset.textContent = "Reset";

    this.btnIncrement = document.createElement("button");
    this.btnIncrement.textContent = "Increment";

    container.appendChild(this.display);
    container.appendChild(this.btnDecrement);
    container.appendChild(this.btnReset);
    container.appendChild(this.btnIncrement);


    this.btnIncrement.addEventListener("click", () => this.increment());
    this.btnDecrement.addEventListener("click", () => this.decrement());
    this.btnReset.addEventListener("click", () => this.reset());

    this.update();
  }

  increment() {
    this.count++;
    this.update();
  }

  decrement() {
    this.count--;
    this.update();
  }

  reset() {
    this.count = 0; 
    this.update();
  }

  update() {
    this.display.textContent = `Count: ${this.count}`;
  }
}


export class StepCounter extends Counter {
  constructor(selector, initialValue = 0, step = 1) {
    super(selector, initialValue);
    this.step = step;
    

    const container = document.querySelector(selector);
    
    if (this.label) {
      this.label.remove(); 
    }
    
    const label = document.createElement("p");
    label.classList.add("step-label");
    label.textContent = `Step: ${this.step}`;
    container.prepend(label); 
  }

  increment() {
    this.count += this.step;
    this.update();
  }

  decrement() {
    if (this.count <= 0) {
      return; 
    }
    
    this.count = Math.max(0, this.count - this.step);
    this.update();
  }
}