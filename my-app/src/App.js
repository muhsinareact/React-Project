// import logo from './logo.svg';
// import './App.css';
import value from './component/temp.js';
import val from "./component/temp.js";
import { multiply } from "./component/util.js"; 
import add from "./component/util.js"



function App() {
  value()
//   return (
//     <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to muj7ybtf.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
//     </div>
//   );
}
export default App;


const res = multiply(1, 2, 3)
console.log(res)

const result = add(10, 10)
console.log(result)


let name='muhsina';
// name="helloo"
console.log(name);
const msg="Hello World";
// msg="HIIII"
console.log(msg);


console.log(5+5)
console.log("hello"+"hii")
console.log(10 === 5)
console.log(10 === 10)
if(10 > 5){
  console.log('okk')
}


//functions
function demo(){
  console.log('demo');
}
demo();

function temp(name,msg){
  console.log(name);
  console.log(msg);
}
temp('musiiii','hii')



//object
const user ={
  name:'Muhsina Musthafa',
  age:23,
  abc() {
    console .log('qwerty');
    console.log(this.age)
   }
}
console.log(user)
console.log(user.name)
user.abc()

class User {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
const user1 = new User('Joe',35)
console.log(user1)


//array 
const array1 =['a','b','c']
console.log(array1[0])
array1.pop();
console.log(array1)
array1.push('s');
console.log(array1)

const index = array1.findIndex((item) =>{
  return item === 'b'
})
console.log(index)

//map is used to transform an array
const mappedArray = array1.map((item) => item + 's')
console.log(mappedArray)//return a new array

const array2 = [1,2,3]
console.log(array2) 
const mappedArray2 = array2.map((item) => ({value : item}))
console.log(mappedArray2)



//destructuring
const [fname, lname] = ['ABIGAIL','PETERSON']
console.log(fname);
console.log(lname);

const {firstName, lastName} = {
  firstName : 'JOHN',
  lastName : 'DAVID'
}
console.log(firstName);
console.log(lastName);

function getDetails({id, prod}){
  localStorage.setItem('id',id);
  localStorage.setItem('prod',prod)
}
getDetails({id : 1, prod:'book'});



//spread operator
const array3 = ['m']
const formattedArray = [...array1, ...array3]
console.log(formattedArray)

const User2 = {
    dept : 'developer',
    ...user
}
console.log(User2)



function one() {
  function two() {
    console.log('twoo')
  }
  two();
  console.log('onee')
}
one();



const numbers=[1,2,3,4,5,6,7]

const mul = numbers.map((el) => el*2)
console.log(mul)
const even = numbers.filter((el) => el%2 === 0)
console.log(even)
const odd= numbers.filter((el) => el%2 !== 0)
console.log(odd)
