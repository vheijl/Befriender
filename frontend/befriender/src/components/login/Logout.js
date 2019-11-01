import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


function Logout(props) {

    useEffect(() => {
        sessionStorage.removeItem("user");
        props.onLogout();
    }, []);

    return (<Redirect to="/" />)
}

export default Logout;

