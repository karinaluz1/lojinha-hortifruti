import React from 'react'
import './Product.css'

export default function Product(props) {
  const { product, onAdd } = props
  return (
    <div className="lista__product">
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>
        {product.name}
        <span className="tooltip">
          <i className="fas fa-info-circle"></i>
          <div className="tooltiptext">
            <h3>Valor Nutricional</h3>
            <div className="item__valor">
              <span>Calorias</span>
              <span>{product.nutritions.calories}</span>
            </div>
            <div className="item__valor">
              <span>Carboidratos</span>
              <span>{product.nutritions.carbohydrates}</span>
            </div>
            <div className="item__valor">
              <span>Proteínas</span>
              <span>{product.nutritions.protein}</span>
            </div>
            <div className="item__valor">
              <span>Gorduras</span>
              <span>{product.nutritions.fat}</span>
            </div>
            <div className="item__valor">
              <span>Açúcares</span>
              <span>{product.nutritions.sugar}</span>
            </div>
          </div>
        </span>
      </h3>
      <div className="product__price">
        <div>${product.price}</div>

        <button className="price__icon" onClick={() => onAdd(product)}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  )
}
