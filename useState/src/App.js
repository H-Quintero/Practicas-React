import './styles.css'
import Counter from "./components/Counter/Counter";
import Timer from './components/Timer/Timer';
import ChangeName from './components/ChangeName/ChangeName';
import City from './components/City/City';



function App() {
  return (
    <div>
      <Counter />
      <Timer />
      <ChangeName />
      <City />
    </div>
  );
}

export default App;
