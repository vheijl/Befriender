import React,{useState} from 'react';


function Register() {

    // Used to keep track of user input to Register
    const [stateRegister, setRegister] = useState({username:"",email:"",password:"",description:"",image_url:"", latitude:"", longitude:""});
      
    function handleRegister(event){
      setRegister({...stateRegister,[event.target.name]:event.target.value,
    })}

    function registerUser(event){
      event.preventDefault();
      console.log(stateRegister);

      fetch("http://localhost:3001/api/user/register", {method:"POST", body:JSON.stringify(stateRegister)})
      .then(results => results.json())
      .then(data => console.log(data))
    }

    return (
      <div>
      <form onSubmit={registerUser}>
            <h1> Register</h1>
            <div>
                <p> Email: </p>
                <input onChange={handleRegister} name="email" placeholder="Email" type="email"/>
            </div>

            <div>
              <p> Password: </p>
                <input onChange={handleRegister} name="password" placeholder="password" type="password"/>
            </div>

            <div>
              <p> Short description of yourself: </p>
              <textarea onChange={handleRegister} name="description" cols="60" rows="6"> </textarea>
            </div>
            
            <div>
              <p> Image Url:</p>
              <input onChange={handleRegister} type="text" name="image_url" placeholder="URL"/>
            </div>

            <div>
              <h3> Where do you live? Data is only shared between friends... We promise</h3>
              <p> Location Coordinates </p>
                <input onChange={handleRegister} placeholder="Longitude" name="longitude" type="text"/>
                <input onChange={handleRegister} placeholder="Latitude" name="latitude" type="text"/>
            </div>
            

            <button type="submit"> Create User </button>

          </form>
      </div>
     
  );
  }
  
  export default Register;




