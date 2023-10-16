import React, { useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')

    
    const loadData = () => {
        fetch('/api/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    const handleAdduser = () => {
        fetch('/api/users', {
            method:"POST",
            body:JSON.stringify({user}),
            headers:{"Content-type": "application/json"}
        })
        loadData()
        console.log(loadData())
    }

    return (
        <div>
            <h1>All users</h1>
            <div>
                <input onChange={e => setUser(e.target.value)} type="text" />
                <button className={handleAdduser}>Add user</button>
            </div>
            <button onClick={loadData}> Load data</button>
            {
                users.map(user => {
                    return(
                        <div key={user.id}>{user.name} </div>
                    )
                })
            }
        </div>
    );
};

export default Users;