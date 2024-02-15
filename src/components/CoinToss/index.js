// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    head: 0,
    tail: 0,
  }

  onTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({head: prev.head + 1}))
      this.setState({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prev => ({tail: prev.tail + 1}))
      this.setState({
        tossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  getTotalTosses = () => {
    const {head, tail} = this.state
    const total = head + tail

    return total
  }

  render() {
    const {head, tail, tossImage} = this.state
    const total = this.getTotalTosses()
    return (
      <div className="coin-toss-app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-img" />
          <div>
            <button
              className="coin-toss-btn"
              type="button"
              onClick={this.onTossResult}
            >
              Toss Coin
            </button>
          </div>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {head}</p>
            <p className="count">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
