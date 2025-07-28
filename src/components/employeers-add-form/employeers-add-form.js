import { Component } from 'react';
import './employeers-add-form.css';

class EmployeersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employeer</h3>
        <form action="#" className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button type="sumbit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeersAddForm;
