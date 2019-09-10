import React from 'react';
import {sendMsg} from "./socket";

export default class ReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reply:""};
    }
    render() {
        const {reply} = this.state;
        const submit = () => {
            sendMsg(reply);
            this.setState({reply: ""});
        };
        return (
            <div className="input-group">
                <input id="btn-input"
                       type="text"
                       onChange={(e) => this.setState({reply: e.target.value})}
                       onKeyPress={e => {
                           if (e.key === 'Enter') {
                               submit();
                           }
                       }}
                       value={reply}
                       className="form-control input-sm"
                       placeholder="Type your message here..."
                       autoComplete="off"
                />
                <span className="input-group-btn"><button className="btn btn-warning btn-sm" id="btn-chat" onClick={submit}>Send</button></span>
            </div>
        )
    }
}
