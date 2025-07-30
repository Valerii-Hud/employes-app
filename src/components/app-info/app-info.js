import './app-info.css';

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h2>
        Total Number of Employees: <span>{employees}</span>
      </h2>
      <h2>
        The Bonus Will Be Awarded: <span>{increased}</span>
      </h2>
    </div>
  );
};

export default AppInfo;
