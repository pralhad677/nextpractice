
import Link from 'next/link'
import {NextPage} from 'next'

interface InitialProps {
   link?:string,
   onClick?:(e:React.SyntheticEvent<EventTarget>)=>any
}
interface Props extends InitialProps {}

let button:NextPage<Props,InitialProps> =(props)=>{
    console.log(props.link)
    if(props.link){
    return  (
        <Link href={props.link}><a className="border-4 border-yellow-400 border-solid ">{props.children}</a></Link>
    )
    }
    if(props.onClick)
    return (<button onClick={props.onClick}>{props.onClick}</button>)
    
    return <button>{props.children}</button>
    
}
button.getInitialProps =async ()=>({
 
        link:'' ,
        onClick:()=>{}
})

export default button