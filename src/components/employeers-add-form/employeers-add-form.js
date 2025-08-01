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
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const MIN_NAME_LENGTH = 3,
      MAX_NAME_LENGTH = 100,
      MIN_SALARY = 500;
    const name = this.state.name,
      salary = this.state.salary;
    const nameTemplate = /\d/;

    if (
      name.length >= MIN_NAME_LENGTH &&
      name.length <= MAX_NAME_LENGTH &&
      salary >= MIN_SALARY &&
      !nameTemplate.test(name)
    ) {
      this.props.onAdd(this.state.name, this.state.salary);
    } else {
      console.warn('Something went wrong');
    }
    this.setState({
      name: '',
      salary: '',
    });
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employeer</h3>
        <form action="#" className="add-form d-flex" onSubmit={this.onSubmit}>
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
