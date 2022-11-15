import React from 'react';

function Login(props) {
    return (
        <form>
            <input
              type="text"
              placeholder="Username" 
            />
            <input 
              type="password"
              placeholder="Password" 
            />
            <button 
              type="submit" 
              onClick={props.handler}
            >
              Log In
            </button>
        </form>
    );
}

export default Login;