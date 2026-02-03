import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [data, setdata] = useState([])
  const getdata=async ()=>{
    const res = await axios.get("http://localhost:3000/api/notes")
    const resdata = await res.data;
    setdata(resdata.notes)
  }
  useEffect(()=>{
    getdata();
  },[])
  return (
    <div className="cards">
      {
        data.map((elem,idx)=>{
          return <div className="task" key={idx}>
            <h3>{elem.title}</h3>
            <h4>{elem.description}</h4>
          </div>
        })
      }
    </div>
  )
}

export default App
