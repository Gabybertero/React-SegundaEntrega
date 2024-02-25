import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './components/Error/Error404'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Kick's hub"} />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
