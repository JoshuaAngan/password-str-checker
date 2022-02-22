import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';

function App() {
    const [password, setPassword] = useState('');


  return (
    <div className="App">
          <header className="App-header">
              <h2>Password Strength Checker</h2>
              <div>

                  <input id="password" type="text" placeholder="Type a password" onChange={e => setPassword(e.target.value)} />
                  <button >show</button>
              </div>

              <div>
                  <PasswordStrengthMeter password={password} />
                  </div>
      </header>
    </div>
  );
}

export default App;
