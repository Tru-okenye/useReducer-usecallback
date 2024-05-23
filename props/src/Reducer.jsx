import React, {useReducer} from 'react'
import './App.css';
// initial data
const userData = [
    {
        id: 1,
        name: 'Truphy',
        age: 20,
    },
      {
        id: 2,
        name: 'kerubo',
        age: 21,
    },
       {
        id: 3,
        name: 'Alex',
        age: 17,
    }
];
// dispatch method 
const reducerMethod = (users, action) => {
    switch(action.type) {
        case 'deleteUser': {
            return users.filter(user => user.id !== action.id)
        }
        default:
            return users;
    }
}
const Reducer = () => {
    const [users, dispatch] = useReducer(reducerMethod, userData)

    const handleDelete = (user) => {
        dispatch({ type: "deleteUser", id: user.id });
      }
  return (
    <>
    <div className='users'>
        <div className='user'>
            {
                users.map((user)=> {
                    return (

                    <div key={user.id} className='person'>
                    {user.name}
                    {user.age}
                    <button onClick={() => handleDelete(user)}>Delete</button>
                    </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Reducer