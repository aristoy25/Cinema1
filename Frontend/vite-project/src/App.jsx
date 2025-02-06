import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Added
import { HomePage } from './pages/HomePage';
import { MainNav } from './pages/MainNav';
import MoviesPage from './pages/MoviesPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={MainNav} >
            <Route index Component={HomePage} />
            <Route path='movies' Component={MoviesPage} >
              <Route path=':movieId' Component={MoviesPage} />
            </Route>
            <Route path='about' Component={AboutPage} />
            <Route path='admin' Component={AdminPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
