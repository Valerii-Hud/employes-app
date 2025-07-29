import './employeers-list-item.css';

const EmployeersListItem = (props) => {
  const {
    name,
    surname,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    like,
  } = props;

  let classNames = 'list-group-item d-flex justify-content-between ';
  if (increase) {
    classNames += ' increase';
  }
  if (like) {
    classNames += ' like';
  }
  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name} {surname}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        name="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          type="button"
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star like"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
