import React, {useState} from 'react'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Mailbox from './components/Mailbox'

function App() {
  const [isLoggedIn, toggleLogin] = useState(false)

  const [unreadMessages, setUnreadMessages] = useState(['Hello', 'world', 'we have your order'])

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button
  const mailbox = isLoggedIn && <Mailbox unreadMessages = {unreadMessages}/>

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />
  } else {
    button = <LoginButton onClick={handleLoginClick} />
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      {mailbox}
    </div>
  )
}

export default App