import React,{useState} from 'react';
import Register from './Register'


function Login(props) {

    // Used to keep track of user input to login
    const [stateLogin, setLogin] = useState({email:"",password:""});

    function handleChange (event) {
      setLogin({...stateLogin, [event.target.name] : event.target.value,
    })}

    function loginUser(event) {
      event.preventDefault();

      fetch("http://localhost:3001/api/user/login", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(stateLogin)
      })
      .then(results => results.json())
      .then(data => {
        sessionStorage.setItem("user", data.id);
        props.onLogin();
        props.history.push("/chat");
      })
    }

    return (
      <div className="login">
         
         <form onSubmit={loginUser}>
            <h1> Login </h1>
            <div className="">
                <p> Email: </p>
                <input onChange={handleChange} name="email" type="email" placeholder="email" />
            </div>

            <div className="">
              <p>Password:</p>
                <input onChange={handleChange} name="password" type="password" placeholder="password" />
            </div>

            <button className="" type="submit">Log in</button>

          </form>

          <Register className="register"/> 

      </div>     
  );
  }
  
  export default Login;

  