import React from 'react'

import FacebookLogin from 'react-facebook-login';


const Facebook = ({ setter }) => {

    const responseFacebook = (response) => {
        signInHandler(response)
    }


    const signInHandler = (data) => {
        // you can call your login/sign-up api here instead of using setter ----
        setter({
            dataToShow: {
                email: data.email || "--",
                name: data.name || "--",
                picture: data.picture.data.url || "--"
            },
            dataReceived: data
        })
    }

    return (
        <div className='lg_grid_ele'>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                size="small"
            />
        </div>

    )
}


export default Facebook