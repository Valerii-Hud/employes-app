import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';
const App = () => {
  const data = [
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
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeersList data={data} onDelete={(id) => console.log(id)} />
        <EmployeersAddForm />
      </div>
    </div>
  );
};

export default App;
