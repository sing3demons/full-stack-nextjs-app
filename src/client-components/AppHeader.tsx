'use client'

import AppLogo from './AppLogo'
import { FaAmazon } from 'react-icons/fa'

function AppHeader() {
  const showMsg = () => alert('Hello from AppHeader')

  return (
    <div>
      <h1 onClick={showMsg} >AppHeader</h1>
      <AppLogo />
      <h3>
        Lets go for a <FaAmazon />?
      </h3>
    </div>
  )
}

export default AppHeader
