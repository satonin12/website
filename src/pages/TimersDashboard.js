import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import EditorTimerList from '../component/EditorTimerList/EditorTimerList.js'
import ToggleableTimerForm from '../component/ToggleableTimerForm/ToggleableTimerForm.js'
import helpers from '../functions'

class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'First Times',
        project: 'Vladislav Satonin',
        id: uuidv4(),
        elapsed: 34534,
        runningSince: Date.now(),
      },
      {
        title: 'Two timers in React',
        project: 'Grammy Potter',
        id: uuidv4(),
        elapsed: 2342342,
        runningSince: null,
      },
    ],
  }

  // * create
  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer)
  }

  createTimer = (timer) => {
    const t = helpers.newTimer(timer)

    this.setState({
      timers: this.state.timers.concat(t),
    })
  }

  // * update
  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs)
  }

  updateTimer = (attrs) => {
    this.setState({
      // TODO: find key timer in timers and update for key, don't using map (possible fast)
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          })
        } else {
          return timer
        }
      }),
    })
  }

  // * delete
  onTrashClick = (timerId) => {
    this.deleteTimer(timerId)
  }

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter((_t) => _t.id !== timerId),
    })
  }

  // * start/stop
  handleStartClick = (timerId) => {
    console.log('вызвалась 2')
    this.startTimer(timerId)
  }

  handleStopClick = (timerId) => {
    this.stopTimer(timerId)
  }

  startTimer = (timerId) => {
    const now = Date.now()

    console.log('вызвалась 3')
    console.log(now)
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          })
        } else {
          return timer
        }
      }),
    })
  }

  stopTimer = (timerId) => {
    const now = Date.now()

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince

          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          })
        } else {
          return timer
        }
      }),
    })
  }

  render() {
    return (
      <div className="wrapper_timer">
        <EditorTimerList
          timers={this.state.timers}
          onFormSubmit={this.handleEditFormSubmit}
          onTrashClick={this.onTrashClick}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
      </div>
    )
  }
}

export default TimersDashboard
