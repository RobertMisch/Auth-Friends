import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

function FriendsList(){
    const [friendsList, setFriendsList]= useState([])

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
            {friendsList.map((item)=>{
                return (
                    <div className='friendCard' key={item.id}>
                        <div>id: {item.id}</div>
                        <div>name: {item.name}</div>
                        <div>age: {item.age}</div>
                        <div>email: {item.email}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList