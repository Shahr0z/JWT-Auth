import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { BaseUrl } from '../apis'

function Register() {
    const [inputs, setInputs] = useState({ email: '', password: '' })

    const handleValue = (e) => { setInputs({ ...inputs, [e.target.id]: e.target.value }) }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BaseUrl}register`, {
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
            <h2>Register yor Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your email' onChange={handleValue} value={inputs.email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter your password' onChange={handleValue} value={inputs.password} />
                </div>
                <button type='submit' >Register</button>
                <span>Already have an account? Login <Link to='/login'>here</Link></span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Register