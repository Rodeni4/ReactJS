import React from 'react';
import '../styles/Message.css';

function Message(props) {
    return (
        <div className="message-container">
            <p>{props.text}</p>
        </div>
      );
}

export default Message;
