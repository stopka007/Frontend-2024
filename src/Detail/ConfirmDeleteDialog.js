import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ConfirmDeleteDialog({ show, handleClose, handlerMap }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          handlerMap.deleteShoppingList({ memberId: values.memberId });
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Shopping list delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Are you sure you want to delete shopping list?</Form.Label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" type="submit">
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ConfirmDeleteDialog;


