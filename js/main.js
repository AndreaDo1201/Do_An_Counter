import { Counter }     from './counter.js';
import { StepCounter } from './counter.js';

const counter1 = new Counter("#counter-container1", 10);
const counter2 = new Counter("#counter-container2", 5);
const counter3 = new Counter("#counterCon", 2);

const step5  = new StepCounter("#step-counter1", 0, 5);
const step10 = new StepCounter("#step-counter2", 0, 10);
const step3  = new StepCounter("#step-counter3", 0, 3);
