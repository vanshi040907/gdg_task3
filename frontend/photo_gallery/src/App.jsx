import './App.css'
import Header from "./components/Header.jsx"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/home.jsx"
import Favorites from './pages/favorites.jsx';
import Login_page from './pages/login_page.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Login_page/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
