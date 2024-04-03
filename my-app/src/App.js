import logo from './logo.svg';
import './App.css';
import { CORE_CONCEPTS } from './data.js';
// import { Hello } from './component/util.js';

const reactElements = ['Fundamental','Crucial','Core']

function getIndex(max){
  return Math.floor(Math.random() * (max+1));
}

// const user={
//   firstName : 'John',
//   lastName : 'David',
//   role : 'Instructor'
// }

// function UserData(){
//   return(
//     <div>
//         <h2>
//           {user.firstName} {user.lastName}
//         </h2>
//     </div>
//   )
// }

function CoreConcepts(props){
  return(
    <li>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </li> 
  );
}

function Header(){
  const elements = reactElements[getIndex(2)]

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Essentials</h1>
      <p>
        {elements} React concepts you will need for any app you are going to build!
        {/* Edit <code>src/App.js</code> and save to muj7ybtf. */}
      </p>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
  </header>
)
}


function App() {
  return (
    // <div className="App">
    <div>
      <Header/>
      <main>
        <h2>Core Concepts of React</h2>
        <ul>
          <CoreConcepts
            title = {CORE_CONCEPTS[0].title}
            desc = {CORE_CONCEPTS[0].description}
          />
          <CoreConcepts
            title = 'Props'
            desc =  'Make components configurable (and therefore reusable) by passing input data to them.'
          />
          <CoreConcepts
            title = 'JSX'
            desc =  'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
          />
          <CoreConcepts
            title = 'State'
            desc =  'React-managed data which, when changed, causes the component to re-render & the UI to update.'
          />
        </ul>
      </main>
    </div>
    // </div>
  );
}
export default App;