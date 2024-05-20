
import './App.css'
import { Router , Route, Routes} from 'react-router-dom'
import Authpage from './Pages/Authpage'
import Hero from './Pages/Hero'
function App() {
 

  return (
    <>
     <Routes>
      <Route path="/auth/login" element={<Authpage />}></Route>
      <Route path="/home" element={<Hero />}></Route>
     </Routes>
    </>
  )
}

export default App
