// import logo from './logo.svg';
import './App.css';
import { CORE_CONCEPTS } from './data.js';
import {Header} from './components/header.jsx';
import {CoreConcepts} from './components/CoreConcepts.jsx';
import { TabButton } from './components/TabButton.jsx';

function App() {

  let tabContent = ''
  function handleSelect(selectedButton){
    tabContent = selectedButton;
    // console.log(tabContent )
  }

  return (
    // <div className="App">
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
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
        </section>
        <section id="examples">
          <main>
            <h2>Examples</h2>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </main>
          {tabContent}
        </section>
      </main>
    </div>
    // </div>
  );
}
export default App;
