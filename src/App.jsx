import { useEffect, useState } from "react"
import axios from 'axios'

function App() {
  const [data, setData] = useState('')
  
  const getData = async () => {
    const res = await axios.get('https://backendmongodeploy.onrender.com/getData')
    console.log(res)
    setData(res)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App