// import logo from './logo.svg';

const reactElements = ['Fundamental','Crucial','Core']

function getIndex(max){
  return Math.floor(Math.random() * (max+1));
}

export function Header(){
    const elements = reactElements[getIndex(2)]
  
    return (
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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