import React, { Children, useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';


const Child = ({ setter }) => {

    const onSuccess = async (tokenResponse) => {
        console.log(tokenResponse)
        if (!tokenResponse.access_token) {
            console.log("inside error")
            // onError({ message: "Data not received" })
            return
        };
        console.log("outside error")
        const data = await jwt_decode(tokenResponse.access_token)
        console.log(data)
        signInHandler(data)
    }

    const onError = (err) => {
        console.log(err)
    }

    const login = useGoogleLogin({
        onSuccess,
        onError
    });

    const signInHandler = (data) => {
        // you can call your login/sign-up api here instead of using setter ----
        setter({
            dataToShow: {
                email: data.email,
                name: data.name,
                picture: data.picture
            },
            dataReceived: data
        })
    }

    return (
        <div onClick={() => login()}>
            Sign in with Google 🚀{' '}
        </div>
    )
}



const Google2 = ({ setter }) => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <Child setter={setter} />
        </GoogleOAuthProvider>
    )
}


export default Google2