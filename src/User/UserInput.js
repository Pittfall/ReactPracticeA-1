import React from 'react';

const UserInput = (props) => {
    return (
        <div>
          <input type="text" value={props.name} onChange={props.changeName}/>  
        </div>
    )
}

export default UserInput;