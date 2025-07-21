import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Admin/Content/Dashboard';
import ManageUser from './components/Admin/Content/ManageUser';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import App from "./App";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<App/>}>
                    <Route index element={< Homepage />}/>
                    <Route path='user' element={<User/>}/>
                </Route>
                <Route path='admin' element={< Admin />}>
                    <Route index element={< Dashboard />}/>
                    <Route path='manage-user' element={<ManageUser/>}/>
                </Route>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Routes>

             <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

        </>

        
    )
}

export default Layout;