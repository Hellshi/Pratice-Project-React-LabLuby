import React from 'react'
import SingleUser from './SingleUser'

function Users({ data }) {

    return (
        <div className="UsersDiv">
          {data.map( user =>  (
              <SingleUser single={user} key={user.id}/>
          ))}  
        </div>
    )
}

export default Users
