import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/navigation'
import SignIn from './routes/sign-in/SignIn'

const Shop = () => {
  return <h1>I am the Shop</h1>
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="signIn" element={<SignIn />} />
      </Route>
      
    </Routes>
  )
}

export default App
