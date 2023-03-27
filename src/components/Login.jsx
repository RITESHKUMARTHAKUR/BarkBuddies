import React, { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault();
      console.log(`Username: ${username} Password: ${password}`);
      // Handle authentication logic here
    };
  
    return (
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    )
}

export default Login
