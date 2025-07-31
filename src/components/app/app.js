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
          salary: 6000,
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
      term: '',
      filter: 'all',
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
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, [prop]: !oldItem[prop] };
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
  searchEmployees = (items, term) => {
    if (!term.trim) return items;
    return items.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter((item) => item.like);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };
  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state,
      employees = data.length,
      increased = data.filter((item) => item.increase).length,
      visibleData = this.filterPost(this.searchEmployees(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
          <EmployeersList
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
          />
        </div>
        <EmployeersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
