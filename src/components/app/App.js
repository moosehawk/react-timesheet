import React, { Component, PropTypes } from 'react'
import styles from './App.css'

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h2>Hello, OPI</h2>
      </div>
    )
  }
}

App.PropTypes = {
  children: PropTypes.object
}

export default App
