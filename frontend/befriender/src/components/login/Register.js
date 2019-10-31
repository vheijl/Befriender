import React,{useState} from 'react';


function Register() {

    // Used to keep track of user input to Register
    const [stateRegister, setRegister] = useState({email:"",password:""});
      
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
            <div className="">
                <input onChange={handleRegister} placeholder="Email" type="email"/>
            </div>
            <div className="">
                <input onChange={handleRegister} placeholder="password" type="password"/>
            </div>
            <button className="" type="submit"> Create User </button>

          </form>
      </div>
     
  );
  }
  
  export default Register;




