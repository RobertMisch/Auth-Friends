import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Friend from './Friend'
// import AddFriend from './AddFriend'

function FriendsList(){
    const [friendsList, setFriendsList]= useState([])
    const [newFriend, setNewFriend]= useState({
        name:'',
        age:0,
        email:''
    })

    const submitHandler= (e)=>{
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res=>{setFriendsList(res.data)})
        .catch(err=>{console.log(err)})
        setNewFriend({
            name:'',
            age:0,
            email:''
        })
    }
    const changeHandler= (e)=>{
        e.preventDefault()
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    const getData= ()=>{
    axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            setFriendsList(res.data)
        })
        .catch(err => {console.log(err)})
    }
    useEffect(()=>{getData()},[])

    return(
        <div>
            <h1>my friends (auth passed)</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <input 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={changeHandler}
                    >
                    </input>
                    <input 
                    type="number"
                    name="age"
                    value={newFriend.age}
                    onChange={changeHandler}
                    >
                    </input>
                    <input 
                    type="text"
                    name="email"
                    value={newFriend.email}
                    onChange={changeHandler}
                    >
                    </input>
                    <button type='submit'>Add Friend</button>
                </form>
            </div>
            {friendsList.map((item)=>{
                return (
                    <Friend data={item} key={item.id}/>
                )
            })}
        </div>
    )
}

export default FriendsList