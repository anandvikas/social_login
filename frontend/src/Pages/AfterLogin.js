import React, { useContext } from 'react'
import { LoginContext } from '../App'

const AfterLogin = () => {

    const { loginData } = useContext(LoginContext);
    const { dataToShow, dataReceived } = loginData
    console.log(loginData)

    return (
        <div className='al'>
            <div className='dts'>
                <div className='dts_img'><img src={dataToShow.picture || "/image/noAvatar.png"} alt='' /></div>
                <div className='hello'>hello !</div>
                {
                    dataToShow.name && <div className='name'>{dataToShow.name}</div>
                }
                {
                    dataToShow.email && <div className='email'>{dataToShow.email}</div>
                }
            </div>

            <div className='dr'>
                <div className='dr_title'>Data received</div>
                <pre className='dr_data'>{JSON.stringify(dataReceived, null, 2)}</pre>
            </div>

            <div className='go_back'><button onClick={()=>{window.location.reload()}}>Back to login buttons</button></div>

        </div>
    )
}

export default AfterLogin