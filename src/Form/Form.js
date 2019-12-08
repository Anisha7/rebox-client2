/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import './form.css'

// async function getNumBoxesForReturn(userId) {
//   const res = await fetch(`https://pizza-box-api.herokuapp.com/user/${userId}`)
//   const json = await res.json()
//   return json
// }

class ReboxUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optIn: false,
      numBoxes: props.numBoxes
    }
  }

  componentDidMount() {
    const { userId } = this.props
    const { numBoxes } = this.state
    if (numBoxes === null) {
      const numBoxes = getNumBoxesForReturn(userId).then(res => res.numBoxes.length)
      this.setState({ numBoxes })
    }
  }
  // Updates data on the user's end

  updateOptIn(checkbox) {
    // console.log(checkbox.target.selected)
    const optIn = checkbox.target.value
    console.log(optIn)
    const { onChange } = this.props
    onChange(optIn)
    this.setState({optIn})
  }

  render() {
    const { numBoxes } = this.state
    let returnString = ''
    if (numBoxes !== null && numBoxes > 0) {
      returnString = <span className='red'>You need to return {numBoxes} of the reusable boxes delivered to you previously.</span>
    }

    return (
      <div className='form'>
        <h1>Opt-in for eco-friendly packaging.</h1>
        <p>
          Fast food produces 32.1 million tons of packaging waste per year. Help
          us reduce material waste.
        </p>
        <div className='checkbox-group'>
          <input type='checkbox' className='checkbox' onChange={e => this.updateOptIn(e)} />
          <p>
            By opting in, you help reduce this waste! We will deliver your food in
            a reusable box. A driver will pick up the boxes when you order again
            from this app.
            <br />
            <br />
            {returnString}
          </p>
        </div>
        <p />
      </div>
    )
  }
}

export const sendReboxUserFormData = (userId, numItems, driverId, restaurantId) => {
  // TODO: send this to backend woohoo
  // https://pizza-box-api.herokuapp.com

  fetch('', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, numItems, driverId, restaurantId })
  })
    .then((res) => res.json())
    .then(() => '200')
    .catch(err => {
      return err
    })
}

export default ReboxUserForm
