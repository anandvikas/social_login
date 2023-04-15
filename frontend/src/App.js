import React, { useState, createContext } from 'react'
import AfterLogin from './Pages/AfterLogin'
import Login from './Pages/Login'

export const LoginContext = createContext()

const App = () => {
  // const [loginData, setLoginData] = useState({
  //   dataToShow: {
  //     name: 'vikas Anand',
  //     email: "viccu7@gamil.com",
  //     // picture: "https://lh3.googleusercontent.com/a/AEdFTp52tQtFhJQo3yOmkCSGtAktfH97zoSFtSN-hgtIhw=s96-c"
  //   },
  //   dataReceived: {
  //     "iss": "https://accounts.google.com",
  //     "nbf": 1674379235,
  //     "aud": "315890766103-lj4mpi731olqgcav5tjt4nam0nhsr1n6.apps.googleusercontent.com",
  //     "sub": "108502476640980758661",
  //     "email": "viccu7@gmail.com",
  //     "email_verified": true,
  //     "azp": "315890766103-lj4mpi731olqgcav5tjt4nam0nhsr1n6.apps.googleusercontent.com",
  //     "name": "Vikash kumar",
  //     "picture": "https://lh3.googleusercontent.com/a/AEdFTp52tQtFhJQo3yOmkCSGtAktfH97zoSFtSN-hgtIhw=s96-c",
  //     "given_name": "Vikash",
  //     "family_name": "kumar",
  //     "iat": 1674379535,
  //     "exp": 1674383135,
  //     "jti": "c2fea44bf2a015fb0c104056fb23ed1a12038dc4"
  //   }
  // })

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