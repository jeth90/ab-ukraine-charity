import Image from 'next/image'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    return (
        <div>
            <div className="gaming__sidebar">
                <div className="content__box">                  
                    <div className="wrapper home space-y-3">
                        <a href="/" className="icon">
                            <i className="ri-home-5-line"></i>
                        </a>
                        <a href="#" className="page_name">
                            Home
                        </a>
                    </div>
                  
                    <div className="wrapper market space-y-3">
                        <a href="/marketplace" className="icon">
                            <i className="ri-store-line"></i>
                        </a>
                        <a href="#" className="page_name">
                            Market
                        </a>
                    </div>                  
                    <div className="wrapper create space-y-3">
                        <a href="#" className="icon">
                            <i className="ri-lightbulb-line"></i>
                        </a>
                        <a href="#" className="page_name">
                            Create
                        </a>
                    </div>
                  
                    <div className="wrapper about space-y-3">
                        <a href="#" className="icon">
                            <i className="ri-information-line"></i>
                        </a>
                        <a href="#" className="page_name">
                            About
                        </a>
                    </div>
                </div>
                <div className="avatars space-y-3">
                    <a href="Profile.html">
                        <Image src="/img/avatars/avatar_3.png" alt="Avatar" className="avatar avatar_sidebar" layout='fill' objectFit='cover'/>
                    </a>
                    <p className="name text-center">Me</p>
                </div>
            </div>
            <div className="mr-100"></div>        
        </div>
    )
}

export default Sidebar
