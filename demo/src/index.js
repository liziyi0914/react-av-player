import React, {Component} from 'react'
import {render} from 'react-dom'

import { Video,Audio } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>ReactMedia Demo</h1>
      <Video/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
