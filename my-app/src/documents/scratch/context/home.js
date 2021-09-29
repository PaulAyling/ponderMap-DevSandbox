import React, { useContext } from 'react'
import UserContext from './UserContext'

export const HomePage = () => {
  const user = useContext(UserContext)

  return <div>{user.name}</div>
  