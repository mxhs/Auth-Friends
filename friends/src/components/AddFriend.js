import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {v4 as uuidv4} from 'uuid'
import {useHistory} from 'react-router-dom'



const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })
    const history = useHistory()


    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addNewFriend = (e) => {
        e.preventDefault()
        axiosWithAuth().post('/friends', newFriend)
        .then(res =>{
            console.log(res)
            history.push("/friends")
        })

        // history push etc.
    }

    return (
        <form onSubmit={addNewFriend}>
            <input 
                type="text"
                name="name"
                value={newFriend.name}
                placeholder="name"
                onChange={handleChange}
            />
            <input 
                type="email"
                name="email"
                value={newFriend.email}
                placeholder="email"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="age"
                value={newFriend.age}
                placeholder="age"
                onChange={handleChange}
            />
            <button>Add New Friend</button>
        </form>
    )
}

export default AddFriend
