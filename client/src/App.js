import React from 'react';
import ChatList from './ChatList';
import ReplyForm from './ReplyForm';

function App() {
  return (
    <div>
      <div className="panel-body">
        <ChatList/>
      </div>
      <div className="panel-footer">
        <ReplyForm/>
      </div>
    </div>
  );
}

export default App;
