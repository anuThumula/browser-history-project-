import {Component} from 'react'

import HistoryItem from '../HistoryItem/HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  searchedHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updateHisList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updateHisList
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const updateHisList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: updateHisList})
  }

  render() {
    const {searchInput} = this.state
    const searchedHistoryList = this.searchedHistoryList()

    return (
      <div className="bg-container">
        <div className="head-cont">
          <div className="heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
              alt="app logo"
              className="logo-img"
            />
            <div className="search-bar-cont">
              <div className="search-img-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-img"
                />
              </div>
              <div className="search-cont">
                <input
                  type="search"
                  placeholder="search-input"
                  value={searchInput}
                  className="search-input"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
        </div>

        {searchedHistoryList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="history-cont">
            {searchedHistoryList.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                historyDetails={eachItem}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistory
