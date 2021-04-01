import { useEffect, useState } from 'react';
import '../styles/user.scss';

export function User(props){
  const [user, setUser] = useState()

  useEffect(() => {
    fetch('https://api.github.com/users/samuel1992')
      .then(response => response.json())
      .then(data => setUser(data.name))
  }, [])

  return(
    <span>{user}</span>
  )
}