import React from 'react'
import helpers from '../../functions.js'
import TimerActionButton from '../TimerActionButton/TimerActionButton.js'

import './Timer.css'

class Timer extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval)
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id)
  }

  handleStopClick = () => {
    this.props.onStopClick(this.props.id)
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id)
  }

  render() {
    const elapsedString = helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    )

    return (
      <div className="item_timer">
        <div className="header">
          <div className="header--title">{this.props.title}</div>
        </div>
        <div className="content">
          <div className="meta">{this.props.project}</div>
          <div className="description">{elapsedString}</div>
          <div className="extra_content">
            <span onClick={this.props.onEditClick}>
              <img width={15} height={15} src="/edit.svg" />
            </span>
            <span onClick={this.handleTrashClick}>
              <img width={15} height={15} src="/basket.svg" />
            </span>
          </div>
        </div>
        <div className="buttons">
          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
        </div>
      </div>
    )
  }
}

export default Timer
