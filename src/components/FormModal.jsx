import { Button, Modal, Form } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, handleClose, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const task = Object.fromEntries(formData.entries());

    // If there is an element to update
    if (editItem) {
      dispatch(editTask({ id: editItem.id, ...task }));
    } else {
      dispatch(addTask(task));
    }

    handleClose();
  };

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? "Edit Task" : "Add New Task"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex gap-4 flex-column ">
          <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              type="text"
              placeholder="Edit header"
              required
              name="title"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Appointer</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              type="text"
              placeholder="Exp: Mike"
              required
              name="author"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Assigned</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              type="text"
              placeholder="Exp: Tuba"
              required
              name="assigned_to"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              type="date"
              required
              name="end_date"
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? "Save" : "Create"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
