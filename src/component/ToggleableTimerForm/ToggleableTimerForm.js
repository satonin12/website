import React from 'react'

import TimerForm from '../TimerForm/TimerForm'

import './ToggleableTimerForm.css'

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  }

  handleFormClose = () => {
    this.setState({ isOpen: false })
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true })
  }

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer)
    this.setState({ isOpen: false })
  }

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      )
    } else {
      return (
        <div className="segment">
          <button onClick={this.handleFormOpen}>+</button>
        </div>
      )
    }
  }
}

export default ToggleableTimerForm
