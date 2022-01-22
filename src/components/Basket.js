import React from 'react'
import './Basket.css'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 50
  const totalPrice = itemsPrice + taxPrice + shippingPrice
  return (
    <section className="cart">
      <h2>MEU CARRINHO</h2>
      <div>
        {cartItems.length === 0 && <div>Não há itens no carrinho.</div>}
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="cart__item">
          <div className="item__side">{item.name}</div>
          <div className="item__side">
            <button onClick={() => onRemove(item)} className="remove">
              <i className="fas fa-minus"></i>
            </button>
            <button onClick={() => onAdd(item)} className="add">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="item__preco">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="last">
            <div className="last__item">Items Price</div>
            <div className="last__item">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="last">
            <div className="last__item">Tax Price</div>
            <div className="last__item">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="last">
            <div className="last__item">Shipping Price</div>
            <div className="last__item">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="last">
            <div className="last__item">
              <strong>Total Price</strong>
            </div>
            <div className="last__item">${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="checkout">
            <button onClick={() => alert('Implement Checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </section>
  )
}
