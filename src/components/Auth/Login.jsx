import { useState } from 'react'
import './Login.scss'
import { useNavigate  } from 'react-router-dom'
import { postLogin } from '../../services/ApiService'
import { toast } from 'react-toastify';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    const handleLogin = async () => {
        let data = await postLogin(email, password)
    
        if(data.EC === 0 && data){
            toast.success(data.EM)
            navigate("/")
        }
        if(data && data.EC != 0){
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet ?
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>

            <div className='title col-4 mx-auto'>
                HoiDanIt
            </div>

            <div className='welcome col-4 mx-auto text-center'>
                Hello, who is this ?
            </div>

            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label for="">Email</label>
                    <input
                        value={email} 
                        type="email" 
                        className='form-control'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label for="">Password</label>
                    <input 
                        value={password}
                        type="password" 
                        className='form-control'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className='forgot-password'>Forgot password ? </span>
                <div>
                    <button onClick={() => handleLogin()} className='btn-submit'>Login to HoiDanIt</button>
                </div>
                <div onClick={() => navigate('/')} className='text-center'>
                    <span className='back'> &#60; &#60; Go to homepage</span>
                </div>
            </div>

        </div>
    )
}

export default Login