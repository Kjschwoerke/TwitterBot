require('dotenv').config()
const Twit = require('twit')

const T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})


let tweet = {
    status: 'Testing "Post" for twitter bot'
}

T.post('statuses/update', tweet, tweeted)

function tweeted(err, data, response) {
    if (err) {
        console.error(`###There was an error: ${err}`)
    } else{
        console.log(data)
    }
    
}