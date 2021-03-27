import React from 'react'
import  {NextPage} from 'next'

interface InitialProps {
    greeting:string
}
interface Props extends InitialProps {}

let FilteredEvent:NextPage<Props,InitialProps> =(props)=> {
    return (
        <div>
            <h1>this is FilteredEvent</h1>
            <h1>{props.greeting}</h1>
           
        </div>
    )
}
FilteredEvent.getInitialProps = async () => ({
    greeting:'Welcome to FilteredEventPage'
})

export default FilteredEvent
