import Button from "react-bootstrap/esm/Button.js";
import Icon from "@mdi/react";
import {mdiTrashCanOutline } from "@mdi/js";


function Member({ data, handlerMap, isOwner, showRemoveButton }) {
  return (
    <div>
      {data.name}
      {isOwner ? "" : ""}
      {showRemoveButton ? (
        <Button variant="danger"
        onClick={()  => handlerMap.removeMember({ memberId: data.id })} size={"sm"}>
        <span style={{ marginRight: '10px'}}>Delete</span>
        <Icon path={mdiTrashCanOutline} size={0.7} />
      </Button>
      ) : null}
    </div>
  );
}

export default Member;
