import './employeers-list-item.css';
import { Component } from 'react';

class EmployeersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }
  toggleIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  toggleLike = (e) => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };
  render() {
    const { name, surname, salary } = this.props;
    const { increase, like } = this.state;

    let classNames = 'list-group-item d-flex justify-content-between ';
    if (increase) {
      classNames += ' increase';
    }
    if (like) {
      classNames += ' like';
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.toggleLike}>
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
            onClick={this.toggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" type="button">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star like"></i>
        </div>
      </li>
    );
  }
}

export default EmployeersListItem;
