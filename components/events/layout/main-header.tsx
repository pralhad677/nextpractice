import {NextPage} from 'next'
import Link from 'next/link'

interface InitialProps {
   
}
interface Props extends InitialProps {}


let mainHeader:NextPage<Props,InitialProps> =  (props) => {
    return <header>
        <div>
            <Link href="/">NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href="/events">All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}

mainHeader.getInitialProps = async () => ({

})
export default  mainHeader