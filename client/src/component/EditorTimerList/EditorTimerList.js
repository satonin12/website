import React from 'react'

import EditableTimer from '../EditableTimer/EditableTimer.js'

import './EditorTimerList.css'

class EditorTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id + timer.title}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
      />
    ))
    return <div className="timers_wrapper">{timers}</div>
  }
}

export default EditorTimerList
