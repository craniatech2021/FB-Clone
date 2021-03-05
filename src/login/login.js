import React from 'react';
import { Button } from '@material-ui/core';
import '../style/style.scss';
import { auth, provider } from '../firebase/firebase';
import { useStateValue } from '../provider/stateProvider';
import { actionTypes } from '../provider/reducer'

function Login() {
    const [ dispatch ] = useStateValue();

    const SignIn = () => {

        auth.signInWithPopup(provider)
        .then(res => {
            console.log(res)
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            });
        })
        .catch(err => alert(err.message))
    }
    return (
        <div className='login'>
            <div className='login_logo'>
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                alt=''
                />

                <img
                src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' 
                alt=''
                />
            </div>

            <Button
            type='submit'
            onClick={SignIn}
            >Sign In</Button> 
        </div>
    )
}

export default Login
