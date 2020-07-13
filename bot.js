console.log('The "Follow-Bot" is starting!')

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

//setting up a user stream
let stream = T.stream('statuses/filter', { track: 'Kenneth56744636' })

//stream anytime a user follows me (additional options on the Twitter API streaming documentation)
//stream.on('follow', followed)
stream.on('follow', followed)

// function tweetEvent(eventMsg) {
//     console.log(eventMsg + ' this tweet tracker worked!')
// }

//create followed function that runs when a twitter user follows me.
function followed(eventMsg) {
    let name = eventMsg.source.name
    let screenName = eventMsg.source.screen_name
        tweetIt('@' + screenName + ' Thank you for following me!')
}

//function to post a new tweet to twitter.
function tweetIt(txt) {
    //Create an object 'tweet' containing a status to be posted to the twitter account.
    let tweet = {
        status: txt
    }
    //make the post request to the twitter API.
    T.post('statuses/update', tweet, tweeted)
    //function to console.log(success or error) when post is made.
    function tweeted(err, data, response) {
        if (err) {
            console.error(`###There was an error: ${err}`)
        } else{
            console.log(data.tweet)
        }
        
    }
}
