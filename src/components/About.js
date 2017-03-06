import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class About extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
		这里是关于我们
	</div>
    )
  }
}

export default About
