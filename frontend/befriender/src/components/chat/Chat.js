import React, { useEffect, useState } from 'react';
import ChatHistory from './ChatHistory';
import Friends from './Friends';
import Info from './Info';
import SendText from './SendText';


function Chat(props) {

  // List of friends
  const [stateFriends, setFriends] = useState([]);

  useEffect(() => {

    if (sessionStorage.getItem("user")) {
      fetch(`http://localhost:3001/api/user/friends/all/${sessionStorage.getItem("user")}`)
        .then(results => results.json())
        .then(data => console.log(data))
    }
  })

  let show = sessionStorage.getItem("user") ? true : false;

  return (
    <div className={show ? "chat" : ""}>
      {show &&
        <>
          <ChatHistory />
          <Friends />
          <Info />
          <SendText />
        </>}
        {!show && <h1>Please login to view this page.</h1>}

    </div>
  );
}

export default Chat;