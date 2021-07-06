import React from 'react'

import './Link.css'

class Link extends React.Component {
  render() {
    return (
      <div className="link_wrapper">
        <label>
          <div className="link_title">{this.props.label}</div>
          <div className="rainbow">
            <a className="rainbow_elem" href={this.props.link}>
              Перейти
            </a>
          </div>
        </label>
      </div>
    )
  }
}

export default Link
