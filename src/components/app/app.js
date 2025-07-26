import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';
const App = () => {
  const data = [
    { name: 'John', surname: 'C.', salary: 600, increase: true },
    { name: 'Alex', surname: 'R.', salary: 1800, increase: false },
    { name: 'Carl', surname: 'W.', salary: 900, increase: false },
    { name: 'Ivan', surname: 'H.', salary: 1500, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeersList data={data} />
        <EmployeersAddForm />
      </div>
    </div>
  );
};

export default App;
