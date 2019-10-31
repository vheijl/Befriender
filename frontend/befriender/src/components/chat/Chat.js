import React, { useEffect, useState } from 'react';
import ChatHistory from './ChatHistory';
import Friends from './Friends';
import Info from './Info';
import SendText from './SendText';


function Chat(props) {

  // List of friends
  const [stateFriends, setFriends] = useState([]);
  const [currentFriend, setCurrentFriend] = useState(null);
  const [update, setUpdate] = useState(0);

  let setFriend = (friend) => setCurrentFriend(friend);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      fetch(`http://localhost:3001/api/friend/all/${sessionStorage.getItem("user")}`)
        .then(results => results.json())
        .then(data => {
          setFriends(data);
          setCurrentFriend(data[0]);
        })
    }
  }, [])

  const handleUpdate = () => {
    setUpdate(update+1);
  }

  let show = sessionStorage.getItem("user") ? true : false;

  return (
    <div className={show ? "chat" : ""}>
      {show &&
        <>
          <ChatHistory friend={currentFriend} update={update} />
          <Friends friend={currentFriend} onSelect={setFriend} data={stateFriends} />
          {currentFriend && <Info friend={currentFriend} />}
          <SendText friend={currentFriend} onSubmit={handleUpdate} />
        </>}
        {!show && <h1>Please login to view this page.</h1>}

    </div>
  );
}

export default Chat;