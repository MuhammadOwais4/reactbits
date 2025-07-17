import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplitText from "../Reactbits/SplitText/SplitText";

function App() {
  const [count, setCount] = useState(0)
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <>
    <SplitText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
    </>
  )
}

export default App
