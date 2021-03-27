import React from 'react'
import  {NextPage} from 'next'

interface InitialProps {
    greeting:string
}
interface Props extends InitialProps {}

let Event:NextPage<Props,InitialProps> =(props)=> {
    return (
        <div>
            <h1>this is Event</h1>
            <h1>{props.greeting}</h1>
           
        </div>
    )
}
Event.getInitialProps = async () => ({
    greeting:'Welcome to EventPage'
})

export default Event
