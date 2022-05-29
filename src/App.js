import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [loginStatus,setLoginStatus] = useState('');

   return (
    <div>
      <label>Usrename</label>
      <input type="text" onChange={(event) => {
        setUsername(event.target.value)
      }} />
      <br />
      <label>password</label>
      <input type="text" onChange={(event) => {
        setPassword(event.target.value)
      }} />
      <button
        onClick={() => {
          axios.post('http://localhost:3000/register', {
            username: username,
            pw: password
          }).then(data => {
            console.log(data, 'inside register')
          })
            .catch(err => {
              console.log(err)
            })
        }}
      >Register</button>
      <button
          onClick={() => {
            axios.post('http://localhost:3000/login', {
              username: username,
              pw: password
            }).then(data => {
              console.log(data, 'inside register')
              if(data.data==='Username and password matched'){
               setLoginStatus('Logged in successfully')
              }
              else{
                setLoginStatus('Wrong Password')
              }
            })
              .catch(err => {
                console.log(err)
              })
          }}
      >Login</button>
<br/>
      <label>LoginSTatus</label>
      {loginStatus}
    </div>
  );
}

export default App;
