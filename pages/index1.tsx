
// import styles from '../styles/Home.module.css'
// import '../styles/index.css'
import React,{useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {
  let data = [
    {name:'jacob',id:1},
    {name:'ryan',id:2},
    {name:'pralhad',id:3}
  ]
  let [value,setValue] = useState('')
  let router = useRouter()
  function NavigatingProgrammatically(){
    router.push({
      pathname:"/about/[id]",
      query:{name:"hero",id:5}
    })
  }

  async function submit(){
     let response = await axios(`http://localhost:3000/hello`)
     let data = await response.data
     console.log(data)
  }
  return (
    <div >
    
      <form onSubmit={submit} className="flex justify-start md:justify-between ">
      <label htmlFor="name">Name</label>
      <input  type="text" id="name"  value={value} onChange={e=>setValue(e.target.value)} className="bg-purple-600"/>
      <button className="bg-red-200">Add</button>
      </form>
      <ul>
        <li><Link replace href="/about/:id">AboutId</Link></li>
        {/* <li><Link href="/about/...spread">spread</Link></li> */}
        <li><Link href="">client</Link></li>
    
      </ul>
      {data.map(item=>{
        return <ul>
          <li key={item.id}><Link href={`about/${item.name}`}>{item.name}</Link></li>
          <li key={item.id}><Link href={`about/${item.name}`}>{item.name}</Link></li>
          
          <li key={item.id}><Link href={{
            pathname:"/about/[id]",
            query:{id:item.id}
          }}>{item.name}</Link></li>
          
        </ul>
      })}
    
        
      <button onClick={NavigatingProgrammatically}>Click Me</button>
    
    </div>
  )
}
