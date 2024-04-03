import { useState, useEffect } from 'react'
import { Logo } from './Logo'
import { Header } from './Header'
import { Main } from './pages/Main'

function App() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="wrapper">
      {showLogo ? (
        <Logo />
      ) : (
        <>
          <Header />
          <Main />
          <footer className="footer">footer</footer>
        </>
      )}
    </div>
  )
}

export default App
