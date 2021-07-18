import React from 'react'
import Button from '../Button/Button'

class TimerActionButton extends React.Component {
  render() {
    const button = this.props.timerIsRunning ? (
      <Button text="Stop" width="150" onClick={this.props.onStopClick} />
    ) : (
      <Button text="Start" width="150" onClick={this.props.onStartClick} />
    )

    return button
  }
}

export default TimerActionButton
