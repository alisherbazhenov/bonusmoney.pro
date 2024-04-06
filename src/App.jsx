import { useState, useEffect } from 'react'
import { Logo } from './components/Logo'
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { Spinner } from './components/Spinner/Spinner'

function App() {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false)
    }, 1000)
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
          <footer className="footer">
            <Spinner />
            Подгрузка компаний
          </footer>
        </>
      )}
    </div>
  )
}

export default App
