import './App.css'
import Dashboard from './components/Pages/Dashboard'
import { Developers } from './components/Pages/Developers'
import Insights from './components/Pages/Insights'
import ErrorPage from './components/Pages/ErrorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {


  return(
    <>
        <Router>
            <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/developers' element={<Developers />}/>
            <Route path='/insights' element={<Insights />}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </Router>

    </> 
    
    )

   
  
}

export default App
