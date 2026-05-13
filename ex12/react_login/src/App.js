import './App.css';
import HelloCGU from './cgu_hello';
import MultiButton from './cgu_multiButton';
import CGU_Login from './cgu_login';

function App() {
  return (
    <div className="App">
      <div>
        { CGU_Login() }
      </div>
    </div>
  );
}

export default App;