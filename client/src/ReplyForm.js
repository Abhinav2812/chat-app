import React from 'react';
import {sendMsg, username} from "./socket";
import {connect} from 'react-redux';
import {addChat} from "./actions";

class ReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reply:""};
    }
    render() {
        const {reply} = this.state;
        const {disabled} = this.props;
        const submit = () => {
            const payload  = {
                username,
                text: reply,
                self: true,
                timestamp: Date.now()
            };
            sendMsg(payload);
            addChat(payload);
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
                       disabled={disabled}
                />
                <span className="input-group-btn"><button className="btn btn-warning btn-sm" id="btn-chat" onClick={submit} disabled={disabled}>Send</button></span>
            </div>
        )
    }
}

export default connect((state) => ({
    disabled: !state.connected
}))(ReplyForm);
