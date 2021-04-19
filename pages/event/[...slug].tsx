import React from 'react'
import  {NextPage} from 'next'
import { useRouter } from 'next/router'
import {  getFilteredEvents} from '../../dummy-data'
import ItemList from '../../components/events/event-list'

interface InitialProps {
    greeting:string
}
interface Props extends InitialProps {}

let FilteredEvent:NextPage<Props,InitialProps> =(props)=> {
    const router = useRouter()
   let filteredData =router.query.slug
   console.log(filteredData)
   if(!filteredData){
       return <p>Loading ....</p>
   }
//    let [year,month] = filteredData
   let year:string|number =filteredData[0]
    let month:string|number = filteredData[1]    
    month =+month  
    year = +year
    if((isNaN(year) || isNaN(month) || year> 2030|| year <2020 || month <1 || month >12)){
        return<p>Given url is not valid</p>
    } 
    
    const FilteredEvent = getFilteredEvents({
        year,
        month
    })
    if(!FilteredEvent || FilteredEvent.length ===0 ){
        return <p>Could not find a event for given event</p>
    }
console.log(FilteredEvent)
    return (
        <div>
            <h1>this is FilteredEvent</h1>
            <h1>{props.greeting}</h1>
            <ItemList array={FilteredEvent}/>
           
           
        </div>
    )
}
FilteredEvent.getInitialProps = async () => ({
    greeting:'Welcome to FilteredEventPage'
})

export default FilteredEvent
