import React from 'react'

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create'

    return (
      <div className="item_timer">
        <div className="content">
          <div className="form">
            <div className="field">
              <label>
                Title
                <input type="text" defaultValue={this.props.title} />
              </label>
            </div>
            <div className="field">
              <label>
                Project
                <input type="text" defaultValue={this.props.project} />
              </label>
            </div>
            <div className="field_button">
              <button>{submitText}</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimerForm
