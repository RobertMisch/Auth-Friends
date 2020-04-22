import React, {useState} from 'react'

function AddFriend(){
    const [newFriend, setNewFriend]= useState({
        name:'',
        age:0,
        email:''
    })

const submitHandler= (e)=>{
    e.preventDefault()
}
const changeHandler= (e)=>{
    e.preventDefault()
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
}

return (
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
  );
}

export default AddFriend