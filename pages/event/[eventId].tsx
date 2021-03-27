import React from 'react'
import  {NextPage} from 'next'

interface InitialProps {
    greeting:string
}
interface Props extends InitialProps {}

let EventDetails:NextPage<Props,InitialProps> =(props)=> {
    return (
        <div>
            <h1>this is EventDetails</h1>
            <h1>{props.greeting}</h1>
           
        </div>
    )
}
EventDetails.getInitialProps = async () => ({
    greeting:'Welcome to HomePage'
})

export default EventDetails
