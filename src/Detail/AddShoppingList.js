import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddShoppingList({ show, handleClose, handlerMap }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          handlerMap.createShoppingList(formData);
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add shopping list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Shopping List</Form.Label>
          <Form.Control type="text" name="name" required>  
          </Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddShoppingList;