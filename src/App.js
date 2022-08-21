import './App.css'
import Error from "./components/Error"
import Index from "./components/Index"
import Success from "./components/Success"


function App() {
  return (
    <div className="App">
      <Success/>
      <Error/>
      <Index/>
    </div>
  )
}

export default App
