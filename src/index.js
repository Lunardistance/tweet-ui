import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';





function NameWithHandle({ author }) {
    return (
        <span className = "name-with-handle">
            <span className="name">{author.name}</span>
            <span className="handle">@{author.handle}</span>
        </span>
    )
}

function Avatar({hash}) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return  (<img src = {url} className="avatar" alt="avatar" />
    );
}


function Message({text}) {
    return (
        <div className='message'>
        {text}
        </div>
    );
}


const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className='time'>{timeString}</span>
    );
}

const ReplyButton = () => (
    <i className='fa fa-reply reply-button' />
);

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className='retweet-count'>
            {count}
            </span>
        );
    }else{
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className='retweet-button'>
    <i className ='fa fa-retweet retweet-button' />
    {getRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span className='like-button'>
        <i className ='fa fa-heart like-button' />
        {count > 0 && <span className='like-count'>  {count}
        </span>}
    </span>
);

const MoreOptionsButton = () => (
    <i className ="fa fa-ellipsis-h more-options-button" />
);
    
    var testTweet = [
                {
                message:"dogs",
                gravatar: "xyz",
                author: {
                    name: "mister dogman",
                    handle: "dogperson",
                },
                likes: 2,
                retweets: 1,
                timestamp: "2018-01-25 21:24:37"
            },
            {
                message:"let's be dogs",
                gravatar: "xyz",
                author: {
                    name: "DOGlas",
                    handle: "senordog",
                },
                likes: 2,
                retweets: 1,
                timestamp: "2018-06-05 21:24:37"
            },
            {
                message:"My service human is not in right now, please leave a message...",
                gravatar: "xyz",
                author: {
                    name: "Doug",
                    handle: "servicehuman",
                },
                likes: 2,
                retweets: 1,
                timestamp: "2019-01-25 21:24:37"
            }
        ];
    
class Tweet extends Component {
    render(){
        const {gravatar, author, timestamp, message, retweets, likes} = this.props.tweet;
        
    return (
        this.props.tweet.map(tweet=>( 
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className='content'>
            <NameWithHandle author={tweet.author} />
            <Time time={tweet.timestamp} />
            <Message text={tweet.message} />
            <div className='buttons'>
            <ReplyButton />
            <RetweetButton count={tweet.retweets} />
            <LikeButton count={tweet.likes} />
            <MoreOptionsButton />
            </div>
            </div>
        </div>
        ))
    );
   }
}


ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));

