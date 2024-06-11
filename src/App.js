import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App(props) {
  return (
    <div className="App">
      <MarksSheet
       name="Nandhu"
      telmarks="78" 
      hindimarks="22"
       engmarks="69" 
       mathsmarks="28"
      scimarks="55" 
      socmarks="66">
      </MarksSheet>

      <MarksSheet
       name="Sravan"
      telmarks="48" 
      hindimarks="62"
       engmarks="36" 
       mathsmarks="34"
      scimarks="69" 
      socmarks="25">
      </MarksSheet>
    </div>
  );
}

export default App;
