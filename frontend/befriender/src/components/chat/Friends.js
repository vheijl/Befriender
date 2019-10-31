import React, { useEffect } from 'react';

function Friends(props) {

  useEffect(() => {
    console.log(props.data);
    console.log(props.onSelect)

  }, [props.data])

  const handleClick = friend => {
    props.onSelect(friend)
  }

  return (
    <div className="friends">
      <h1> Friends </h1>
      <div className="friendList">
        {props.data.map(friend => {
          return (
            <>
              <div onClick={event => handleClick(friend)}>{friend.username}</div>
            </>)
        })}
      </div>
    </div>

  );
}

export default Friends;