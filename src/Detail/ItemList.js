import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import Item from "./Item";
import Button from "react-bootstrap/esm/Button.js";
import Icon from "@mdi/react";
import { mdiPlusCircle} from "@mdi/js";

function ItemList() {
  const { data, handlerMap, showResolved, toggleShowResolved } = useContext(DetailContext);

  return (
    <div style={{ 
      display: "grid",
      border: "2px solid green", 
      margin: "10px",
      padding: "10px",
      minHeight: "110px",
      gridTemplateRows: "auto 1fr",
      gridTemplateColumns: "1fr 3fr ",
      }}
    >
    <div style={{ gridColumn: "1", gridRow: "2", display: "grid" , gap: "5px", height: "20px"}}>
        <Button variant="success" onClick={() => handlerMap.addItem()}>
          <span style={{ marginRight: '20px', color: "black" }}>Add Item</span>
          <Icon path={mdiPlusCircle} size={0.9} color={"black"} /> 
        </Button>
        <Button variant="secondary" onClick={() => toggleShowResolved()}>
          <span style={{ color: "black" }}>{showResolved ? "Show unresolved" : "Show all items"}</span>
        </Button>
    </div>
    <div style={{ gridColumn: "2", gridRow: "2", display: "inline-grid", gap: "5px"}}>
          {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
