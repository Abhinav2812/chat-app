import React from 'react';
import ChatList from './ChatList';
import ReplyForm from './ReplyForm';

const chatData = [
  {
    username: "Jack Sparrow",
    orientation: "left",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
  },
  {
    username: "Bhaumik Patel",
    orientation: "right",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
  },
  {
    username: "Jack Sparrow",
    orientation: "left",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
  },
  {
    username: "Bhaumik Patel",
    orientation: "right",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
  }
];


function App() {
  return (
    <div>
      <div className="panel-body">
        <ChatList chatData={chatData}/>
      </div>
      <div className="panel-footer">
        <ReplyForm/>
      </div>
    </div>
  );
}

export default App;
