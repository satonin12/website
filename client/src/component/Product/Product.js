import React from 'react'

import './Product.css'

class Product extends React.Component {

  handleUpVote = () => {
    this.props.onVote(this.props.id)
  }

  render() {
    return (
      <div className="item">
        <div className="image">
          <img
            src={this.props.productImageUrl}
            alt="Picture Product"
            width={100}
            height={100}
          />
        </div>
        <div className="content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i>Проголосовать</i> {this.props.votes}
            </a>
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              src={this.props.submitterAvatarUrl}
              alt="Extra Picture"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Product
