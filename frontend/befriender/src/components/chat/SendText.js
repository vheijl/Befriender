import React, { useState } from 'react';

function SendText(props) {

  const [input, setInput] = useState({message: ""});

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`http://localhost:3001/api/message/post`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from_id: sessionStorage.getItem("user"), to_id: props.friend.id, type: 0, message: input.message })
    })
      .then(result => result.json())
      .then(data => {
        // On send!
        setInput({ message: "" });
        props.onSubmit();
      })
  }

  const handleChange = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  }


  return (
    <div className="sendText">
      <form onSubmit={handleSubmit}>
        <input value={input.message} onChange={handleChange} name="message" type="text" />
        <button type="submit">Send</button>
      </form>
    </div>

  );
}

export default SendText;