import React,{useRef} from 'react'
import  {NextPage} from 'next'
import Button from '../../ui/button'


interface InitialProps {
    onSearch?:(arg1:any,arg2:any)=>any
}
interface Props extends InitialProps {}

let EventSearch:NextPage<Props,InitialProps> =(props)=> {
    const yearInputRef = useRef() as React.MutableRefObject<HTMLSelectElement>
        
    const monthInputRef = useRef() as React.MutableRefObject<HTMLSelectElement>

    function SubmitHandler(e:React.SyntheticEvent<EventTarget>){

        e.preventDefault()
        const selectedYear = yearInputRef.current.value
        
        const selectedMonth = monthInputRef.current.value
        props.onSearch?.(selectedYear,selectedMonth)
        console.log(e)
    }
    return (
    <form onClick={e=>SubmitHandler(e)}>
        <div>
            <div>
                <label htmlFor="year">Year</label>
                <select id="year" ref={yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div>
                <label htmlFor="month">Month</label>
                <select id="month" ref={monthInputRef }>
                    <option value="1"  id="1">january</option>
                    <option value="2" id="2">february</option>
                    <option value="3" id="3">march</option>
                    <option value="4" id="4">april</option>
                    <option value="5" id="5">may</option>
                    <option value="6" id="6">june</option>
                    <option value="7" id="7">july</option>
                    <option value="8" id="8">august</option>
                    <option value="90" id="9">september</option>
                    <option value="10" id="10">october</option>
                    <option value="11" id="11">november</option>
                    <option value="12" id="12">december</option>
                </select>
            </div>
            <Button>Find Event</Button>
        </div>
    </form>
    )
}
EventSearch.getInitialProps = async () => ({
    onSearch:()=>{}
})

export default EventSearch
