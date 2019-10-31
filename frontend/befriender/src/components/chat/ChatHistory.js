import React, { useEffect, useState, useRef } from 'react';

function ChatHistory(props) {


  const [messages, setMessages] = useState([]);

  const me = parseInt(sessionStorage.getItem("user"));

  const myRef = useRef(null);

  const dateTime = date => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const day = `${date.getDate()}`.padStart(2, 0);
    const hours = `${date.getHours()}`.padStart(2, 0);
    const minutes = `${date.getMinutes()}`.padStart(2, 0);

    const stringDate = [year, month, day].join("-")
    return `${stringDate} ${hours}:${minutes}`;
  }

  const scrollToBottom = () => {
    myRef.current.scrollTo({ left: 0, top: myRef.current.scrollHeight, behavior: "smooth" })
  }

  useEffect(scrollToBottom, [props.update]);

  useEffect(() => {
    if (props.friend) {
      fetch(`http://localhost:3001/api/message/all/${me}/${props.friend.id}`)
        .then(results => results.json())
        .then(data => {
          setMessages(data);
          scrollToBottom();
        })
    }
  }, [props.friend, props.update]);

  return (
    <div className="chatHistory" ref={myRef}>
      <h1> ChatHistory </h1>
      {messages.map(message => {
        return (
          <div className="message">
            <p title={dateTime(new Date(message.created_at))} className={message.from_id === me ? 'right' : 'left'}>{message.message}</p>
          </div>
        )
      })}
    </div>

  );
}

export default ChatHistory;