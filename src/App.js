import './App.css'
import Result from "./components/Result"

function App() {

  return (
    <div className="App">
      <Result url = 'data'/>
      <Result url = 'error'/>
      <Result url = 'loading'/>
    </div>
  )
}

export default App
