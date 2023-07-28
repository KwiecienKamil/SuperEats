import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import { Context, ContextProvider } from './context/Context'

function App() {
  return (
    <ContextProvider>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signIn' element={<SignIn />}/>
     </Routes>
     </ContextProvider>
  )
}

export default App
