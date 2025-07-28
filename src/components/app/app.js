import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';
import './app.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John',
          surname: 'C.',
          salary: 600,
          id: 'XFS-FDQ-RGP',
        },
        {
          name: 'Alex',
          surname: 'R.',
          salary: 1800,
          increase: false,
          id: 'PFQ-BJF-CJS',
        },
        {
          name: 'Carl',
          surname: 'W.',
          salary: 900,
          increase: false,
          id: 'FPG-DPA-GPS',
        },
        {
          name: 'Ivan',
          surname: 'H.',
          salary: 1500,
          id: 'DPC-GOS-SPA',
        },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeersList data={this.state.data} onDelete={this.deleteItem} />
          <EmployeersAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
