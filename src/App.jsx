import { useState, useEffect } from 'react'
import { Logo } from './components/Logo'
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { apiFetch } from './api/cardsData'

function App() {
  const [showLogo, setShowLogo] = useState(true)

  // useEffect(() => {
  //   apiFetch()
  // }, [])

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
