import React,{useState} from 'react';
import Register from './Register'


function Login(event) {

    // Used to keep track of user input to login
    const [stateLogin, setLogin] = useState({email:"",password:""});

    function handleChange (event) {
      setLogin({...stateLogin, [event.target.name] : event.target.value,
    })}

    function loginUser(event) {
      event.preventDefault();
      console.log(stateLogin);

      fetch("http://localhost:3001/api/user/login", {method:"POST", body:JSON.stringify(stateLogin)})
      .then(results => results.json())
      .then(data => console.log(data))
    }

    return (
      <div className="login">
         
         <form onSubmit={loginUser}>
            <h1> Login </h1>
            <div className="">
                <input onChange={handleChange} name="email" type="email" placeholder="email" />
            </div>

            <div className="">
                <input onChange={handleChange} name="password" type="password" placeholder="password" />
            </div>

            <button className="" type="submit">Log in</button>

          </form>

          <Register> </Register>

      </div>     
  );
  }
  
  export default Login;

  