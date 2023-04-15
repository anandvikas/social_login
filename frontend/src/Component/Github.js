import React from 'react'

import GitHubLogin from 'react-github-login';
import axios from "axios"


const Github = ({ setter }) => {

    const onSuccess = async (response) => {
        // success response returns a code which must be verified (varification is not allowed with http request through web browsers so we need to do the verification part on server side.)
        if (!response.code) return;

        let data = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_SERVER_URL}/github/verify-code`,
            data: {
                code: response.code
            }
        })
        data = data.data.details
        signInHandler(data);
    };

    const onFailure = (response) => {
        // write your error handling code here
    }


    const signInHandler = (data) => {
        // you can call your login/sign-up api here instead of using setter ----
        setter({
            dataToShow: {
                email: data.email || "--",
                name: data.name || "--",
                picture: data.avatar_url || "--"
            },
            dataReceived: data
        })
    }

    return (
        <div className='lg_grid_ele'>
            <div className='git_button_div'>
                <img src="/image/github.png" alt="" />
                <GitHubLogin
                    clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                    redirectUri={process.env.REACT_APP_GITHUB_REDIRECT_URI}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    className="github_button"
                />
            </div>

        </div>

    )
}


export default Github