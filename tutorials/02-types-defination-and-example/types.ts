//Welcome to uidhtml 🙏

//Types

//Type inference
let a = 10;

//Type annotation
let x: number = 34;

//How many types
let num: number = 10;
num = -20;
num = 0.2;

let str: string = "uidhtml";
str = "Gautam";

let bool: boolean = true;

let b: undefined = undefined;

let z: null = null;

//Typecaste with array
let arr1: number[] = [1, 2, 3, 4, 5, 6];
let arr2: string[] = ["Gautam", "uidhtml", ""];

//Typecaste with object
interface Person {
  name: string;
  age: number;
}

let obj1: Person = {
  name: "Gautam",
  age: 32,
};

//Already existed
let date: Date = new Date();
console.log(date.getDate());
