
import Link from 'next/link'
import {NextPage} from 'next'

interface InitialProps {
   link:string
}
interface Props extends InitialProps {}

let button:NextPage<Props,InitialProps> =(props)=>{
    console.log(props.link)
    return  (
        <Link href={props.link}><a className="border-4 border-yellow-400 border-solid ">{props.children}</a></Link>
    )
}
button.getInitialProps =async ()=>{
    return (
        {
          link:''  
        }
    )
}

export default button