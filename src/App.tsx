
import './App.css'
import { Navbar } from './components/Navbar'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Inicio } from './Containers/Inicio'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Carrito } from './Containers/Carrito'

function App() {
  

  return (
    <Provider store={store}>
      <Router>
       <Navbar></Navbar>
       <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
       </Routes>     
      </Router>
    </Provider>
  )
}

export default App
