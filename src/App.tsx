import './App.css';
import Parse from './pages/Parse';
import Navbar from './components/Navbar';
import { DesignerProvider } from './providers/DesignerContext';
function App() {
  return (
    <DesignerProvider>
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Parse />
      </header>
    </div>
    </DesignerProvider>
  );
}

export default App;
