'use client'

import AppLogo from './AppLogo'

function AppHeader() {
  const showMsg = () => alert('Hello from AppHeader')

  return (
    <div>
      <h1 onClick={showMsg}>AppHeader</h1>
      <AppLogo />
    </div>
  )
}

export default AppHeader
