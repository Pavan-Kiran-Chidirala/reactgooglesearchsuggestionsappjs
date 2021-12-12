// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateFunction = value => {
    this.setState({searchInput: value})
  }

  ChangeFunction = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const newSuggestionsList = suggestionsList.filter(eachValue =>
      eachValue.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="inner-container">
          <div className="search-holder">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.ChangeFunction}
              value={searchInput}
            />
          </div>
          <ul className="items-holder">
            {newSuggestionsList.map(eachObject => (
              <SuggestionItem
                key={eachObject.id}
                suggestion={eachObject.suggestion}
                sendFunction={this.updateFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
