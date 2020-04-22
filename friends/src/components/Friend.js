import React from 'react'


function Friend(props){

    return (
        <div className='friendCard'>
            <div>id: {props.data.id}</div>
            <div>name: {props.data.name}</div>
            <div>age: {props.data.age}</div>
            <div>email: {props.data.email}</div>
        </div>
    )
}

export default Friend
