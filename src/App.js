import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [ message, setmessage] = useState('null');


  const handleChange = (event) => {
    setPassword(event.target.value);

    if (event.target.value.length === 0) {
      setmessage('null');
    }

    if (event.target.value.length < 3 ) {
      setmessage('Week');}
      
      if (event.target.value.length < 7  && event.target.value.length > 2 ) {
      setmessage('Medium');} 
      
      if (event.target.value.length > 6 ) {
      setmessage('Strong');
  };
 }

  const handleSubmit = (event) => {
    event.preventDefault();
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handleChange}
          setmessage = {setmessage}
        />
      </label>
            <button type="submit" >
        Submit
      </button>

    <p>Your Password Strength  is {message} </p>

    </form>
  );
}

export default App;