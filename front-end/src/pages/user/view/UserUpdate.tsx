import * as React from "react";

// componets 
import UserLayout from "./UserLayout";
import UserForm from "./UserForm";

class UserUpdate extends React.Component {
  render(): React.ReactNode {
    return (
      <UserLayout tabName="Update Record">
        <div style={{display:"grid",justifyContent:"center",gridTemplateColumns:"500px"}}>
          <UserForm viewingAs="update" />
        </div>  
      </UserLayout>
    )
  }
}

export default UserUpdate;