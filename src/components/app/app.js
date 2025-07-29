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
          increase: false,
          like: true,
          id: '0',
        },
        {
          name: 'Alex',
          surname: 'R.',
          salary: 1800,
          increase: false,
          like: false,
          id: '1',
        },
        {
          name: 'Carl',
          surname: 'W.',
          salary: 900,
          increase: false,
          like: false,
          id: '2',
        },
        {
          name: 'Ivan',
          surname: 'H.',
          salary: 1500,
          increase: false,
          like: false,
          id: '3',
        },
      ],
    };
    this.maxId = 4;
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
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, increase: !oldItem.increase };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  };
  onToggleRise = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
          <EmployeersList
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
          />
          <EmployeersAddForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
