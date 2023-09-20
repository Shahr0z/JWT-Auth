import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { BaseUrl } from '../apis'
import axios from 'axios'

function Login() {
    const [inputs, setInputs] = React.useState({ email: '', password: '' })

    const handleValue = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BaseUrl}login`, {
                email: inputs.email,
                password: inputs.password
            })
            const data = await res.data
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <h2>Login yor Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your email' onChange={handleValue} value={inputs.email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter your password' onChange={handleValue} value={inputs.password} />
                </div>
                <button type='submit'>Login</button>
                <span>Don't have an account? Register <Link to='/register'>here</Link></span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login