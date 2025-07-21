import { useState } from 'react'
import './Register.scss'
import { useNavigate  } from 'react-router-dom'
import { toast } from 'react-toastify';
import { postRegister } from '../../services/ApiService';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)
    let navigate = useNavigate();

    const handleRegister = async () => {
        let data = await postRegister(email, password)
    
        if(data.EC === 0 && data){
            toast.success(data.EM)
            navigate("/login")
        }
        if(data && data.EC != 0){
            toast.error(data.EM)
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet ?
                <button onClick={() => navigate("/login")}>Sign up</button>
            </div>

            <div className='title col-4 mx-auto'>
                HoiDanIt
            </div>

            <div className='welcome col-4 mx-auto text-center'>
                Start your journey
            </div>

            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label for="">Email (*)</label>
                    <input
                        value={email} 
                        type="email" 
                        className='form-control'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group group-pass'>
                    <label for="">Password (*) </label>
                    <input 
                        value={password}
                        type={isShowPassword ? 'text' : 'password'}
                        className='form-control'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                     {
                        isShowPassword ? 
                        <span onClick={() => setIsShowPassword(false)} className='icon-eye'>
                            <VscEyeClosed/>
                        </span>
                        :
                        <span onClick={() => setIsShowPassword(true)} className='icon-eye'>
                            <VscEye/>
                            
                        </span>
                    }
                </div>

                 <div className='form-group'>
                    <label for="">Username</label>
                    <input 
                        value={username}
                        type="text" 
                        className='form-control'
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button onClick={() => handleRegister()} className='btn-submit'>Create my free account</button>
                </div>
                <div onClick={() => navigate('/')} className='text-center'>
                    <span className='back'> &#60; &#60; Go to homepage</span>
                </div>
            </div>

        </div>
    )
}

export default Register