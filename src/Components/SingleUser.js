import React from 'react'

function SingleUser({ single }) {
    return (
        <div className="singleUser">
           {`${single.name} (${single.age} years old)`} 
        </div>
    )
}

export default SingleUser
