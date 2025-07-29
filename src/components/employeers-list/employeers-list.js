import EmployeersListItem from '../employeers-list-item/employeers-list-item';
import './employeers-list.css';

const EmployeersList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeersListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
