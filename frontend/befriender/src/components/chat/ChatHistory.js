import React, {useEffect, useState} from 'react';

function ChatHistory(props) {


  const [messages, setMessages] = useState([]);

  const me = parseInt(sessionStorage.getItem("user"));

  useEffect(() => {
    if (props.friend) {
      fetch(`http://localhost:3001/api/message/all/${me}/${props.friend.id}`)
      .then(results => results.json())
      .then(data => {
        setMessages(data);
      })
    }
  }, [props.friend])


    return (
      <div className="chatHistory">
         <h1> ChatHistory </h1>
         {messages.map(message => {
           return <p className={message.from_id === me ? 'right' : 'left'}>{ message.message }</p>
         })}
      </div>
     
  );
  }
  
  export default ChatHistory;