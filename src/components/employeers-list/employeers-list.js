import EmployeersListItem from '../employeers-list-item/employeers-list-item';
import './employeers-list.css';

const EmployeersList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployeersListItem {...itemProps} key={id} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
