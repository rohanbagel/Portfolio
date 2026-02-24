import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing1, ChessPage } from './pages'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Landing1 />} />
          <Route path="/chess" element={<ChessPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App