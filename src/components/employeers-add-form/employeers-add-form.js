import './employeers-add-form.css';
const EmployeersAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add new employeer</h3>
      <form action="#" className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What's his name?"
          name="name"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Salary in $?"
          name="salary"
        />
        <button type="sumbit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeersAddForm;
