import { useState } from "react";
import TableRow from "./shared/TableRow";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [allTasks, setAllTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [otherTasks, setOtherTasks] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTasks([]);
    const target = e.target;
    const name = target.name.value;
    const status = target.status.value;
    if (status === "active") {
      setAllTasks([
        ...activeTasks,
        { name, status },
        ...completedTasks,
        ...otherTasks,
      ]);
      setActiveTasks([...activeTasks, { name, status }]);
    } else if (status === "completed") {
      setAllTasks([
        ...activeTasks,
        ...completedTasks,

        { name, status },
        ...otherTasks,
      ]);
      setCompletedTasks([...completedTasks, { name, status }]);
    } else {
      setAllTasks([
        ...activeTasks,
        ...completedTasks,
        ...otherTasks,
        { name, status },
      ]);
      setOtherTasks([...otherTasks, { name, status }]);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all"
                ? allTasks.map((task, idx) => (
                    <TableRow key={idx} task={task} />
                  ))
                : show === "active"
                ? activeTasks.map((task, idx) => (
                    <TableRow key={idx} task={task} />
                  ))
                : completedTasks.map((task, idx) => (
                    <TableRow key={idx} task={task} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
