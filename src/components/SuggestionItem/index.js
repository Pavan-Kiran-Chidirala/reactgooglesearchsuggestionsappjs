// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, sendFunction} = props

  const updateFunction = () => {
    sendFunction(suggestion)
  }

  return (
    <li className="item-holder">
      <p className="para">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={updateFunction}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
