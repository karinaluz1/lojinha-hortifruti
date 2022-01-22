import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Basket from './components/Basket'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  // requisição para api sendo feita pelo arquivo server.js para escapar do bloqueio de CORS
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/data')
      .then(response =>
        setProducts(response.data.map(fruta => ({ ...fruta, price: 10 })))
      )
  }, [])
  const [cartItems, setCartItems] = useState([])
  const onAdd = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  const onRemove = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }
  return (
    <Router>
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <Navbar />
        <Switch>
          <div className="row">
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />
              }}
            >
              <Main onAdd={onAdd} products={products}></Main>
            </Route>
            <Route path="/cart">
              <Basket
                onAdd={onAdd}
                onRemove={onRemove}
                cartItems={cartItems}
              ></Basket>
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  )
}

export default App
