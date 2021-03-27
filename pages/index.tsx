import React from 'react'
import  {NextPage} from 'next'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'
type data ={
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
}
interface InitialProps {
    greeting:string,
    getFeaturedEvents:data[]
}
interface Props extends InitialProps {}

let Home:NextPage<Props,InitialProps> =(props)=> {
   console.log('index',props.getFeaturedEvents)

        return (
        <div>
            <h1>this is Home</h1>
            <h1>{props.greeting}</h1>
            <EventList array={props.getFeaturedEvents}/>
           
        </div>
    )
}
// let x=getFeaturedEvents()
Home.getInitialProps = async () => ({
    greeting:'Welcome to HomePage',
    getFeaturedEvents:getFeaturedEvents()
})

export default Home
