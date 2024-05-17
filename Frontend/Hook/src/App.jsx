
import './App.css'
import { Router , Route, Routes} from 'react-router-dom'
import Authpage from './Pages/Authpage'
function App() {
 

  return (
    <>
     <Routes>
      <Route path="/auth/login" element={<Authpage />}></Route>
     </Routes>
    </>
  )
}

export default App
