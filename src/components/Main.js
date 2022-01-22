import React from 'react'
import Product from './Product'
import './Main.css'

export default function Main(props) {
  const { products, onAdd } = props
  return (
    <main className="content">
      <h2>Frutas</h2>
      <div className="content__lista">
        {products.map(products => (
          <Product
            className="lista__product"
            key={products.id}
            product={products}
            onAdd={onAdd}
          ></Product>
        ))}
      </div>
    </main>
  )
}
