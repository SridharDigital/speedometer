import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return {count: prevState.count}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return {count: prevState.count}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2 className="sub-heading">Speed is {count}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.onIncrement}
            className="button btn-accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.onDecrement}
            className="button btn-brake"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
