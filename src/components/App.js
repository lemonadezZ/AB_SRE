import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class App extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
        <Button onClick={this.show}>首页的</Button>
    )
  }
}

export default App
