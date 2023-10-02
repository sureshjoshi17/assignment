// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const userAuth = JSON.parse(localStorage.getItem('userAuth'));
    // let auth = true
    return (
        <>          
            {!userAuth?.auth ? <Navigate to="/" /> :  <Outlet />}            
        </>
    );
};

export default ProtectedRoute;
