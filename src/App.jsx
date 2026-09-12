import Header from './component/common/Header'
import Footer from './component/common/Footer'
import Home from './pages/Home'
import Evaluation from './pages/Evaluation'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/evaluation' element={<Evaluation/>} />
          <Route path='/insights' element={<Insights/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App
