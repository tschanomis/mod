import List from "./List.component";

function AppointementList() {
  const addAppointement = () => {
    console.log("addApointement");
  };

  return (
    <div className="AppointementList">
      <List itemsType="appointementlist" addItem={addAppointement} />
    </div>
  );
}

export default AppointementList;
