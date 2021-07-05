import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import ProductList from './component/ProductList.js'

ReactDOM.render(
  <>
    <div className="wrapper">
      <h4>Popular products</h4>
    </div>
    <hr size={1} width={500} />
    <ProductList />
  </>,
  document.getElementById('root')
)
