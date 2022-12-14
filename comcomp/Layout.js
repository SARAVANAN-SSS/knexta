import Header from './Header'
import Footer from './Footer'
import {useRouter} from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter();

    return (
        <div>
        {router.pathname !== '/404' && <Header />}
        { children }
        {router.pathname !== '/404' && <Footer />}
        </div>
    );
}
 
export default Layout;