import React from 'react'
import '../utils/prism.css'
import '../utils/custom.css'

class Template extends React.Component {
  render () {
    const { children } = this.props
    return <div className='main-container'>{children()}</div>
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
