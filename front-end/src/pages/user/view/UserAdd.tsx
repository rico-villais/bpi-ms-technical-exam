import * as React from "react";

// componets 
import UserLayout from "./UserLayout";
import UserForm from "./UserForm";

class UserAdd extends React.Component {
  render(): React.ReactNode {
    return (
      <UserLayout tabName="Add Record">
        <div style={{display:"grid",justifyContent:"center",gridTemplateColumns:"500px"}}>
          <UserForm viewingAs="add" />
        </div>  
      </UserLayout>
    )
  }
}


export default UserAdd;