import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userSlice from '@/ducks/user/slice';

export default function LoginPage () {
  const dispatch = useDispatch();
  const [server, setServer] = useState('');
  const [screenName, setScreenName] = useState('');
  const [password, setPassword] = useState('');
  const updateServer = (e: React.ChangeEvent<HTMLInputElement>) => setServer(e.target.value)
  const updateScreenName = (e: React.ChangeEvent<HTMLInputElement>) => setScreenName(e.target.value)
  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const login = () => {
    dispatch(userSlice.actions.login({
      server,
      screenName,
      password
    }))
  }
  return (
    <>
      <div>
        <input type='text' value={server} onInput={updateServer} />
        <input type='text' value={screenName} onInput={updateScreenName} />
        <input type='password' value={password} onInput={updatePassword} />
        <button onClick={login}>Login</button>
      </div>
    </>
  )
}
