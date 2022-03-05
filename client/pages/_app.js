import Layout from '../components/Layout'
import '../styles/globals.css'
import '../public/css/plugins/remixicon.css'
import '../public/css/plugins/bootstrap.min.css'
import '../public/css/plugins/swiper-bundle.min.css'
import '../public/css/fontawesome-5-pro.all.min.css'
import '../public/css/style.css'
import '../public/css/app.css'
import '../public/css/swiper.css'
import "react-datetime/css/react-datetime.css";
import "../components/home/styles.css"
import { AppProvider } from '../context/ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>  
    </AppProvider>
  )
}

export default MyApp
