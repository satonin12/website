import React from 'react'
import Button from '../Button/Button.js'

import './TimerForm.css'

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  }

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    })
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleProjectChange = (e) => {
    this.setState({ project: e.target.value })
  }

  handleTestClickButton = (e) => {
    console.log('Клик по button e' + e.target)
  }

  render() {
    const submitText = this.props.id ? 'Update' : 'Create'

    return (
      <div className="item_timer_form">
        <div className="content">
          <div className="form">
            <div className="field">
              <label>
                Title
                <input
                  type="text"
                  defaultValue={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Project
                <input
                  type="text"
                  defaultValue={this.state.project}
                  onChange={this.handleProjectChange}
                />
              </label>
            </div>
            <div className="field_button">
              <Button
                text={submitText}
                color_border="#40ec40"
                onClick={this.handleSubmit}
              />
              <Button
                text="Cancel"
                color_border="rgb(255, 150, 150)"
                onClick={this.props.onFormClose}
              />
              {/* <Button text={submitText} color_border="#40ec40" onClick={this.handleTestClickButton} /> */}
              {/* <Button text="Cancel" color_border="rgb(255, 150, 150)" onClick={this.handleTestClickButton} /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimerForm
