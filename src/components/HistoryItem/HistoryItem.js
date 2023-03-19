import './HistoryItem.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history">
      <p className="time-acc">{timeAccessed}</p>
      <div className="domain-cont">
        <div className="domain-details">
          <img src={logoUrl} alt="domain logo" className="logo-imgs" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testId="delete"
          className="del-btn"
          type="button"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
