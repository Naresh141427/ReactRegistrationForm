import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    input1: '',
    input2: '',
    message1: '',
    message2: '',
    inputClassName1: 'success-input',
    inputClassName2: 'success-input',
    success: false,
  }

  onAnotherSubmission = () => {
    this.setState({success: false})
  }

  onEnteringFirstName = event => {
    if (event.target.value.length < 1) {
      this.setState({message1: 'Required', inputClassName1: 'failure-input'})
    } else {
      this.setState({message1: '', inputClassName1: 'success-input'})
    }
  }

  onEnteringLastName = event => {
    if (event.target.value.length < 1) {
      this.setState({message2: 'Required', inputClassName2: 'failure-input'})
    } else {
      this.setState({message2: '', inputClassName2: 'success-input'})
    }
  }

  onEnteringFirstNameText = event => {
    this.setState({input1: event.target.value})
  }

  onEnteringLastNameText = event => {
    this.setState({input2: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {input1, input2} = this.state

    if (input1.length === 0) {
      this.setState({message1: 'Required', inputClassName1: 'failure-input'})
    }
    if (input2.length === 0) {
      this.setState({message2: 'Required', inputClassName2: 'failure-input'})
    }
    if (input1.length > 0 && input2.length > 0) {
      this.setState({success: true, input1: '', input2: ''})
    }
  }

  renderRegistrationFrom = () => {
    const {
      input1,
      input2,
      message1,
      message2,
      inputClassName1,
      inputClassName2,
    } = this.state

    return (
      <div className="app-container">
        <h1 className="header">Registration</h1>
        <div className="container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label htmlFor="first-name" className="lable">
              First Name
            </label>
            <input
              type="input"
              id="first-name"
              placeholder="First Name"
              className={inputClassName1}
              onBlur={this.onEnteringFirstName}
              onChange={this.onEnteringFirstNameText}
              value={input1}
            />
            <p className="error">{message1}</p>
            <label htmlFor="last-name" className="lable">
              Last Name
            </label>
            <input
              type="input"
              id="last-name"
              placeholder="Last name"
              className={inputClassName2}
              onBlur={this.onEnteringLastName}
              onChange={this.onEnteringLastNameText}
              value={input2}
            />
            <p className="error">{message2}</p>
            <div className="button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  renderRegistrationSuccess = () => (
    <div className="app-container">
      <h1 className="header">Registration</h1>
      <div className="container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="tick-image"
          alt="success"
        />
        <p className="success-message">Submitted Successfully</p>
        <button
          className="submit"
          type="button"
          onClick={this.onAnotherSubmission}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {success} = this.state

    return (
      <>
        {!success
          ? this.renderRegistrationFrom()
          : this.renderRegistrationSuccess()}
      </>
    )
  }
}

export default RegistrationForm
