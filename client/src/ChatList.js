import React from 'react';
import Moment from 'react-moment';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {chatData: state.chatData};
};

function ChatList({chatData}) {
    return (
    <ul className="chat">
        {chatData.map((data) => (<li className={data.self? 'right': 'left'} key={data.timestamp}>
            <div className="chat-body">
                <div className="header">
                    <strong className={`primary-font ${data.self ? "pull-right": null}`}>{data.username}</strong> <small className={`${data.self ? null: "pull-right"} text-muted`}>
                    <span className="glyphicon glyphicon-time" /><Moment fromNow>{data.timestamp}</Moment></small>
                </div>
                <p>
                    {data.text}
                </p>
            </div>
        </li>))}
    </ul>);
}

export default connect(mapStateToProps)(ChatList);
