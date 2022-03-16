import './App.css';
import { Navbar } from './components/Navbar';
import { Episodes } from './features/episodes/Episodes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Episodes />
    </div>
  );
}

export default App;
