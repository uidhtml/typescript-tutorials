//Welcome to uidhtml 🙏

//Primitive type data
let fruit: string = "Apple";
let count: number = 20;
let hasNumber = true;

let nothing: null = null;
let notAvailable: undefined | number = undefined;
notAvailable = 20;

let date: Date = new Date();

//Array
let colorsArray: string[] = ["red", "green", "#cc0000"];
let numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
let boolArray: boolean[] = [true, false, true];

//class
class Animal {
  defaultColor = "red";
}

let animal: Animal = new Animal();

//Object literals
interface Obj {
  x: number;
  y: string;
}
let obj: Obj = {
  x: 20,
  y: "Gautam",
};

//Annotate to function
//Example 1 ->  add function varibale annotation type explicitly
const func1: (x: number, y: number) => void = (x: number, y: number) => {};

//Example 2  ->  add return type explicitly
const func2 = (x: number, y: number): number => {
  return x + y;
};

//Example 3  ->  typescript checks body but not to logic
const add = (x: number, y: number): number => {
  return x - y;
};

//Example 4  ->  we can skip return type
const subtract = (x: number, y: number) => {
  return x - y;
};

//Example 5  ->  Why we need return type annotation
const multiply = (x: number, y: number): number => {
  return "15";
};

//Example -> type annotation to normal function
function divide(x: number, y: number): number {
  return x / y;
}

divide(4, 2);
