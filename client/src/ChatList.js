import React from 'react';

export default function ChatList({chatData}) {
    return (
    <ul className="chat">
        {chatData.map((data, idx) => (<li className={data.orientation} key={idx}>
            <div className="chat-body">
                <div className="header">
                    <strong className={`primary-font ${data.orientation==="right" ? "pull-right": null}`}>{data.username}</strong> <small className={`${data.orientation==="left" ? "pull-right": null} text-muted`}>
                    <span className="glyphicon glyphicon-time" />12 mins ago</small>
                </div>
                <p>
                    {data.text}
                </p>
            </div>
        </li>))}
    </ul>);
}
