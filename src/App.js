import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input 
        id="disable-button-checkbox"
        type="checkbox"
        defaultChecked={disabled}
        // To check the value on screen readers
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
