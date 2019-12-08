import React, { Component } from 'react'

import ReboxUserForm from 'rebox-client'
// import ReboxUserForm from 'rebox-client'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReboxUserForm onChange={(v) => console.log(v)}/>
      </div>
    )
  }
}
