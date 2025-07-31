import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'All employeers' },
    { name: 'like', label: 'For a rise' },
    { name: 'moreThen1000', label: 'Salary over $1000' },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const activeBtn = props.filter === name,
      clazz = activeBtn ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
