const axios = require("axios");

exports.verifyGithubCode = async (request, response) => {
    const { code } = request.body

    // console.log("code", code)

    if (!code) {
        response.status(200).json({
            status: false
        })
        return;
    }
    let config = {
        method: "POST",
        url: "https://github.com/login/oauth/access_token",
        headers: {
            Accept: "application/json"
        },
        data: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: "http://localhost:3000/"
        }
    }

    let data;
    try {
        data = await axios({
            method: "POST",
            url: "https://github.com/login/oauth/access_token",
            headers: {
                Accept: "application/json"
            },
            data: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
                redirect_uri: "http://localhost:3000/"
            }
        });
        if (!data || !data.data) {
            response.status(200).json({
                status: false,
            })
            return;
        }
        data = data.data
    } catch (err) {
        response.status(200).json({
            status: false,
            error: err
        })
        return;
    }
    
    let userDetails;
    try {
        userDetails = await axios({
            method: "GET",
            url: "https://api.github.com/user",
            headers: {
                Authorization: `Bearer ${data.access_token}`
            }
        });
        if (!userDetails || !userDetails.data) {
            response.status(200).json({
                status: false,
            })
            return;
        }
        userDetails = userDetails.data
    } catch (err) {
        response.status(200).json({
            status: false,
            error: err
        })
        return;
    }

    response.status(200).json({
        status: true,
        details: userDetails
    })

}

