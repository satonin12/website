import React from 'react'

import './Button.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { callback: this.props.onClick || false }
  }

  click = () => {
    console.log(this.state)
    if (this.state.callback) {
      this.state.callback.call()
    }
  }

  render() {
    // console.log(this)
    const color_border =
      '1px solid ' +
      (this.props.color_border ? `${this.props.color_border}` : 'gray')

    return (
      <button
        style={{
          border: color_border,
          width: this.props.width + 'px',
        }}
        onClick={this.click.bind(this)}
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button
