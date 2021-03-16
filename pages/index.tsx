
// import styles from '../styles/Home.module.css'
// import '../styles/index.css'
import React,{useState} from 'react'
import axios from 'axios'

export default function Home() { 
  let [value,setValue] = useState('')

  async function submit(){
     let response = await axios(`http://localhost:3000/hello`)
     let data = await response.data
     console.log(data)
  }
  return (
    <div className="flex-col justify-end">
    
      <form onSubmit={submit}>
      <label htmlFor="name">Name</label>
      <input  type="text" id="name"  value={value} onChange={e=>setValue(e.target.value)} className="bg-purple-600"/>
      <button className="bg-red-200">Add</button>
      </form>
 
        

    
    </div>
  )
}
