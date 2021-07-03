import React from 'react'
import Product from './Product/Product'

import Seed from '../Seed.js'

class ProductList extends React.Component {
  render() {
    const productComponents = Seed.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
      />
    ))

    return <div>{productComponents}</div>
  }
}

export default ProductList
