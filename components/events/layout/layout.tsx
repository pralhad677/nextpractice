import {NextPage} from 'next'
import {Fragment} from 'react'
import Header from './main-header'

interface InitialProps {
   
}
interface Props extends InitialProps {}


let layout:NextPage<Props,InitialProps> =  (props) => {
    return <Fragment>
        <Header />
        <main>props.children</main>
    </Fragment>
}

layout.getInitialProps = async () => ({

})
export default  layout 