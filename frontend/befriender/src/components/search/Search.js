import React, { useState, useEffect } from 'react';
import Person from './Person';

function Search() {

  // Used to keep track of search keyword
  const [stateSearch, setSearch] = useState({ search: "" });

  function handleSearch(event) {
    setSearch({ [event.target.name]: event.target.value });
  }

  // Used to keep track of people in search
  const [peopleState, setPeople] = useState([]);

  function searchUser(event) {
    if (event) event.preventDefault();

    console.log(stateSearch);

    fetch(`http://localhost:3001/api/search/keyword`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: sessionStorage.getItem("user"), keyword: stateSearch.search })
    })
      .then(results => results.json())
      .then((data) => {
        console.log(data);
        setPeople(data);
      })
  }

  useEffect(() => { searchUser() }, [stateSearch])

  useEffect(() => {
    searchUser();
  }, [])

  let show = sessionStorage.getItem("user") ? true : false;

  return (

    <div className="login">

      {show &&
        <>
          <form
          // onChange={searchUser}
          >
            <h1> Search for people to befriend </h1>
            <div className="">
              <input onChange={handleSearch} name="search" type="text" placeholder="Search name or description" />
            </div>

          </form>

          {peopleState.map((person, index) => {
            return <Person isFriend={true} key={index} personData={person} />
          })}
        </>
      }
      {!show && <h1>Please login to view this page.</h1>}


    </div>
  );
}

export default Search;