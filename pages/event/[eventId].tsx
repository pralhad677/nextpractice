import React from 'react'
import  {NextPage} from 'next'
import {getEventById} from '../../dummy-data.js'

import {useRouter} from 'next/router'

interface InitialProps {
   
}
interface Props extends InitialProps {}

let EventDetails:NextPage<Props,InitialProps> =(props)=> {
    const router = useRouter()
    console.log('1',router.query)
    const eventId =router.query
    console.log('2',eventId.eventId )
    const event =getEventById(eventId.eventId)
    console.log(event)
    if(!event){
        return <p>No Event Found</p>
    }
    return (
        <div className="bg-gradient-to-r">
            <h1>this is EventDetails</h1>
            {
                Object.values(event).map(itemData=>{
                    console.log(itemData)
                //    if(itemData==='image'){
                //        <img src={itemData}  />
                //    }
                    return <ul>
                        
                        <li>
                            
                            <h1>{itemData}</h1></li>
                        
                        
                    </ul>
                })
            }
            {
                
            }
            
           
        </div>
    )
}
EventDetails.getInitialProps = async () => ({
   
})

export default EventDetails
