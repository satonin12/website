import React from 'react'
import Product from '../component/Product/Product'

import Seed from '../Seed.js'

class ProductList extends React.Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({ products: Seed })
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        })
      } else {
        return product
      }
    })
    this.setState({ products: nextProducts })
  }

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes)

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
