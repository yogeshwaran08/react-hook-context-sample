import logo from './logo.svg';
import './App.css';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { ContextProvider } from './Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Screen1 />
        <Screen2 />
      </ContextProvider>
    </div>
  );
}

export default App;
