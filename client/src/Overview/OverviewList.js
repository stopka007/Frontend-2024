import OverviewItem from "./OverviewItem";

function OverviewList({ OverviewList, handleArchive, handleDelete }) {
  return (
    <div>
      {OverviewList.map((toDoList) => (
        <OverviewItem
          key={toDoList.id}
          toDoList={toDoList}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default OverviewList;
