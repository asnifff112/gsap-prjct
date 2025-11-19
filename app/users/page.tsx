
import React from 'react'

async function getstaticprops() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users",
     {cache : "force-cache", })

     const data = await res.json()
     return data
}


export default async function Users() {
    const users = await getstaticprops()
  return (
    <div>
      <ul>
        {users.map((user:any) => (
            <li key={user.id}>
                <p>name : {user.name}</p>
                <p>email:{user.email}</p>
                <p>username :{user.username}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}
