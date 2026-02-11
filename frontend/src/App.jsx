import { Landing1 } from './pages'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Landing1 />
    </ThemeProvider>
  )
}

export default App