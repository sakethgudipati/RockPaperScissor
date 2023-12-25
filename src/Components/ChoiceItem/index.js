import './index.css'

const ChoiceItem = props => {
  const {choiceInfo, onClickChoice} = props
  const {id, imageUrl} = choiceInfo
  const onClickItem = () => {
    onClickChoice(id)
  }
  return (
    <li className="choice-item">
      <button type="button" className="choice-button" onClick={onClickItem}>
        .
        <img src={imageUrl} className="icon" alt="your choice" />
      </button>
    </li>
  )
}

export default ChoiceItem
