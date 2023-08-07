import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';


const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default Root;