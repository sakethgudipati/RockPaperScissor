import {Component} from 'react'
import Popup from 'reactjs-popup'
import ChoiceItem from './Components/ChoiceItem/index'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    outcome: {},
  }

  onClickChoice = id => {
    const index = Math.ceil(Math.random() * choicesList.length)
    console.log(id)
    const pcChoices = choicesList[index]
    console.log(pcChoices.id)
    let result
    if (id === 'ROCK' && pcChoices.id === 'SCISSORS') {
      result = 'WIN'
    } else if (id === 'ROCK' && pcChoices.id === 'PAPER') {
      result = 'LOST'
    } else if (id === 'PAPER' && pcChoices.id === 'ROCK') {
      result = 'WIN'
    } else if (id === 'PAPER' && pcChoices.id === 'SCISSORS') {
      result = 'LOST'
    } else if (id === 'SCISSORS' && pcChoices.id === 'PAPER') {
      result = 'WIN'
    } else if (id === 'SCISSORS' && pcChoices.id === 'ROCK') {
      result = 'LOSS'
    } else if (id === 'ROCK' && pcChoices.id === 'PAPER') {
      result = 'LOSS'
    } else if (id === 'ROCK' && pcChoices.id === 'SCISSORS') {
      result = 'WIN'
    } else if (id === pcChoices.id) {
      result = 'DRAW'
    }
    this.setState({
      outcome: {
        pcChoices,
        result,
      },
    })
  }

  render() {
    return (
      <div className="bg-container">
        <div className="score-banner">
          <p className="title">
            ROCK <br />
            PAPER <br />
            SCISSORS
          </p>
          <div className="score-board">
            <p className="score-head">SCORE</p>
            <h1 className="score">0</h1>
          </div>
        </div>
        <ul className="choices-list">
          {choicesList.map(eachItem => (
            <ChoiceItem
              key={eachItem.id}
              choiceInfo={eachItem}
              onClickChoice={this.onClickChoice}
            />
          ))}
        </ul>
        <div className="popup-container">
          <Popup
            trigger={
              <button className="rules-button" type="button">
                Rules
              </button>
            }
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              className="rules"
              alt="rules"
            />
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
