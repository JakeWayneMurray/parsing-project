import './App.css';
import Parse from './pages/Parse';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Parse />
      </header>
    </div>
  );
}

export default App;
