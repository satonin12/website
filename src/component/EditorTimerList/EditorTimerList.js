import React from 'react'

class EditorTimerList extends React.Component {
  render() {
    return (
      <div className="timers_wrapper">
        <EditableTimer
          title="Learn React"
          project="Web learning"
          elapsed="8986300"
          runningSince={null}
          editFormOpen={false}
        />
      </div>
    )
  }
}

export default EditorTimerList
