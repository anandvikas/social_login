import React, { useState, createContext } from 'react'
import AfterLogin from './Pages/AfterLogin'
import Login from './Pages/Login'

export const LoginContext = createContext()

const App = () => {
  
  const [loginData, setLoginData] = useState(null)

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      <div >
        {loginData === null ?
          <Login />
          :
          <AfterLogin />
        }
      </div>
    </LoginContext.Provider>


  )
}

export default App