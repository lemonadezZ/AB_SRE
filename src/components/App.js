import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'
import { Router, Route, Link , browserHistory} from 'react-router'

class App extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>


					<li><Link to="/">Home</Link></li>
				        <li><Link to="/about">About</Link></li>
				        <li><Link to="/topics">Topics</Link></li>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default App
