import {NextPage} from 'next'
import Link from 'next/link'
import Button from '../../ui/button'
import LocationIcon from '../../Icons/address-icon'
import ArrowIcon from '../../Icons/arrow-icon'
// import {getFeaturedEvents} from '../'

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
    array:data[]
}
interface Props extends InitialProps {}

let ItemList:NextPage<Props,InitialProps> =  (props) => {
    let {array} = props
    
  
    console.log('component',props.array)
    return (
        <div>
            
           {
               array.map((item,index)=>{
                   let image = item.image
                   let arr = image.split('/')
                   let a=arr.slice(-2).join('/')
                   console.log('a',a)
                   return (<ul className="grid grid-cols-2 gap-4">
                       <li className="mt-2 bg-gray-300 rounded-2xl" key={index}>
                           <img src={a} alt={item.description} />
                           <div>
                               <time>Date:{new Date(item.date).toLocaleString('en-Us',{
                                             day:'numeric',
                                             month:'long',
                                             year:'numeric'
                                })}</time>
                               <h1>Title:{item.title}</h1>
                               <address>Address:{item.location}</address>
                               <LocationIcon />
                               <ArrowIcon />
                               
                               <Button link={`/event/${item.id}`}>Explore Event</Button>
                               
                           </div>
                       </li>
                       
                      
                   </ul>)
               })
           }
        </div>
    )
}
ItemList.getInitialProps = async () => ({
    array:[]
})
export default  ItemList
