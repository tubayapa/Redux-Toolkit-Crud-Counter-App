import { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((store) => store.counterReducer);

  const crudState = useSelector((store) => store.crudReducer);
  // is modal pen state
  const [isOpen, setIsOpen] = useState(false);

  // editing state
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="px-4">
      <Stack className="align-items-end mb-4">
        <Button onClick={() => setIsOpen(true)}>Add New Task</Button>
      </Stack>

      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.isDarkTheme ? "light" : "dark"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Appointer</th>
            <th>Assigned</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm ">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* modal */}
      <FormModal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
        editItem={editItem}
      />
    </div>
  );
};

export default CrudPage;
