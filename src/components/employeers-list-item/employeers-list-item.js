import './employeers-list-item.css';

const EmployeersListItem = () => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">John Smith</span>
      <input
        type="text"
        className="list-group-item-input"
        name="list-group-item-input"
        defaultValue="1000$"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm" type="button">
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type="button">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star like"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
