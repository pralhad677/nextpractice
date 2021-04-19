import React from 'react'
import  {NextPage} from 'next'
import {getAllEvents} from '../../dummy-data'
import ItemList from '../../components/events/event-list'
import EventSearch from './event-search'
import {useRouter}from 'next/router'

interface InitialProps {
    greeting:string
}
interface Props extends InitialProps {}

let Event:NextPage<Props,InitialProps> =(props)=> {
    const events =getAllEvents()
    const router = useRouter()
    function search(year:string,month:string){
       let pathname=`/event/${year}/${month}`
      router.push(pathname)
    }
    return (
        <>
            <EventSearch onSearch={search}/>
            <ItemList array={events} />
       
        </>
    )
}
Event.getInitialProps = async () => ({
    greeting:'Welcome to EventPage'
})

export default Event
