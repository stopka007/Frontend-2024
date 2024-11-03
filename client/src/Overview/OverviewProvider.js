import { useMemo, useState, useContext } from "react";

import { UserContext } from "../Users/UserProvider.js";

import Header from "./Header.js";
import ToDoListOverviewList from "./OverviewList.js";
import Toolbar from "./Toolbar.js";

function OverviewProvider() {
  const [showArchived, setShowArchived] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const [toDoListOverviewList, setToDoListOverviewList] = useState([
    {
      id: "td01",
      name: "První úkolovník",
      state: "active",
      owner: "u1",
      memberList: ["u2"],
    },
    {
      id: "td02",
      name: "Druhý úkolovník",
      state: "archived",
      owner: "u1",
      memberList: ["u2", "u3"],
    },
    {
      id: "td03",
      name: "Třetí úkolovník",
      state: "active",
      owner: "u3",
      memberList: [],
    },
    {
      id: "td04",
      name: "čtvrtý úkolovník",
      state: "archived",
      owner: "u2",
      memberList: ["u1"],
    },
  ]);

  function handleCreate() {
    setToDoListOverviewList((current) => {
      current.push({
        id: Math.random(),
        name: "Nový úkol",
        state: "active",
        owner: loggedInUser,
        memberList: [],
      });
      return current.slice();
    });
  }

  function handleArchive(dtoIn) {
    setToDoListOverviewList((current) => {
      const itemIndex = current.findIndex((item) => item.id === dtoIn.id);
      current[itemIndex] = { ...current[itemIndex], state: "archived" };
      return current.slice();
    });
  }

  function handleDelete(dtoIn) {
    setToDoListOverviewList((current) => {
      const itemIndex = current.findIndex((item) => item.id === dtoIn.id);
      current.splice(itemIndex, 1);
      return current.slice();
    });
  }

  const filteredToDoListList = useMemo(() => {
    if (showArchived) {
      return toDoListOverviewList.filter(
        (item) =>
          item.owner === loggedInUser || item.memberList?.includes(loggedInUser)
      );
    } else {
      return toDoListOverviewList.filter(
        (item) =>
          item.state === "active" &&
          (item.owner === loggedInUser ||
            item.memberList?.includes(loggedInUser))
      );
    }
  }, [showArchived, toDoListOverviewList, loggedInUser]);

  return (
    <>
      <Header />
      <Toolbar
        handleCreate={handleCreate}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <ToDoListOverviewList
        toDoListOverviewList={filteredToDoListList}
        handleArchive={handleArchive}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default OverviewProvider;
