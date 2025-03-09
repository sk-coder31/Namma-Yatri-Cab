import React, { createContext , useState } from 'react'


export const userDataContext=createContext();

const UserContext = ({children}) => {

    const [user, setuser] = useState({
        email:'',
        fullname:{
            firstName:'',
            LastName:''
        },

    })

  return (
    <div>
      <userDataContext.Provider>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
