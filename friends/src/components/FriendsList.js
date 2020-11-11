import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FriendsList = () => {
    const [friends, setFriends] = useState() 

    useEffect (() => {  
        axiosWithAuth().get('/friends')
        .then(res =>{
            console.log(res)
            setFriends(res.data)
            console.log("friends", friends)
        })
    },[])

    const deleteFriend = (friend) => {
        console.log(friend)
        axiosWithAuth().delete(`friends/${friend.id}`)
        .then(res =>{
            setFriends(res.data)
        })
    }
    
    return (
        <div>
            <h1>Friends List</h1>
            <Link to='/addfriend'>Add New Friend</Link>
            {friends?friends.map(friend =>{
                return (
                    <div className="friendCard">
                        <div className="cardText">
                            <h2>{friend.name}</h2>
                            <p>{friend.email}</p>
                            <p>Age: {friend.age}</p>
                        </div>
                        <button>Edit</button>
                        <button onClick={()=>{deleteFriend(friend)}}>Delete</button>
                    </div>
                )
            }):<p>Friends List Is Loading</p>}
        </div>
    )
}
