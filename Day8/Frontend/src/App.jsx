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
  async function setdatatodb(e){
    e.preventDefault();
    const res=await axios.get("http://localhost:3000/api/notes");
    const data=await res.data;
    let[titletag,descriptiontag]=e.target.elements;
    const [title,description]=[titletag.value,descriptiontag.value]
    let present=false;
    const notesdata=data.notes;
    for (let elem of notesdata) {
    if (elem.title === title) {
      await axios.patch("http://localhost:3000/api/notes/" + elem._id, {
        description
      });
      getdata();
      present = true;
      break;
    }
  }
    if (!present) {
      await axios.post("http://localhost:3000/api/notes", {
        title, description
      })
      getdata();
    }
  }
  async function deletenote(id){
    await axios.delete("http://localhost:3000/api/notes/"+id)
    getdata();
  }
  async function updatedescription(e) {
    const res=await axios.get("http://localhost:3000/api/notes");
    const data=res.data;
    let[titletag,descriptiontag]=e.target.elements;
    const [title,description]=[titletag.value,descriptiontag.value]
    data.foreach(async (elem)=>{
      if(elem.title==title){
        await axios.patch("http://localhost:3000/api/notes"+elem.id,{
          description
        })
        getdata();
      }
    })
  }
  return (
    <div className="cards">
      <form onSubmit={(e)=>{
        setdatatodb(e)}}>
        <input type="text" placeholder='Title' />
        <input type="text" placeholder='Description' />
        <button>Submit</button>
      </form>
      {
        data.map((elem,idx)=>{
          return <div className="task" key={idx}>
            <h3>{elem.title}</h3>
            <h4>{elem.description}</h4>
            <button onClick={()=>{
              deletenote(elem._id)
              }}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default App
