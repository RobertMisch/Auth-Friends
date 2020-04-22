import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

function Friend(props){
    // const deleteFriend= (id)=>{
    //     axiosWithAuth().delete(`/api/friends/${id}`)
    //     .then(res => console.log(res))
    // }
    // const editFriend= (id)=>{
    //     e.preventDefault()
    //     axios.put(`/api/friends/${id}`)
    //     .then(res => console.log(res))
    // }
    return (
        <div className='friendCard'>
            <div>id: {props.data.id}</div>
            <div>name: {props.data.name}</div>
            <div>age: {props.data.age}</div>
            <div>email: {props.data.email}</div>
            <button onClick={()=>{props.delete(props.data.id)}}>delete</button>
            {/* <button onClick={()=>{editFriend(props.data.id)}}>edit</button> */}
        </div>
    )
}

export default Friend
