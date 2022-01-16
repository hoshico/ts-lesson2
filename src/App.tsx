import './App.css';

const name = "hello";
let username: string = "hello";
let dymmyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array1 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: "Taro"}

const func1 = (x: number, y: number): number => {
  return x + y;
}

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}

// Union Types
let value: boolean | number
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon"

let memory: 256 | 512;
memory = 12;

let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";


let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
}
let key: keyof KEYS

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum(列挙型) → 自動で連番をつけてくれる
enum OS {
  windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}


const PC1: PC = {
  id:1,
  OSType: OS.windows,
}
const PC2: PC = {
  id:2,
  OSType: OS.Mac,
}
const PC3: PC = {
  id:3,
  OSType: OS.Linux
}

// 型の互換性


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
