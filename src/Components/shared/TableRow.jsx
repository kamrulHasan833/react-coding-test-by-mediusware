import PropTypes from "prop-types";

const TableRow = ({ task }) => {
  return (
    <tr>
      <th className="text-secondary " scope="col">
        {task?.name}
      </th>
      <th className="text-primary" scope="col">
        {task?.status}
      </th>
    </tr>
  );
};
TableRow.propTypes = {
  task: PropTypes.object,
};
export default TableRow;
