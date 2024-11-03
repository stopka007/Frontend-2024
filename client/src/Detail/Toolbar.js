import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import UpdateNameForm from "./UpdateNameForm";
import Button from "react-bootstrap/esm/Button.js";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";



function Toolbar() {
  const [show, setShow] = useState(false);
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
        show={show}
        handleClose={() => setShow(false)}
        data={data}
        handlerMap={handlerMap}
      />
      {data.name}{" "}
      {loggedInUser === data.owner ? (
        <Button onClick={() => setShow(true)} size={"sm"}>
        <span style={{ marginRight: '5px' }}>Upravit</span>
        <Icon path={mdiPencil} size={0.7} />
      </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Toolbar;
