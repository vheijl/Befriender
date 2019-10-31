import React,{useEffect} from 'react';
import ChatHistory from './ChatHistory';
import Friends from './Friends';
import Info from './Info';
import SendText from './SendText';
import 


function Chat() {

  // List of friends
  const [stateFriends, setFriends] = useState([]);

  useEffect(){
    fetch("http://localhost:3001/api/user/friends", {method:"GET", body:JSON.stringify(stateLogin)})
      .then(results => results.json())
      .then(data => console.log(data))
  }

    return (
      <div className="chat">
         <ChatHistory/>
         <Friends/>
         <Info/>
         <SendText/>
      </div>
  );
  }
  
  export default Chat;