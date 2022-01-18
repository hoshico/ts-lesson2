import './App.css';
import Data from "./data.json"
import TestComponent from './TestComponent';

type USERS = typeof Data;

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
//①具体的な文字列リテラル
const comp1 = "test";

//②抽象的なstringに対して具体的な文字列を入れるのはOK
let comp2: string = comp1;

//③逆により具体度の高い型に代入するのはNG
let comp3: string = "test";
// アノーテーションで"test"(文字列リテラル)を指定
// ⇩ これはだめ
//let comp4: "test" = comp3;

// 引数の数は一緒だが型が違う場合
let funcComp1 = (x: number) => {}
let funcComp2 = (x: string) => {}

// ⇩ 型が違うので代入することはできない
// ※ 代入する時はletはいらない(基本的なこと)
//funcComp1 = funcComp2
//funcComp2 = funcComp1

// ジェネリクス  <T>はエイリアス。この段階では型は定まっていない
// 型の中でここで定義したエイリアスを使用する(テンプレートだけ用意しておいて、具体的な型は後で決める)
interface GEN<T>{
  item: T;
}
// ここで初めて型を指定する
const gen0: GEN<string> = { item: "hello" };

// <>をつけなかったらエラーになる
const gen1: GEN = { item: "hello" };

// numberを指定してみる
const gen2: GEN<number> = { item: 12 };

// エイリアスにデフォルトの型を使用することも可能(初期値のようなもの)
interface GEN1<T = string>{
  item: T;
}
// デフォルトが設定されているので型を指定しなかった場合stingになる
const gen3: GEN1 = { item: "hello" };

// 特定の型のみ使用した場合
interface GEN2<T extends string | number >{
  item: T;
}
// stringを指定することは可能
const gen4: GEN2<string> = { item: "hello" };

// numberを指定することは可能
const gen5: GEN2<number> = { item: 1 };

// 関数の場合
function funcGen<T>(props: T){
  return {item: props}
}
const gem6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);

// 関数のextends
function funcGen1<T extends string | null>(props: T){
  return {value: props}
}
const gen8 = funcGen1("hello");

// propsの使い方
interface Props {
  price: number;
}
// Propsというデータ型のみ受けつけるようにする
function funcGen3<T extends Props>(props: T) {
  return {value: props.price}
}
// propsで定義したデータ型でしか受け取れない
const gen10 = funcGen3({price: 10})

// アロー関数で表記
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
}


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
      
    </div>
  );
}

export default App;
