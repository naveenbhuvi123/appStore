import './index.css'

const TabItem = props => {
  const {tabsDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabsDetails
  const activeTab = isActive ? 'btn-button' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className={`tab-list ${activeTab}`}>
      <button type="button" className="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
