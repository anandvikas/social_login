import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode';


const Google = ({ setter }) => {

    useEffect(() => {
        window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, //client id 
                callback: googleSignInResponse,
                login_uri: 'http://localhost:3000'
            });
            window.google.accounts.id.renderButton(
                document.getElementById("googleButton"),
                {
                    theme: "outline",
                    size: "large",
                    // shape:"square"
                }
            );
        }
    }, [])

    const googleSignInResponse = (res) => {
        // received credential as a base64-encoded JWT , it needs be decoded to gat the actual data.
        if (!res.credential) return;
        const data = jwt_decode(res.credential)
        signInHandler(data)
    }


    const signInHandler = (data) => {
        // you can call your login/sign-up api here instead of using setter ----
        setter({
            dataToShow: {
                email: data.email || "--",
                name: data.name || "--",
                picture: data.picture || "--"
            },
            dataReceived: data
        })
    }

    return (
        <div className='lg_grid_ele' id='googleButton'>
        </div>
    )
}

export default Google