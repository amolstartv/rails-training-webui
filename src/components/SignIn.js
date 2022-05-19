import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const [username, setUsername] = useState(''),
    [password, setPassword] = useState('');
  const history = useNavigate();

  const onSubmit = (e) => {
    axios.post("http://localhost:3000/auth/sign_in", { email: username, password: password })
    .then(res => {
      const headers = res.headers;
      localStorage.setItem('access-token', headers['access-token']);
      localStorage.setItem('client', headers['client']);
      localStorage.setItem('uid', headers['uid']);
      localStorage.setItem('expiry', headers['expiry']);
      history('/');
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <form>
      <h2>Sign In</h2>
      <div>
        <label>Username</label>
        <input type="text" onChange={ e => setUsername(e.target.value)}/>
      </div>

      <div>
        <label>Password</label>
        <input type="password" onChange={ e => setPassword(e.target.value) }/>
      </div>

    <button type='button' onClick={onSubmit}>Submit</button>
    </form>
  )
}
