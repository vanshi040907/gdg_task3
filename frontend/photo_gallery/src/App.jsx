import './App.css'
import Header from "./components/Header.jsx"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home.jsx"
import Favorites from './pages/favorites.jsx';
import Login_page from './pages/login_page.jsx';
import Footer from './components/footer.jsx';
import Gallery from "./pages/gallery.jsx";
import Signup_page from './pages/signup_page.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login_page />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/signup' element={<Signup_page />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
