import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Login(props){
const [loginState, setLoginState]= useState({credentals:{username:'Lambda School', password:'i<3Lambd4'},isLoading:false})

// console.log(loginState.credentals.username)
const changeHandler = (e)=>{
    e.preventDefault()
    setLoginState({credentals:{...loginState.credentals, [e.target.name]: e.target.value}})
}

const submitHandler = (e)=>{
    e.preventDefault()
    setLoginState({...loginState, isLoading:true})
    axiosWithAuth()
        .post('/api/login', loginState.credentals)
        .then(res => {
        // res.data.payload
        // redux - send the token to the redux store
        // browser storage - localStorage (this is probably the least secure choice)
        // cookies
        console.log(res.data.payload)
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        props.history.push('/protected');
        })
        .catch(err => console.log({ err }));

    //reseting form
    setLoginState({
        credentals:{
            username:'', 
            password:''
        },
        isLoading:false
    })
}
    
    return(
        <div>
            <form onSubmit={submitHandler}>
            <input
                type="text"
                name="username"
                value={loginState.credentals.username}
                onChange={changeHandler}
            />
            <input
                type="password"
                name="password"
                value={loginState.credentals.password}
                onChange={changeHandler}
            />
            <button>Log in</button>
            </form>
        </div>
    )
}

export default Login