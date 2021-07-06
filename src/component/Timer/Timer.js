import React from 'react'

class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed)

    return(
      <div className="item_timer">
        <div className="content">
          <div className="header">
            {this.props.title}
          </div>
          <div className="meta">
            {this.props.project}
          </div>
          <div className="description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra_content">
            <span>
              <i>icon</i>
            </span>
            <span>
              <i>icon 2</i>
            </span>
          </div>
        </div>
        <div className="buttons">
          Start
        </div>
      </div>
    )
  }
}

export default Timer
