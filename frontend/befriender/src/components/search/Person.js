import React, { useState } from 'react';

function Person(props) {

    const [message, setMessage] = useState("Add friend");
    const [add, setAdd] = useState(true);

    const handleClick = id => {
        if (add) {
            fetch(`http://localhost:3001/api/friend/add`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ friend1: sessionStorage.getItem("user"), friend2: id })
            })
                .then(result => result.json())
                .then(data => {
                    setAdd(false);
                    setMessage(data.message);
                })
        }
    }

    return (
        <div className="person">
            <h1>{props.personData.username}</h1>
            <p>{props.personData.email}</p>
            <p>{props.personData.description}</p>
            <button disabled={!add} onClick={event => handleClick(props.personData.id)}>{message}</button>
        </div>
    );
}

export default Person;

