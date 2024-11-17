import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "10px",
        border: "2px solid green",
        marginBottom: "10px",
        background: "lightblue"
      }}>
      <h1>Shopping List</h1>
      <div style={{
        display: "grid",
        gap: "3px",
        justifyContent: "right",
        alignItems: "right",
    }}>
      {userList.map((user) => (
         <button 
         key={user.id} 
         onClick={() => setLoggedInUser(user.id)}
         style={{
           backgroundColor: user.id === loggedInUser ? "green" : "white",
           color: user.id === loggedInUser ? "white" : "black",
           border: "1px solid black",
           padding: "5px 10px",
           borderRadius: "5px",
           cursor: "pointer"
         }}
       >
         {user.name} {user.id === loggedInUser ? "(Logged In)" : ""}
       </button>
      ))}
    </div>
  </div>
  );
}
export default Header;
