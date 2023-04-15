import React, { useContext } from 'react'
import { LoginContext } from '../App'

import Google from '../Component/Google'
import Facebook from '../Component/Facebook';
// import Google2 from '../Component/Google2';
import Github from '../Component/Github';

const Login = () => {
    const { setLoginData, loginData } = useContext(LoginContext);
    // console.log(loginData)

    return (
        <div className='lg'>
            <div className='lg_grid'>
                <Google setter={setLoginData} />
                <Facebook setter={setLoginData} />
                <Github setter={setLoginData} />
            </div>
        </div>
    )
}

export default Login