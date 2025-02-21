
import { BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import LoginSignup from './pages/LoginSignup'
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    
  )
}

export default App
