import { useState } from "react";
import Button from "react-bootstrap/esm/Button.js";
import Icon from "@mdi/react";
import {mdiTrashCanOutline } from "@mdi/js";


function Item({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);

  return (
    <div>
      <input
        type="text"
        value={value}
        size={33}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
      />{" "}
      <Button variant="secondary" onClick={() => handlerMap.toggleResolveItem({ id: data.id })} size={"sm"}>
          <span style={{ color: "black" }}>{data.resolved ? "Unresolve" : "Resolve"}</span>
        </Button>
      <Button variant="danger"
          onClick={()  => handlerMap.deleteItem({ id: data.id })} size={"sm"}>
          <span style={{ marginRight: '10px'}}>Delete</span>
          <Icon path={mdiTrashCanOutline} size={0.7} />
        </Button>
    </div>
  );
}

export default Item;
