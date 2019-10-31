import React,{useState} from 'react';
import Person from './Person';

function Search() {

    // Used to keep track of search keyword
    const [stateSearch, setSearch] = useState({search:""});

    function handleSearch (event) {
      setSearch({[event.target.name] : event.target.value})
    }

    // Used to keep track of people in search
    const [peopleState, setPeople] = useState([]);

    function searchUser(event) {
      event.preventDefault();
      console.log(setSearch);

      fetch("http://localhost:3001/api/user/search", {method:"POST", body:JSON.stringify(stateSearch)})
      .then(results => results.json())
      .then((data)=> setPeople(data)
      )
    }

    return (
      <div className="login">
         
         <form onChange={searchUser}>
            <h1> Search for people to befriend </h1>
            <div className="">
                <input onChange={handleSearch} name="search" type="text" placeholder="Search name or description" />
            </div>

          </form>
            
            <ul>
                {peopleState.map( i => {
                    return <li> <Person personData={{i}}/> </li>
                })}
            </ul>      

      </div>     
    );
  }
  
  export default Search;