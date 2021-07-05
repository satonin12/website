import React from 'react'
import Product from './Product/Product'

import Seed from '../Seed.js'

class ProductList extends React.Component {
  handleProductUpVote(productId) {
    console.log(productId + ' was updated.')
  }

  render() {
    const products = Seed.sort((a, b) => b.votes - a.votes)

    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ))

    return <div>{productComponents}</div>
  }
}

export default ProductList
