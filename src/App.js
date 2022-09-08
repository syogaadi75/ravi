import { useState } from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import Hello from './components/Hello';
import InsertName from './components/InsertName';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

function App() {
  const [name, setName] = useState(false)
  const [step, setStep] = useState(0)

  return (
    <div>
      <InsertName setName={setName} />
      {name && (<Hello name={name} setStep={setStep} />)}
      {step == 1 && (<FirstStep name={name} setStep={setStep} />)}
      {step == 2 && (<SecondStep name={name} setStep={setStep} />)}
      {step == 3 && (<ThirdStep name={name} setStep={setStep} />)}
    </div>
  );
}

export default App;
