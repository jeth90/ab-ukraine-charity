
import Meta from './templates/Meta'
import Header from './templates/Header'
import HeaderMobile from './templates/HeaderMobile'
import Footer from './templates/Footer'
import Sidebar from './templates/Sidebar'

import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router = useRouter()
    return (
        <>
            <Meta/>    
            <div className="overflow-hidden">
               
                <main className="home__5">
                    <div className='d-lg-flex d-md-block'>
                                             
                        <div className='overflow-hidden' style={{ 'width': '100%'}}>
                            <div>
                                {children}
                            </div>
                            <Footer/>
                        </div>
                    </div>                    
                </main>
            </div>
        </>
    )
}

export default Layout
