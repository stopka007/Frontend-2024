import Header from "./Header";
import ShoppingLists from "./ShoppingLists";
import MemberList from "./MemberList";
import ItemList from "./ItemList";
import DetailProvider from "./DetailProvider";

function Detail() {
  return (
    <div style={{
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridTemplateColumns: "1fr 2fr 1fr",   
      gap: "20px",
      height: "100vh",                     
    }}>
      <DetailProvider>
      <div style={{ gridColumn: "1 / -1" }}>
        <Header />
      </div>
      
      <div style={{ gridColumn: "1 / 2", gridRow: "2" }}>
        <ShoppingLists />
      </div>
      
      <div style={{ gridColumn: "2 / 3", gridRow: "2" }}>
        <ItemList />
      </div>
      
      <div style={{ gridColumn: "3 / 4", gridRow: "2" }}> 
        <MemberList />
      </div>
      </DetailProvider>
    </div>
  );
}

export default Detail;
