import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory()
    return (
        <div className='login'>
            <div className="login__logo">

                <img src="/images/Facebook-logo.png" alt="facebook-logo" />

                <img src="/images/Facebook.png" alt="" />
            </div>
            <Button type='submit' onClick={() => history.push('/home')}>Sign In</Button>

        </div>
    )
}

export default Login
