import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import AddShoppingList from "./AddShoppingList";
import UpdateNameForm from "./UpdateNameForm";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog.js";
import Button from "react-bootstrap/esm/Button.js";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCanOutline  } from "@mdi/js";



function ShoppingLists() {
  const [show, setShow] = useState({Update: false, Create: false, Delete: false});
  const { data, handlerMap } = useContext(DetailContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div style={{ 
      display: "flex",
      border: "2px solid green", 
      margin: "10px",
      justifyContent: "space-between",
      gap: "10px",
      padding: "10px" 
      }}
    >
      <UpdateNameForm
        show={show.Update} // Show only if show.Update is true
        handleClose={() => setShow({ ...show, Update: false })}
        data={data}
        handlerMap={handlerMap}
      />
      <AddShoppingList
      show={show.Create} // Show only if show.Create is true
      data={data}
      handlerMap={handlerMap}
      handleClose={() => setShow({ ...show, Create: false })}
      />
      <ConfirmDeleteDialog
      show={show.Delete} // Show only if show.Create is true
      data={data}
      handlerMap={handlerMap}
      handleClose={() => setShow({ ...show, Delete: false })}
      />
      {data.name}{" "}
      {loggedInUser === data.owner ? (
        <Button onClick={() => setShow({ ...show, Update: true })} size={"sm"}>
        <span style={{ marginRight: '5px' }}>Update</span>
        <Icon path={mdiPencil} size={0.7} />
      </Button>
      ) : (
        ""
      )}
      <Button onClick={() => setShow({ ...show, Create: true })} size={"sm"}>
        <span style={{ marginRight: '5px' }}>Create</span>
        <Icon path={mdiPencil} size={0.7} />
      </Button>
      {loggedInUser === data.owner ? (
        <Button variant="danger" onClick={() => setShow({ ...show, Delete: true })} size={"sm"}>
        <span style={{ marginRight: '5px' }}>Delete</span>
        <Icon path={mdiTrashCanOutline} size={0.7} />
      </Button>
      ) : (
        ""
      )}

    </div>
    
  );
}

export default ShoppingLists;
