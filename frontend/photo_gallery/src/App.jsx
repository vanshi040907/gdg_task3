import './App.css'
import Header from "./components/Header.jsx"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home.jsx"
import Favorites from './pages/favorites.jsx';
import Login_page from './pages/login_page.jsx';
import Footer from './components/footer.jsx';
import Gallery from "./pages/gallery.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login_page />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
