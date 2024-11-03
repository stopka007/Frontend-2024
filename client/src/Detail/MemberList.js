import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import AddMemberForm from "./AddMemberForm";
import Member from "./Member";
import Button from "react-bootstrap/esm/Button.js";
import Icon from "@mdi/react";
import { mdiPlusCircle} from "@mdi/js";

function MemberList() {
  const { data, handlerMap } = useContext(DetailContext);
  const { userMap, userList, loggedInUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <div style={{ 
      display: "grid",
      border: "2px solid green", 
      margin: "10px",
      padding: "10px",
      minHeight: "110px",
      gridTemplateRows: "auto 1fr",
      gridTemplateColumns: "1fr 1fr ",
      }}
    >
      <AddMemberForm
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
      />
      
      <div style={{ gridColumn: "1"}}>
        <Member memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
        {data.memberList.map((memberId) => (
        <div>
          <Member
            memberId={memberId}
            data={userMap[memberId]}
            handlerMap={handlerMap}
            showRemoveButton={
              loggedInUser === data.owner || memberId === loggedInUser
            } />
          </div>
         ))}
    </div>
      <div style={{ gridColumn: "2"}}>
        {data.owner === loggedInUser ? (
          <Button variant="success" onClick={() => setShow(true)} size="sm">
          <span style={{ marginRight: '5px', color: "black" }}>Add Member</span>
          <Icon path={mdiPlusCircle} size={0.9} color={"black"} /> 
        </Button>) : ("")}
          
      </div>
    </div>
  );
}

export default MemberList;
