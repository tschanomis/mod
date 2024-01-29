import List from "./List.component";

function StaffMemberList() {
  const addStaffMember = () => {
    console.log("addStaffMember");
  };

  return (
    <div className="StaffMemberList">
      <List itemsType="staffmemberlist" addItem={addStaffMember} />
    </div>
  );
}

export default StaffMemberList;
