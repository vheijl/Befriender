import React from 'react';

function Friends(props) {

  const handleClick = friend => {
    props.onSelect(friend);
  }

  return (
    <div className="friends">
      <h1> Friends </h1>
      <div className="friendList">
        {props.data.map(friend => {
          return (
            <>
              <div className={ props.friend && props.friend.id == friend.id ? "active" : ''} onClick={event => handleClick(friend)}>{friend.username}</div>
            </>)
        })}
      </div>
    </div>

  );
}

export default Friends;