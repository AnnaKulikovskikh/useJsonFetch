import './App.css'
import {useEffect} from 'react'
import Result from "./components/Result"

function App() {

  //const url = "http://localhost:7777/data"
  //const url = "process.env.REACT_APP_DATA_URL/data"

  // useEffect(() => {
  //   fetch(url)
  //       .then(res => res.json())
  //       .then(data => console.log(data))
  //   }, [])
  

  return (
    <div className="App">
      <Result url = 'data'/>
      <Result url = 'error'/>
      <Result url = 'loading'/>
    </div>
  )
}

export default App
