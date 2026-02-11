import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Landing1, Landing2, Landing3, Landing4, Landing5 } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="/1" element={<Landing1 />} />
        <Route path="/2" element={<Landing2 />} />
        <Route path="/3" element={<Landing3 />} />
        <Route path="/4" element={<Landing4 />} />
        <Route path="/5" element={<Landing5 />} />
      </Routes>
    </Router>
  )
}

export default App